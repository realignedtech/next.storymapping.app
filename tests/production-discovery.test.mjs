import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, relative } from 'node:path';
import test from 'node:test';
import { canonicalPathByRoute, canonicalPathFor, legacyRedirects } from '../src/lib/seo/canonical.js';

const sitemap = readFileSync('static/sitemap.xml', 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]));

const establishedPaths = [
	'/about',
	'/',
	'/articles/creating-a-portfolio-map-with-advanced-storymaps',
	'/articles/get-started-with-user-story-mapping',
	'/articles/how-to-do-cross-project-releases-in-jira',
	'/articles/how-to-use-custom-fields-on-cards-effectively',
	'/articles/story-maps-for-jira',
	'/articles/story-maps-for-jira-is-all-new',
	'/blog',
	'/contact',
	'/docs',
	'/docs/best-practices',
	'/docs/best-practices/storyvsjourneymap',
	'/docs/pro',
	'/docs/pro/overview',
	'/docs/pro/setup',
	'/docs/pro/admin-guide',
	'/docs/pro/features',
	'/docs/pro/features/board',
	'/docs/pro/features/export',
	'/docs/pro/features/map-types',
	'/docs/pro/features/settings',
	'/docs/pro/features/using-the-app',
	'/docs/pro/features/hierarchy',
	'/docs/pro/migration',
	'/docs/pro/cloud-migration',
	'/docs/pro/whatsnew',
	'/docs/pro/tutorials',
	'/docs/pro/tutorials/custom-field-swimlanes',
	'/docs/pro/tutorials/multi-project-releases',
	'/docs/pro/support',
	'/docs/pro/support/troubleshooting',
	'/docs/pro/support/privacy',
	'/docs/pro/support/eula',
	'/docs/support',
	'/docs/support/eula',
	'/docs/support/freetopro',
	'/docs/support/privacy',
	'/docs/support/troubleshooting',
	'/docs/tutorials',
	'/docs/tutorials/working-with-the-map',
	'/docs/tutorials/planning-sprints-and-releases',
	'/docs/whatsnew',
	'/free-app',
	'/trust',
	'/trust/bug-bounty-program',
	'/trust/bug-fix-policy',
	'/trust/privacy-policy',
	'/trust/security-and-privacy-faq',
	'/trust/security-policy',
	'/trust/security-scanning',
	'/trust/self-assessment-questionaire'
];

function builtFile(pathname) {
	return pathname === '/' ? 'build/index.html' : `build${pathname}.html`;
}

test('sitemap contains every public route on the production origin', () => {
	assert.equal(urls.length, 55);
	assert.equal(new Set(urls.map((url) => url.pathname)).size, urls.length);
	for (const url of urls) {
		assert.equal(url.origin, 'https://storymapping.app');
		assert.ok(url.pathname === '/' || !url.pathname.endsWith('/'), `${url.pathname} has a trailing slash`);
		assert.ok(existsSync(builtFile(url.pathname)), `${builtFile(url.pathname)} is missing`);
	}
});

test('every sitemap URL carries a real lastmod date', () => {
	const entries = [...sitemap.matchAll(/<url><loc>([^<]+)<\/loc><lastmod>([^<]+)<\/lastmod><\/url>/g)];
	assert.equal(entries.length, urls.length, 'every <loc> needs a matching <lastmod>');
	for (const [, loc, lastmod] of entries) {
		const parsed = new Date(lastmod);
		assert.ok(!Number.isNaN(parsed.valueOf()), `${loc} has an invalid lastmod: ${lastmod}`);
	}
});

