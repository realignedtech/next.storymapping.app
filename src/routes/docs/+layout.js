import { sourceRouteFor } from '$lib/seo/canonical.js';

const pageModules = import.meta.glob('./**/+page.md');

export async function load({ url }) {
	const relativePath = sourceRouteFor(url.pathname).slice('/docs'.length);
	const modulePath = relativePath ? `.${relativePath}/+page.md` : './+page.md';
	const pageModule = await pageModules[modulePath]?.();
	return { meta: pageModule?.metadata || {} };
}
