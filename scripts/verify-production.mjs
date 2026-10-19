import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { canonicalPathByRoute } from '../src/lib/seo/canonical.js';

const origin = (process.argv[2] || 'https://storymapping.app').replace(/\/$/, '');
const sitemap = readFileSync('static/sitemap.xml', 'utf8');
const routes = [...sitemap.matchAll(/<loc>https:\/\/storymapping\.app([^<]*)<\/loc>/g)].map((match) => match[1] || '/');

for (const route of routes) {
	const response = await fetch(`${origin}${route}`, { redirect: 'manual' });
	assert.equal(response.status, 200, `${route}: ${response.status}`);
}

for (const route of ['/docs/', '/download/', '/blog/']) {
	const response = await fetch(`${origin}${route}`, { redirect: 'manual' });
	assert.equal(response.status, 308, `${route}: ${response.status}`);
	assert.equal(new URL(response.headers.get('location'), origin).pathname, route.slice(0, -1));
}

// The trailing-slash canonicalizer must never echo a backslash back in a
// Location header. Browsers normalize "\" to "/", so "/%5Cevil.com/" would
// otherwise redirect to https://evil.com.
for (const probe of ['/%5Cevil.com/', '///%5Cevil.com/']) {
	const response = await fetch(`${origin}${probe}`, { redirect: 'manual' });
	const location = response.headers.get('location');
	if (location) {
		const resolved = new URL(location, origin);
		assert.equal(resolved.origin, origin, `${probe}: redirects off-origin to ${resolved.href}`);
	}
	assert.notEqual(response.status, 200, `${probe}: must not be served as a page`);
}

const migrationAliases = new Map([...canonicalPathByRoute, ['/upgrade', '/free-app']]);
for (const [route, destination] of migrationAliases) {
	const response = await fetch(`${origin}${route}`, { redirect: 'manual' });
	assert.equal(response.status, 301, `${route}: ${response.status}`);
	assert.equal(new URL(response.headers.get('location'), origin).pathname, destination);
}

const home = await fetch(origin);
assert.match(home.headers.get('strict-transport-security') || '', /max-age=31536000/);
assert.equal(home.headers.get('x-frame-options'), 'DENY');
assert.match(home.headers.get('content-security-policy') || '', /frame-ancestors 'none'/);

const robots = await fetch(`${origin}/robots.txt`);
assert.equal(robots.status, 200);
assert.match(await robots.text(), /Allow: \//);
assert.notEqual(robots.headers.get('x-robots-tag'), 'noindex, nofollow');

const missing = await fetch(`${origin}/this-route-must-not-exist`, { redirect: 'manual' });
assert.equal(missing.status, 404);

console.log(`Verified ${routes.length} public routes, migration aliases, security headers, production robots, and real 404s at ${origin}`);
