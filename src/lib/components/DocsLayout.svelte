<script>
	import { page } from '$app/stores';
	import SiteShell from './SiteShell.svelte';
	import DocsNav from './DocsNav.svelte';
	import DocsSidebar from './DocsSidebar.svelte';
	import DocsArticle from './DocsArticle.svelte';
	import DocsToc from './DocsToc.svelte';
	import { BasicNav, ProNav, StoryMapTitles } from '$lib/docs/nav.js';

	let {
		meta = {},
		title = 'Story Maps',
		marketplaceLink = 'https://marketplace.atlassian.com/apps/1224357',
		demoLink = '',
		children
	} = $props();

	let mobileMenuOpen = $state(false);
	let headings = $state([]);

	function findNavigationTitle(navigation, route) {
		for (const item of navigation) {
			if (item.link === route) return item.title;
			for (const child of item.children || []) {
				if (`${item.link}${child.link}` === route) return child.title;
			}
		}
		return '';
	}

	let currentRoute = $derived($page.url.pathname.replace('/docs', '') || '/');
	let chunks = $derived(currentRoute.split('/').filter(Boolean));
	let active = $derived.by(() => {
		if (chunks[0] === 'pro' && ['features', 'tutorials', 'support'].includes(chunks[1])) {
			return `/pro/${chunks[1]}`;
		}
		if (chunks[0] === 'pro') return '/pro';
		if (chunks[0] === 'tutorials') return '/tutorials';
		return chunks.length ? `/${chunks[0]}` : '/';
	});
	let isProDocs = $derived($page.url.pathname.startsWith('/docs/pro'));
	let currentNav = $derived(isProDocs ? ProNav : BasicNav);
	let currentTitle = $derived(
		findNavigationTitle(currentNav, currentRoute) ||
		StoryMapTitles[chunks[chunks.length - 1]] ||
		(currentRoute === '/' ? StoryMapTitles.intro : 'Documentation')
	);
	let sectionLabel = $derived(isProDocs ? 'Advanced Story Maps documentation' : 'Story Maps documentation');
</script>

<SiteShell
	headTitle={`${currentTitle} | Story Maps for Jira Documentation`}
	description={meta.description || 'Story Maps for Jira Documentation'}
	navTitle={title}
	{demoLink}
	{marketplaceLink}
	highlight="Documentation"
	wide
>
	{#snippet subnav()}<DocsNav />{/snippet}

	<main class="docs-shell">
		<div class="mx-auto max-w-[90rem] px-4 pb-10 pt-12 sm:px-6 sm:pb-12 sm:pt-14 lg:px-8 lg:pb-14 lg:pt-16">
			<button
				type="button"
				class="mobile-menu-button lg:hidden"
				onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
				aria-expanded={mobileMenuOpen}
			>
				<span class="flex items-center gap-2">
					<svg class="h-4 w-4 text-sky-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
					Browse documentation
				</span>
				<svg class:rotate-180={mobileMenuOpen} class="h-4 w-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9 6 6 6-6" /></svg>
			</button>

			{#if mobileMenuOpen}
				<div class="mobile-menu-panel lg:hidden">
					<DocsSidebar navigation={currentNav} {currentRoute} {active} isPro={isProDocs} onnavigate={() => (mobileMenuOpen = false)} />
				</div>
			{/if}

			<div class="docs-grid">
				<aside class="hidden lg:block">
					<div class="sticky top-36">
						<DocsSidebar navigation={currentNav} {currentRoute} {active} isPro={isProDocs} />
					</div>
				</aside>

				<DocsArticle title={currentTitle} {sectionLabel} onheadingschange={(value) => (headings = value)}>
					{@render children()}
				</DocsArticle>

				<aside class="hidden xl:block">
					<div class="sticky top-36 py-2">
						<DocsToc {headings} />
					</div>
				</aside>
			</div>
		</div>
	</main>
</SiteShell>

<style>
	.docs-shell {
		min-height: 58vh;
		border-top: 1px solid rgba(156, 180, 211, 0.08);
		background:
			radial-gradient(circle at 68% 0%, rgba(22, 97, 172, 0.13), transparent 34rem),
			var(--bg-base);
	}

	.docs-grid {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		align-items: start;
		gap: 2rem;
	}

	.mobile-menu-button {
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: space-between;
		border: 1px solid rgba(156, 180, 211, 0.18);
		border-radius: 0.6rem;
		background: var(--bg-surface);
		padding: 0.8rem 0.9rem;
		color: white;
		font-size: 0.86rem;
		font-weight: 600;
	}

	.mobile-menu-panel {
		margin: 0.65rem 0 1rem;
		border: 1px solid rgba(156, 180, 211, 0.16);
		border-radius: 0.65rem;
		background: var(--bg-surface);
		padding: 1rem;
	}

	@media (min-width: 1024px) {
		.docs-grid { grid-template-columns: 15rem minmax(0, 1fr); }
		.mobile-menu-button,
		.mobile-menu-panel { display: none; }
	}

	@media (min-width: 1280px) {
		.docs-grid { grid-template-columns: 15rem minmax(0, 1fr) 12rem; }
	}
</style>