// A shallow CI checkout dated every URL with the deploy commit (live on
// 2026-11-04: all 55 at 09:02:37). Real content dates differ between pages.
test('sitemap lastmod dates come from page history, not one build-wide date', () => {
	const dates = new Set([...sitemap.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map((match) => match[1]));
	assert.ok(dates.size > 5, `only ${dates.size} distinct lastmod value(s) across ${urls.length} URLs`);
});

test('docs TechArticle dateModified matches the sitemap date for that page', () => {
	const lastmod = new Map(
		[...sitemap.matchAll(/<url><loc>([^<]+)<\/loc><lastmod>([^<]+)<\/lastmod><\/url>/g)].map(
			([, loc, date]) => [canonicalPathFor(new URL(loc).pathname), date]
		)
	);
	let checked = 0;
	for (const file of readdirSync('build/docs', { recursive: true }).filter((path) => String(path).endsWith('.html'))) {
		const path = canonicalPathFor(`/docs/${String(file).replace(/\\/g, '/').replace(/\.html$/, '')}`);
		const html = readFileSync(join('build/docs', String(file)), 'utf8');
		const article = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
			.flatMap((match) => [JSON.parse(match[1])].flat())
			.find((item) => item['@type'] === 'TechArticle');
		if (!article || !lastmod.has(path)) continue;
		const expected = new Date(lastmod.get(path)) > new Date(article.datePublished) ? lastmod.get(path) : article.datePublished;
		assert.equal(article.dateModified, expected, `${path} dateModified`);
		checked += 1;
	}
	assert.ok(checked > 20, `only ${checked} docs pages checked`);
});

test('Organization sameAs names the Marketplace vendor profile (MA-98)', () => {
	const html = readFileSync('build/index.html', 'utf8');
	assert.match(html, /"sameAs":\[[^\]]*"https:\/\/marketplace\.atlassian\.com\/vendors\/1213963"/);
	assert.doesNotMatch(html, /1211748/);
});

test('every canonical page has at least three internal inbound links', () => {
	function walk(directory) {
		return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
			const path = join(directory, entry.name);
			return entry.isDirectory() ? walk(path) : [path];
		});
	}
	const pages = new Map();
	for (const file of walk('build').filter((path) => path.endsWith('.html'))) {
		const rel = relative('build', file).replace(/\.html$/, '');
		pages.set(canonicalPathFor(rel === 'index' ? '/' : `/${rel}`), file);
	}
	const inbound = new Map();
	for (const [page, file] of pages) {
		const html = readFileSync(file, 'utf8');
		const targets = new Set();
		for (const match of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
			let href = match[1];
			if (!href.startsWith('/') || href.startsWith('//')) continue;
			href = href.split('#')[0].split('?')[0].replace(/\/+$/, '') || '/';
			if (/\.[a-z0-9]+$/i.test(href)) continue;
			const target = canonicalPathFor(href);
			if (target !== page) targets.add(target);
		}
		for (const target of targets) {
			if (!inbound.has(target)) inbound.set(target, new Set());
			inbound.get(target).add(page);
		}
	}
	for (const page of pages.keys()) {
		const count = inbound.get(page)?.size || 0;
		assert.ok(count >= 3, `${page} has only ${count} internal inbound links`);
	}
});

test('the migration preserves every established production URL as canonical', () => {
	const sitemapPaths = new Set(urls.map((url) => url.pathname));
	for (const pathname of establishedPaths) {
		assert.ok(sitemapPaths.has(pathname), `established URL missing from sitemap: ${pathname}`);
		const html = readFileSync(builtFile(pathname), 'utf8');
		const canonical = `https://storymapping.app${pathname}`;
		assert.match(html, new RegExp(`<link rel="canonical" href="${canonical.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`));
		assert.match(html, new RegExp(`<meta property="og:url" content="${canonical.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`));
	}
});

test('renamed migration routes point back to the established canonical URLs', () => {
	for (const [route, canonicalPath] of canonicalPathByRoute) {
		const html = readFileSync(builtFile(route), 'utf8');
		assert.match(html, new RegExp(`<link rel="canonical" href="https://storymapping\\.app${canonicalPath}"`));
	}
});

test('retired documentation URLs redirect to the page that now carries the content', () => {
	const caddyfile = readFileSync('deploy/Caddyfile', 'utf8');
	for (const [route, canonicalPath] of legacyRedirects) {
		assert.match(caddyfile, new RegExp(`\\bredir ${route} ${canonicalPath} 301`), `${route} needs an edge redirect`);
		assert.ok(existsSync(builtFile(canonicalPath)), `${canonicalPath} is not in the build`);
	}
});

test('deployment redirects every renamed migration route to its canonical URL', () => {
	const caddyfile = readFileSync('deploy/Caddyfile', 'utf8');
	for (const [route, canonicalPath] of canonicalPathByRoute) {
		assert.match(caddyfile, new RegExp(`\\bredir ${route} ${canonicalPath} 301`));
	}
});

test('the retired journeymapping.app host redirects to the storymapping.app home', () => {
	const caddyfile = readFileSync('deploy/Caddyfile', 'utf8');
	assert.match(caddyfile, /@journeymapping host journeymapping\.app www\.journeymapping\.app/);
	assert.match(caddyfile, /redir @journeymapping https:\/\/storymapping\.app\/ 301/);
});

