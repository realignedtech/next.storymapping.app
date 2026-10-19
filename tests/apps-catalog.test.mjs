import assert from 'node:assert/strict';
import test from 'node:test';

import { realignedApps } from '../src/lib/apps.js';

test('the app switcher contains the complete Realigned Marketplace catalog', () => {
	assert.deepEqual(
		realignedApps.map((app) => app.name),
		[
			'Advanced Story Maps for Jira',
			'Story Maps for Jira',
			'Customer Actions for Jira',
			'Journey Mapping for Jira',
			'Personas for Jira',
			'Denkplan Portfolio Maps for Jira'
		]
	);
});

test('every app has its own icon, URL, and description', () => {
	assert.equal(new Set(realignedApps.map((app) => app.icon)).size, realignedApps.length);
	for (const app of realignedApps) {
		assert.ok(app.url.startsWith('/') || app.url.startsWith('https://'), `${app.name} needs an internal or HTTPS URL`);
		assert.ok(app.description, `${app.name} needs a description`);
	}
});

test('Story Maps entries use host-relative URLs', () => {
	for (const app of realignedApps.filter((app) => app.name.includes('Story Maps'))) {
		assert.ok(app.url.startsWith('/'), `${app.name} should use a host-relative URL`);
	}
});
