<script>
	import '../app.css';
	import { page } from '$app/stores';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import outfit400 from '@fontsource/outfit/files/outfit-latin-400-normal.woff2?url';
	import outfit600 from '@fontsource/outfit/files/outfit-latin-600-normal.woff2?url';
	import outfit700 from '@fontsource/outfit/files/outfit-latin-700-normal.woff2?url';

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

<svelte:head>
	<link rel="preload" href={outfit400} as="font" type="font/woff2" crossorigin="anonymous" />
	<link rel="preload" href={outfit600} as="font" type="font/woff2" crossorigin="anonymous" />
	<link rel="preload" href={outfit700} as="font" type="font/woff2" crossorigin="anonymous" />
</svelte:head>

<div class="flex min-h-screen flex-col bg-[var(--bg-base)] text-[var(--text-primary)]">
	<Nav title="Story Maps" {highlight} {marketplaceLink} {wide} />
	<div class="flex-1">{@render children()}</div>
	<Footer {wide} />
</div>
