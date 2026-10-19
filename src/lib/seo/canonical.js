export const siteOrigin = 'https://storymapping.app';

// These pages were reorganized during the SvelteKit migration. Keep the
// production URLs that search engines and inbound links already know.
export const canonicalPathByRoute = new Map([
	['/showcase/basic', '/free-app'],
	['/docs/pro', '/docs/pro-app'],
	['/docs/pro/overview', '/docs/pro-app/overview'],
	['/docs/pro/setup', '/docs/pro-app/pro-setup'],
	['/docs/pro/admin-guide', '/docs/pro-app/pro-admin-guide'],
	['/docs/pro/features/board', '/docs/pro-app/board'],
	['/docs/pro/features/export', '/docs/pro-app/export'],
	['/docs/pro/features/map-types', '/docs/pro-app/map-types'],
	['/docs/pro/features/settings', '/docs/pro-app/pro-settings'],
	['/docs/pro/features/using-the-app', '/docs/pro-app/pro-story-mapping'],
	['/docs/pro/features/hierarchy', '/docs/pro-app/top-level-elements'],
	['/docs/pro/tutorials/custom-field-swimlanes', '/docs/tutorials/custom-field-swimlanes'],
	['/docs/pro/tutorials/multi-project-releases', '/docs/tutorials/multi-project-releases'],
	['/docs/support/story-maps-to-advanced', '/docs/support/freetopro']
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
