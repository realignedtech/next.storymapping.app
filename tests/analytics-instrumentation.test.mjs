import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const pages = ['build/index.html', 'build/docs.html', 'build/download.html'];

test('primary conversion journeys retain named Umami events', () => {
	for (const path of pages) {
		const html = readFileSync(path, 'utf8');
		assert.match(html, /data-umami-event="docs_journey"/);
		assert.match(html, /data-umami-event="download_click"/);
		assert.match(html, /data-umami-event="marketplace_click"/);
	}
});

test('every rendered named event includes source page and placement', () => {
	for (const path of pages) {
		const html = readFileSync(path, 'utf8');
		for (const tag of html.match(/<a\b[^>]*data-umami-event="[^"]+"[^>]*>/g) || []) {
			assert.match(tag, /data-umami-event-source-page="[^"]+"/, tag);
			assert.match(tag, /data-umami-event-placement="[a-z0-9_]+"/, tag);
		}
	}
});

test('Marketplace events classify both editions', () => {
	const html = readFileSync('build/download.html', 'utf8');
	assert.match(html, /data-umami-event-product="story_maps"[^>]*data-umami-event-listing-id="1224357"[^>]*data-umami-event-intent="trial"/);
	assert.match(html, /data-umami-event-product="advanced_story_maps"[^>]*data-umami-event-listing-id="1224417"[^>]*data-umami-event-intent="trial"/);
});

test('product-page Marketplace links are edition-aware and tracked', () => {
	for (const [path, listingId, product] of [
		['build/showcase/advanced.html', '1224417', 'advanced_story_maps'],
		['build/free-app.html', '1224357', 'story_maps']
	]) {
		const html = readFileSync(path, 'utf8');
		const links = html.match(/<a\b[^>]*href="[^"]*marketplace\.atlassian\.com\/(?:apps\/)?(?:1224357|1224417)[^"]*"[^>]*>/g) || [];
		assert.ok(links.length > 0, `${path} has no Marketplace links`);
		for (const tag of links) {
			assert.match(tag, /data-umami-event="marketplace_click"/, tag);
			assert.match(tag, new RegExp(`data-umami-event-listing-id="${listingId}"`), tag);
			assert.match(tag, new RegExp(`data-umami-event-product="${product}"`), tag);
		}
	}
});
