<script>
	import '../app.css';
	import { page } from '$app/stores';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
	let currentPath = $derived($page.url.pathname);
	let wide = $derived(currentPath.startsWith('/docs') || currentPath.startsWith('/trust'));
	let highlight = $derived(
		currentPath.startsWith('/docs')
			? 'Documentation'
			: currentPath.startsWith('/trust')
				? 'Trust Center'
				: currentPath.startsWith('/showcase')
					? 'Showcase'
					: currentPath.startsWith('/download')
						? 'Download'
						: ''
	);
	let marketplaceLink = $derived(
		currentPath.startsWith('/showcase/advanced')
			? 'https://marketplace.atlassian.com/apps/1224417'
			: 'https://marketplace.atlassian.com/apps/1224357'
	);
</script>

<div class="flex min-h-screen flex-col bg-[var(--bg-base)] text-[var(--text-primary)]">
	<Nav title="Story Maps" {highlight} {marketplaceLink} {wide} />
	<div class="flex-1">{@render children()}</div>
	<Footer {wide} />
</div>
