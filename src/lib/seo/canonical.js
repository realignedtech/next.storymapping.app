export const siteOrigin = 'https://storymapping.app';

// Routes that exist in the SvelteKit tree but publish under a different
// production URL. Keep the production URLs that search engines and inbound
// links already know.
export const canonicalPathByRoute = new Map([
	['/showcase/basic', '/free-app'],
	['/docs/support/story-maps-to-advanced', '/docs/support/freetopro']
]);

// Legacy production URLs that no longer have a route of their own. Caddy 301s
// each one to the page that now carries the content, so the URL stays alive
// without a duplicate page in the build. The Advanced documentation used to
// live under /docs/pro-app and the Advanced tutorials under /docs/tutorials;
// both now sit in the one Advanced tree at /docs/pro.
export const legacyRedirects = new Map([
	['/docs/pro-app', '/docs/pro'],
	['/docs/pro-app/overview', '/docs/pro/overview'],
	['/docs/pro-app/pro-setup', '/docs/pro/setup'],
	['/docs/pro-app/pro-admin-guide', '/docs/pro/admin-guide'],
	['/docs/pro-app/board', '/docs/pro/features/board'],
	['/docs/pro-app/export', '/docs/pro/features/export'],
	['/docs/pro-app/map-types', '/docs/pro/features/map-types'],
	['/docs/pro-app/pro-settings', '/docs/pro/features/settings'],
	['/docs/pro-app/pro-story-mapping', '/docs/pro/features/using-the-app'],
	['/docs/pro-app/top-level-elements', '/docs/pro/features/hierarchy'],
	['/docs/tutorials/custom-field-swimlanes', '/docs/pro/tutorials/custom-field-swimlanes'],
	['/docs/tutorials/multi-project-releases', '/docs/pro/tutorials/multi-project-releases']
]);

const routeByCanonicalPath = new Map(
	[...canonicalPathByRoute].map(([route, canonicalPath]) => [canonicalPath, route])
);

export function normalizePath(pathname) {
	return pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
}

export function canonicalPathFor(pathname) {
	const normalized = normalizePath(pathname);
	return canonicalPathByRoute.get(normalized) || normalized;
}

export function sourceRouteFor(pathname) {
	const normalized = normalizePath(pathname);
	return routeByCanonicalPath.get(normalized) || normalized;
}

export function canonicalUrlFor(pathname) {
	return `${siteOrigin}${canonicalPathFor(pathname)}`;
}
