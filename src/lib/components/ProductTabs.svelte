<script>
	import { page } from '$app/stores';

	let { tabs = [], active = '', backHref = '', backLabel = '', wide = false } = $props();
	let sourcePage = $derived($page.url.pathname === '/' ? '/' : $page.url.pathname.replace(/\/+$/, ''));
</script>

<div class="sticky top-20 z-40 border-b border-white/10 bg-[#0c3468]/95 backdrop-blur-md">
	<div class="mx-auto overflow-x-auto px-4 transition-[max-width] duration-300 ease-in-out sm:px-6 lg:px-8 {wide ? 'max-w-[90rem]' : 'max-w-7xl'}">
		<div class="flex min-w-max items-center justify-between gap-8">
			<nav aria-label="Product sections" class="flex space-x-1">
				{#each tabs as tab}
					<a href={tab.href} data-umami-event="docs_journey" data-umami-event-destination={tab.href} data-umami-event-source-page={sourcePage} data-umami-event-placement="product_tabs" class="flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors {active === tab.id ? 'border-sky-300 text-white' : 'border-transparent text-white/55 hover:border-white/20 hover:text-white'}">
						{#if tab.icon}<img src={tab.icon} alt="" class="h-4 w-4" />{/if}
						{tab.label}
						{#if tab.badge}<span class="rounded-full border border-sky-300/20 bg-sky-300/10 px-2 py-0.5 text-xs text-sky-100">{tab.badge}</span>{/if}
					</a>
				{/each}
			</nav>

			{#if backHref}
				<a href={backHref} class="flex items-center gap-1 px-3 py-2 text-sm text-white/55 transition-colors hover:text-white">
					<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 19-7-7 7-7m-7 7h18" /></svg>
					{backLabel}
				</a>
			{/if}
		</div>
	</div>
</div>
