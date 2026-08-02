<script>
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
</script>

<article class:featured class="edition-card">
	<div class="flex items-start justify-between gap-4">
		<div>
			<p class="text-xs font-bold uppercase tracking-[0.18em] text-sky-200">{eyebrow}</p>
			<h2 class="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{name}</h2>
		</div>
		<img src={iconSrc} alt={iconAlt} class="h-12 w-12 flex-none" />
	</div>

	<p class="mt-5 min-h-14 leading-7 text-[var(--text-secondary)]">{description}</p>

	<ul class="mt-7 space-y-3 border-t border-white/10 pt-6">
		{#each features as feature}
			<li class="flex items-start gap-3 text-sm leading-6 text-blue-50">
				<svg class="mt-1 h-4 w-4 flex-none text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
			class="{featured ? 'realigned-primary-button' : 'realigned-secondary-button'} flex-1 text-center"
		>{marketplaceLabel}</a>
		<a href={detailsHref} class="inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-sky-200 transition hover:text-white">
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
		border: 1px solid rgba(156, 180, 211, 0.16);
		border-radius: 0.9rem;
		background: var(--bg-surface);
		padding: 2rem;
		box-shadow: 0 20px 50px rgba(2, 18, 42, 0.14);
	}

	.edition-card.featured {
		border-color: rgba(56, 189, 248, 0.34);
		background: linear-gradient(150deg, #174982, var(--bg-surface));
	}

	.edition-card ul { flex: 1; }

	@media (max-width: 639px) {
		.edition-card { padding: 1.5rem; }
	}
</style>
