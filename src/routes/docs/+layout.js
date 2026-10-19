import { sourceRouteFor } from '$lib/seo/canonical.js';

const pageModules = import.meta.glob('./**/+page.md', { eager: true });

export function load({ url }) {
	const relativePath = sourceRouteFor(url.pathname).slice('/docs'.length);
	const modulePath = relativePath ? `.${relativePath}/+page.md` : './+page.md';
	return { meta: pageModules[modulePath]?.metadata || {} };
}
