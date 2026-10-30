<script>
	import { page } from '$app/stores';

	let {
		name,
		eyebrow,
		description,
		iconSrc,
		iconAlt,
		features = [],
		marketplaceLink,
		marketplaceLabel,
		detailsHref,
		detailsLabel,
		featured = false
	} = $props();
	let sourcePage = $derived($page.url.pathname === '/' ? '/' : $page.url.pathname.replace(/\/+$/, ''));
	let listingId = $derived(marketplaceLink?.match(/\/(\d+)(?:[/?]|$)/)?.[1] || '');
	let product = $derived(listingId === '1224417' ? 'advanced_story_maps' : 'story_maps');
	let intent = $derived('trial');
</script>

<article class:featured class="edition-card">
	<div class="flex items-start justify-between gap-4">
		<div>
			<p class="text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent-cyan)]">{eyebrow}</p>
			<h2 class="mt-3 text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl">{name}</h2>
		</div>
		<img src={iconSrc} width="48" height="48" alt={iconAlt} decoding="async" class="h-12 w-12 flex-none" />
	</div>

	<p class="mt-5 min-h-14 leading-7 text-[var(--text-secondary)]">{description}</p>

	<ul class="mt-7 space-y-3 border-t border-[var(--border-subtle)] pt-6">
		{#each features as feature}
			<li class="flex items-start gap-3 text-sm leading-6 text-[var(--text-secondary)]">
				<svg class="mt-1 h-4 w-4 flex-none text-[var(--accent-cyan)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 12 4 4L19 6" />
				</svg>
				{feature}
			</li>
		{/each}
	</ul>

	<div class="mt-8 flex flex-col gap-3 sm:flex-row">
		<a
			href={marketplaceLink}
			target="_blank"
			rel="noreferrer"
			data-umami-event="marketplace_click"
			data-umami-event-product={product}
			data-umami-event-listing-id={listingId}
			data-umami-event-intent={intent}
			data-umami-event-source-page={sourcePage}
			data-umami-event-placement="edition_card"
			class="{featured ? 'realigned-primary-button' : 'realigned-secondary-button'} flex-1 text-center"
		>{marketplaceLabel}</a>
		<a href={detailsHref} class="inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-[var(--accent-cyan)] transition hover:text-[var(--action-hover)]">
			{detailsLabel}
			<svg class="ml-1.5 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" /></svg>
		</a>
	</div>
</article>

<style>
	.edition-card {
		display: flex;
		height: 100%;
		flex-direction: column;
		border: 1px solid var(--border-subtle);
		border-radius: 0.9rem;
		background: var(--bg-surface);
		padding: 2rem;
		box-shadow: 0 20px 46px -34px rgba(3, 105, 161, 0.45);
	}

	.edition-card.featured {
		border-color: rgba(3, 105, 161, 0.35);
		background: linear-gradient(150deg, var(--action-soft), var(--bg-surface));
	}

	.edition-card ul { flex: 1; }

	@media (max-width: 639px) {
		.edition-card { padding: 1.5rem; }
	}
</style>
