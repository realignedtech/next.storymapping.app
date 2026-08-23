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
	assert.match(html, /data-umami-event-product="story_maps"[^>]*data-umami-event-listing-id="1224357"[^>]*data-umami-event-intent="free_install"/);
	assert.match(html, /data-umami-event-product="advanced_story_maps"[^>]*data-umami-event-listing-id="1224417"[^>]*data-umami-event-intent="trial"/);
});
