import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

const sitemap = readFileSync('static/sitemap.xml', 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]));

function builtFile(pathname) {
	return pathname === '/' ? 'build/index.html' : `build${pathname}.html`;
}

test('sitemap contains every public route on the production origin', () => {
	assert.equal(urls.length, 47);
	assert.equal(new Set(urls.map((url) => url.pathname)).size, urls.length);
	for (const url of urls) {
		assert.equal(url.origin, 'https://storymapping.app');
		assert.ok(url.pathname === '/' || !url.pathname.endsWith('/'), `${url.pathname} has a trailing slash`);
		assert.ok(existsSync(builtFile(url.pathname)), `${builtFile(url.pathname)} is missing`);
	}
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
