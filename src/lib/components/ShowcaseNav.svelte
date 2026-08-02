<script>
	import ProductTabs from './ProductTabs.svelte';

	let { currentPage = '' } = $props();
	const tabs = [
		{ id: 'basic', href: '/showcase/basic', label: 'Story Maps', icon: '/smFreeIcon.svg' },
		{ id: 'advanced', href: '/showcase/advanced', label: 'Advanced Story Maps', icon: '/smProIcon.svg', badge: 'Pro' }
	];
</script>

<ProductTabs {tabs} active={currentPage} backHref="/" backLabel="Compare versions" />
