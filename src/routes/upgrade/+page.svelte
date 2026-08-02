<script>
	import SiteShell from '$lib/components/SiteShell.svelte';
	import PageHero from '$lib/components/PageHero.svelte';

	const APP_LINK = 'https://marketplace.atlassian.com/apps/1224357';

	const highlights = [
		['Multiple maps', 'Keep separate maps for teams, products, or planning conversations and move between them without losing context.'],
		['Sprint and release swimlanes', 'Plan work in the same lanes Jira uses, including sprint and release lifecycle actions directly from the map.'],
		['Flexible map structure', 'Use dynamic or curated maps and configure the hierarchy that reflects how your Jira projects are organized.'],
		['Visible dependencies', 'Bring issue relationships into the planning view so sequencing risks surface while there is still time to act.']
	];
</script>

<SiteShell
	headTitle="Story Maps for Jira | Release preview"
	description="Preview the Forge version of Story Maps for Jira before its public release."
	highlight="Story Maps for Jira"
	marketplaceLink={APP_LINK}
>
	<main class="bg-[var(--bg-base)] text-white">
		<PageHero
			id="release-title"
			eyebrow="Nearing public release"
			title="Story Maps for Jira, now on Forge."
			description="The familiar planning canvas, rebuilt on Atlassian Forge with multiple maps and more release planning options."
		>
			<div class="flex flex-col justify-center gap-3 sm:flex-row">
				<a href="#highlights" class="realigned-primary-button">See the release highlights</a>
				<a href={APP_LINK} target="_blank" rel="noreferrer" class="realigned-secondary-button">Open Marketplace listing</a>
			</div>
		</PageHero>

	<section aria-labelledby="continuity-title" class="bg-[var(--bg-base)] py-20 md:py-24">
		<div class="mx-auto grid max-w-6xl items-center gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
			<div>
				<p class="text-sm font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">Built for continuity</p>
				<h2 id="continuity-title" class="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">Your planning context belongs with you.</h2>
			</div>
			<div>
				<p class="text-xl leading-8 text-[var(--text-secondary)]">The new app uses the established Jira entity-property data behind Story Maps. It is designed to open the maps teams already rely on rather than starting from an empty canvas.</p>
				<div class="mt-7 flex flex-wrap gap-3 text-sm font-semibold text-sky-100">
					<span class="rounded-full border border-white/10 bg-white/5 px-4 py-2">Forge-native</span>
					<span class="rounded-full border border-white/10 bg-white/5 px-4 py-2">Jira-stored maps</span>
					<span class="rounded-full border border-white/10 bg-white/5 px-4 py-2">Existing map compatibility</span>
				</div>
			</div>
		</div>
	</section>

	<section id="highlights" aria-labelledby="highlights-title" class="realigned-dark-gradient scroll-mt-24 py-20 md:py-24">
		<div class="mx-auto max-w-6xl px-5 md:px-8">
			<div class="max-w-3xl">
				<p class="text-sm font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">What’s new</p>
				<h2 id="highlights-title" class="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">More ways to turn a backlog into a release plan.</h2>
			</div>
			<div class="mt-14 grid gap-5 md:grid-cols-2">
				{#each highlights as highlight, index}
					<article class="realigned-card rounded-2xl p-8 md:p-10">
						<span class="text-sm font-bold text-sky-300">0{index + 1}</span>
						<h3 class="mt-5 text-2xl font-semibold tracking-tight text-white">{highlight[0]}</h3>
						<p class="mt-4 leading-7 text-[var(--text-secondary)]">{highlight[1]}</p>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<section aria-labelledby="quality-title" class="bg-[var(--bg-base)] py-20 text-white">
		<div class="mx-auto grid max-w-6xl gap-10 px-5 md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
			<div>
				<p class="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">Before launch</p>
				<h2 id="quality-title" class="mt-4 text-4xl font-black tracking-[-0.035em]">Finishing with the difficult cases.</h2>
			</div>
			<div class="grid gap-4 sm:grid-cols-2">
				<div class="rounded-xl border border-white/10 bg-white/5 p-6"><strong class="block text-lg">Map compatibility</strong><span class="mt-2 block leading-6 text-blue-100">Validating dynamic and curated maps against real Jira project setups.</span></div>
				<div class="rounded-xl border border-white/10 bg-white/5 p-6"><strong class="block text-lg">Permission failures</strong><span class="mt-2 block leading-6 text-blue-100">Making sure rejected Jira actions recover cleanly and never show false success.</span></div>
				<div class="rounded-xl border border-white/10 bg-white/5 p-6"><strong class="block text-lg">Rapid navigation</strong><span class="mt-2 block leading-6 text-blue-100">Keeping the right map loaded even when teams switch views quickly.</span></div>
				<div class="rounded-xl border border-white/10 bg-white/5 p-6"><strong class="block text-lg">Data integrity</strong><span class="mt-2 block leading-6 text-blue-100">Testing recovery across create, update, rename, and delete operations.</span></div>
			</div>
		</div>
	</section>

	<section class="realigned-hero py-20 text-center">
		<div class="mx-auto max-w-3xl px-5 md:px-8">
			<h2 class="text-4xl font-semibold tracking-tight text-white">The public release is close.</h2>
			<p class="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/80">Until then, the existing Marketplace listing remains the best place to review the app and manage your installation.</p>
			<a href={APP_LINK} target="_blank" rel="noreferrer" class="realigned-primary-button mt-8">View Story Maps on Marketplace</a>
		</div>
	</section>
	</main>
</SiteShell>
