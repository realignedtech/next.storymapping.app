<script>
	import Header from './Header.svelte';
	import { page } from '$app/stores';
	import { canonicalUrlFor, siteOrigin } from '$lib/seo/canonical.js';
	import { articleSchema, breadcrumbSchema, videoObjectSchema } from '$lib/seo/schema.js';

	let { 
		meta = {}, 
		title = "Story Maps", 
		marketplaceLink = "https://marketplace.atlassian.com/1224357", 
		demoLink = "",
		children
	} = $props();

	let showImage = $state(null);

	function handleImageClick(src) {
		showImage = src;
	}

	function closeModal() {
		showImage = null;
	}

	const APP_LINK = "https://marketplace.atlassian.com/apps/1224357";
	let sourcePage = $derived($page.url.pathname === '/' ? '/' : $page.url.pathname.replace(/\/+$/, ''));
	let publishedTime = $derived(meta.date ? new Date(`${meta.date}T00:00:00Z`).toISOString() : '');
	let shareImage = $derived(meta.highlight ? `${siteOrigin}${meta.highlight}` : `${siteOrigin}/realignedOG.png`);
	let structuredData = $derived.by(() => {
		if (!meta.title) return [];
		const schemas = [
			articleSchema({
				headline: meta.title,
				description: meta.description,
				url: canonicalUrlFor($page.url.pathname),
				datePublished: publishedTime,
				image: shareImage
			}),
			breadcrumbSchema([
				{ name: 'Home', url: siteOrigin },
				{ name: 'Articles', url: `${siteOrigin}/blog` },
				{ name: meta.title, url: canonicalUrlFor($page.url.pathname) }
			])
		];
		if (meta.video) {
			schemas.push(videoObjectSchema(meta.video));
		}
		return schemas;
	});
</script>

<svelte:head>
	{#if meta.preloadImage}
		<link rel="preload" as="image" href={meta.preloadImage} fetchpriority="high" />
	{/if}
</svelte:head>

<div class="flex flex-col min-h-screen">
<Header
	title={meta.title || "Blog"}
	description={meta.description || "Story Maps Blog"}
	ogType={meta.title ? 'article' : 'website'}
	{publishedTime}
	image={shareImage}
	jsonLd={structuredData}
/>

<!-- Modal for images -->
{#if showImage}
	<div class="blanket" role="dialog" tabindex="-1" onclick={closeModal} onkeydown={(e) => e.key === 'Escape' && closeModal()}>
		<div class="modal_image">
			<img src={showImage} alt="" class="max-w-full max-h-full" />
		</div>
	</div>
{/if}

<main class="flex-1 max-w-6xl mx-auto flex flex-col md:flex-row py-8 px-4">
	<article class="w-full bg-white p-8 md:p-24 pt-14 mb-[150px] rounded-3xl shadow-1">
		
		<!-- Blog Header -->
		<div class="pt-6 pb-16">
			<a href="/blog" class="text-[var(--accent-cyan)] font-semibold no-underline hover:text-[var(--action-hover)]">Blog</a>
			<h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4 mt-4">{meta.title}</h1>
			<span class="text-lg text-gray-400">{new Date(meta.date)?.toDateString()}</span>
		</div>

		<div class="text-left">
			{#if meta.highlight}
				<div>
					<button type="button" onclick={() => handleImageClick(meta.highlight)} class="block mx-auto border-none bg-transparent p-0">
						<img src={meta.highlight} alt={meta.highlightAlt || ""} class="lg:max-w-3xl cursor-pointer mx-auto py-12" />
					</button>
				</div>
			{/if}

			<div class="prose prose-lg max-w-none
				prose-headings:text-gray-800
				prose-h1:text-3xl prose-h1:mb-3 prose-h1:font-bold
				prose-h2:text-3xl prose-h2:mb-3 prose-h2:mt-16 prose-h2:font-bold
				prose-h3:text-xl prose-h3:mb-3 prose-h3:font-bold
				prose-h4:text-lg prose-h4:mb-1 prose-h4:font-semibold
				prose-p:my-5 prose-p:text-lg
				prose-strong:font-semibold
				prose-ul:list-disc prose-ul:pl-4 prose-ul:text-lg
				prose-ol:list-decimal prose-ol:pl-5 prose-ol:text-lg
				prose-a:font-semibold prose-a:no-underline prose-a:text-[var(--accent-cyan)] hover:prose-a:text-[var(--action-hover)]
				prose-img:lg:max-w-3xl prose-img:cursor-pointer prose-img:mx-auto prose-img:py-12
				prose-table:my-8
				prose-th:text-lg prose-th:font-bold prose-th:text-left
				prose-td:text-lg
				prose-figure:shadow-lg">
				{@render children()}
			</div>

			<!-- Footer Contact -->
			<div class="mt-16 pt-8 border-t border-gray-200">
				<div class="bg-gray-50 rounded-xl p-6 border border-gray-200">
					<div class="flex items-start gap-4">
						<div class="w-12 h-12 bg-[var(--action-soft)] rounded-full flex items-center justify-center flex-shrink-0">
							<svg class="w-6 h-6 text-[var(--accent-cyan)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
							</svg>
						</div>
						<div>
							<h2 class="text-lg font-bold text-gray-800 mb-2">Install Story Maps for Jira</h2>
							<p class="text-gray-600 mb-4">
								Story Maps for Jira is available from the Atlassian Marketplace. Install it on your Jira site and open it from any Jira Software project.
							</p>
																								<a href={APP_LINK} target="_blank" rel="noreferrer" data-umami-event="marketplace_click" data-umami-event-product="story_maps" data-umami-event-listing-id="1224357" data-umami-event-intent="trial" data-umami-event-source-page={sourcePage} data-umami-event-placement="article_footer" class="inline-flex items-center gap-2 bg-gradient-to-br from-[#f97316] to-[#f59e0b] text-white px-4 py-2 rounded-lg font-semibold hover:from-[#ea580c] hover:to-[#f97316] transition-colors duration-200">
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
								</svg>
								Install the app
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</article>
</main>

</div>

<style>
	.blanket {
		bottom: 0px;
		left: 0px;
		opacity: 1;
		pointer-events: initial;
		position: fixed;
		right: 0px;
		top: 0px;
		z-index: 500;
		background: rgba(9, 30, 66, 0.54);
		transition: opacity 220ms ease 0s;
	}

	.modal_image {
		left: 0px;
		right: 0px;
		margin-left: auto;
		margin-right: auto;
		max-width: calc(100% - 20rem);
		top: 200px;
		z-index: 510;
		display: flex;
		justify-content: center;
		pointer-events: none;
		position: absolute;
	}

	.shadow-1 {
		box-shadow: 0 30px 60px -40px rgba(3, 105, 161, 0.35), 0 50px 100px -50px rgba(16, 45, 74, 0.3);
	}

	:global(.article-demo) {
		display: block;
		width: 100%;
		max-width: 48rem;
		height: auto;
		margin: 3rem auto;
		border-radius: 0.75rem;
	}
</style>
