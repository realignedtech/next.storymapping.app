// Generate static/sitemap.xml from the SvelteKit route tree.
//
// The sitemap used to be hand-maintained and carried no <lastmod>, which left
// Google guessing which of the 55 URLs had actually changed (audit R4/A04).
// This script walks every +page.svelte/+page.md, maps it to its canonical URL
// (so migration aliases are not listed twice) and stamps a truthful <lastmod>
// from the page's frontmatter `updated` field or, failing that, the last commit
// that touched the route file. Build time is never used as a freshness signal.
//
// Run automatically by `npm run build` (prebuild) and by `npm test`.

import { execFileSync } from 'node:child_process';
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { canonicalPathFor } from '../src/lib/seo/canonical.js';

const root = fileURLToPath(new URL('..', import.meta.url));
const routesDir = join(root, 'src/routes');
const sitemapPath = join(root, 'static/sitemap.xml');
const origin = 'https://storymapping.app';

function walk(directory) {
	return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
		const path = join(directory, entry.name);
		return entry.isDirectory() ? walk(path) : [path];
	});
}

function routeFor(file) {
	const relativeDir = relative(routesDir, dirname(file)).split(/[\\/]/).join('/');
	return relativeDir === '' ? '/' : `/${relativeDir}`;
}

function frontmatterUpdated(file) {
	if (!file.endsWith('.md')) return '';
	const match = readFileSync(file, 'utf8').match(/^---\r?\n([\s\S]*?)\r?\n---/);
	if (!match) return '';
	const updated = match[1].match(/^updated:\s*["']?([^"'\n]+?)["']?\s*$/m);
	return updated ? updated[1].trim() : '';
}

function gitCommittedAt(file) {
	try {
		return execFileSync('git', ['log', '-1', '--format=%cI', '--', relative(root, file)], {
			encoding: 'utf8',
			stdio: ['ignore', 'pipe', 'ignore']
		}).trim();
	} catch {
		return '';
	}
}

function lastmodFor(file) {
	for (const candidate of [frontmatterUpdated(file), gitCommittedAt(file)]) {
		if (!candidate) continue;
		const parsed = new Date(candidate);
		if (!Number.isNaN(parsed.valueOf())) return parsed.toISOString();
	}
	return statSync(file).mtime.toISOString();
}

const lastmodByPath = new Map();
for (const file of walk(routesDir).filter((path) => /\+page\.(svelte|md|svx)$/.test(path))) {
	const canonicalPath = canonicalPathFor(routeFor(file));
	const lastmod = lastmodFor(file);
	const current = lastmodByPath.get(canonicalPath);
	if (!current || new Date(lastmod) > new Date(current)) lastmodByPath.set(canonicalPath, lastmod);
}

const lines = [...lastmodByPath.entries()]
	.sort(([a], [b]) => (a === '/' ? -1 : b === '/' ? 1 : a.localeCompare(b)))
	.map(([path, lastmod]) => {
		const loc = path === '/' ? origin : `${origin}${path}`;
		return `\t<url><loc>${loc}</loc><lastmod>${lastmod}</lastmod></url>`;
	});

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${lines.join('\n')}\n</urlset>\n`;

writeFileSync(sitemapPath, xml);
console.log(`sitemap: wrote ${lastmodByPath.size} URLs to static/sitemap.xml`);
