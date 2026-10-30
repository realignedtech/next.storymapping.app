import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';
import { canonicalPathByRoute } from '../src/lib/seo/canonical.js';

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
	'/docs/pro-app',
	'/docs/pro-app/board',
	'/docs/pro-app/export',
	'/docs/pro-app/map-types',
	'/docs/pro-app/overview',
	'/docs/pro-app/pro-admin-guide',
	'/docs/pro-app/pro-settings',
	'/docs/pro-app/pro-setup',
	'/docs/pro-app/pro-story-mapping',
	'/docs/pro-app/top-level-elements',
	'/docs/support',
	'/docs/support/eula',
	'/docs/support/freetopro',
	'/docs/support/privacy',
	'/docs/support/troubleshooting',
	'/docs/tutorials',
	'/docs/tutorials/custom-field-swimlanes',
	'/docs/tutorials/multi-project-releases',
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
