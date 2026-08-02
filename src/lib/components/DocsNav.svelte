<script>
	import { page } from '$app/stores';
	import ProductTabs from './ProductTabs.svelte';

	let isProDocs = $derived($page.url.pathname.includes('/docs/pro'));
	const tabs = [
		{ id: 'core', href: '/docs', label: 'Story Maps Docs', icon: '/smFreeIcon.svg' },
		{ id: 'pro', href: '/docs/pro', label: 'Advanced Story Maps Docs', icon: '/smProIcon.svg', badge: 'Pro' }
	];
</script>

<ProductTabs {tabs} active={isProDocs ? 'pro' : 'core'} wide />
