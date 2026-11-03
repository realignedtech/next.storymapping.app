<script>
	import { page } from '$app/stores';
	import { marketplaceListingId, marketplaceProduct } from '$lib/seo/marketplace.js';

	let {
		dark = false,
		marketplaceLink = 'https://marketplace.atlassian.com/apps/1224357',
		placement = 'product_hero'
	} = $props();
	let sourcePage = $derived($page.url.pathname === '/' ? '/' : $page.url.pathname.replace(/\/+$/, ''));
	let listingId = $derived(marketplaceListingId(marketplaceLink));
	let product = $derived(marketplaceProduct(marketplaceLink));
</script>

<div class="flex justify-center mt-14 py-4 md:py-0 items-center">
	<div class="text-center text-lg" class:text-white={dark} class:text-slate-600={!dark}>
		Available on the<br/>
		<a
			href={marketplaceLink}
			target="_blank"
			aria-label="Atlassian Marketplace Link"
			rel="noreferrer"
			data-umami-event="marketplace_click"
			data-umami-event-product={product}
			data-umami-event-listing-id={listingId}
			data-umami-event-source-page={sourcePage}
			data-umami-event-placement={placement}
		>
			{#if dark}
				<img src="/atlassian-marketplace-inverse.svg" width="266" height="22" alt="Atlassian Marketplace Logo" loading="lazy" decoding="async" class="mt-3" style="width: 320px"/>
			{:else}
				<img src="/atlassian-marketplace-brand.svg" width="266" height="22" alt="Atlassian Marketplace Logo" loading="lazy" decoding="async" class="mt-3" style="width: 320px"/>
			{/if}
		</a>
	</div>
</div>
