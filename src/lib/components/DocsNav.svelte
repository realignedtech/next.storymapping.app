<script>
	import { page } from '$app/stores';
	import ProductTabs from './ProductTabs.svelte';
	import { docsEditionLinks } from '$lib/docs/edition-links.js';
	import { sourceRouteFor } from '$lib/seo/canonical.js';

	let isProDocs = $derived(sourceRouteFor($page.url.pathname).startsWith('/docs/pro'));
	let links = $derived(docsEditionLinks($page.url.pathname));
	let tabs = $derived([
		{ id: 'core', href: links.core, label: 'Story Maps Docs', icon: '/smFreeIcon.svg' },
		{ id: 'pro', href: links.pro, label: 'Advanced Story Maps Docs', icon: '/smProIcon.svg', badge: 'Pro' }
	]);
</script>

<ProductTabs {tabs} active={isProDocs ? 'pro' : 'core'} wide />
