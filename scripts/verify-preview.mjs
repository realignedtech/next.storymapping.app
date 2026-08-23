import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const origin = (process.argv[2] || 'https://next.storymapping.app').replace(/\/$/, '');
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

const previewRobots = await fetch(`${origin}/robots.txt`);
assert.equal(previewRobots.status, 200);
assert.match(await previewRobots.text(), /Disallow: \//);
assert.equal(previewRobots.headers.get('x-robots-tag'), 'noindex, nofollow');

const missing = await fetch(`${origin}/this-route-must-not-exist`, { redirect: 'manual' });
assert.equal(missing.status, 404);

console.log(`Verified ${routes.length} public routes, trailing-slash redirects, preview robots, and real 404s at ${origin}`);