test('the retired story map vs journey map page keeps its one-to-one redirect', () => {
	const caddyfile = readFileSync('deploy/Caddyfile', 'utf8');
	const specific = caddyfile.indexOf('redir @journeymappingStoryVsJourney https://storymapping.app/docs/best-practices/storyvsjourneymap 301');
	const catchAll = caddyfile.indexOf('redir @journeymapping https://storymapping.app/ 301');
	assert.ok(specific > -1, 'missing the storyvsjourneymap redirect');
	assert.ok(specific < catchAll, 'the specific journeymapping redirect must come before the catch-all');
	assert.match(caddyfile, /path \/docs\/storyvsjourneymap \/docs\/storyvsjourneymap\//);
	assert.ok(existsSync(builtFile('/docs/best-practices/storyvsjourneymap')), 'redirect target is not in the build');
});

test('CI validates the Caddyfile before the image is pushed', () => {
	const workflow = readFileSync('.github/workflows/deploy.yml', 'utf8');
	const validate = workflow.indexOf('caddy validate --config /etc/caddy/Caddyfile');
	assert.ok(validate > -1, 'deploy.yml no longer validates the Caddyfile');
	assert.ok(validate < workflow.indexOf('docker/build-push-action'), 'validation must run before the image is pushed');
});

test('indexed blog and article routes remain available', () => {
	const required = [
		'/blog',
		'/articles/creating-a-portfolio-map-with-advanced-storymaps',
		'/articles/get-started-with-user-story-mapping',
		'/articles/how-to-do-cross-project-releases-in-jira',
		'/articles/how-to-use-custom-fields-on-cards-effectively',
		'/articles/story-maps-for-jira',
		'/articles/story-maps-for-jira-is-all-new'
	];
	for (const route of required) assert.ok(urls.some((url) => url.pathname === route), route);
});

test('docs and articles render one visible document heading and canonical metadata', () => {
	for (const url of urls.filter((url) => url.pathname.startsWith('/docs') || url.pathname.startsWith('/articles'))) {
		const html = readFileSync(builtFile(url.pathname), 'utf8');
		assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${url.pathname} must have one h1`);
		assert.match(html, new RegExp(`<link rel="canonical" href="${url.href.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`));
	}
});

test('Trust Center pages render one document heading and route-specific metadata', () => {
	const trustPages = urls.filter((url) => url.pathname.startsWith('/trust'));
	const descriptions = new Set();
	for (const url of trustPages) {
		const html = readFileSync(builtFile(url.pathname), 'utf8');
		assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${url.pathname} must have one h1`);
		const description = html.match(/<meta name="description" content="([^"]+)"/);
		assert.ok(description, `${url.pathname} needs a description`);
		descriptions.add(description[1]);
	}
	assert.equal(descriptions.size, trustPages.length, 'Trust Center descriptions must be route-specific');
});

test('documentation metadata comes from each page', () => {
	const basic = readFileSync('build/docs/getting-started.html', 'utf8');
	const advanced = readFileSync('build/docs/pro/setup.html', 'utf8');
	assert.match(basic, /<meta name="description" content="Install Story Maps for Jira, open it in a Jira Software project/);
	assert.match(advanced, /<meta name="description" content="Set up Advanced Story Maps for Jira/);
	assert.notEqual(basic.match(/<title>([^<]+)/)?.[1], advanced.match(/<title>([^<]+)/)?.[1]);
});

test('article pages retain their specific titles', () => {
	const html = readFileSync('build/articles/how-to-do-cross-project-releases-in-jira.html', 'utf8');
	assert.match(html, /<title>How to do Cross Project Releases in Jira/);
	assert.doesNotMatch(html, /<title>Blog<\/title>/);
});

test('robots and sitemap identify the production host', () => {
	const robots = readFileSync('static/robots.txt', 'utf8');
	assert.match(robots, /Allow: \//);
	assert.match(robots, /Host: https:\/\/storymapping\.app/);
	assert.match(robots, /Sitemap: https:\/\/storymapping\.app\/sitemap\.xml/);
});

test('every deployment redirect lands on a built page', () => {
	const caddyfile = readFileSync('deploy/Caddyfile', 'utf8');
	const redirects = [...caddyfile.matchAll(/^\tredir (\/\S*) (\/\S*) 301$/gm)];
	assert.ok(redirects.length > 20);
	for (const [, from, to] of redirects) {
		assert.ok(existsSync(builtFile(to)), `${from} redirects to ${to}, which is not in the build`);
	}
});
