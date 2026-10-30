<script>
	import SiteShell from '$lib/components/SiteShell.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import InstallEditionCard from '$lib/components/InstallEditionCard.svelte';

	const STORY_MAPS_APP_LINK = 'https://marketplace.atlassian.com/apps/1224357';
	const ADVANCED_APP_LINK = 'https://marketplace.atlassian.com/apps/1224417';

	const editions = [
		{
			name: 'Story Maps for Jira',
			eyebrow: 'Focused story mapping',
			description: 'Turn a Jira backlog into a shared story map and plan the next release with your team.',
			iconSrc: '/smFreeIcon.svg',
			iconAlt: '',
			features: [
				'Multiple story maps in each Jira project',
				'Visual planning with epics and issues',
				'Sprint and release swimlanes',
				'No separate account or service to manage'
			],
			marketplaceLink: STORY_MAPS_APP_LINK,
			marketplaceLabel: 'View on Marketplace',
			detailsHref: '/free-app',
			detailsLabel: 'See Story Maps features'
		},
		{
			name: 'Advanced Story Maps for Jira',
			eyebrow: 'For larger planning needs',
			description: 'For teams that need maps spanning Jira projects, flexible hierarchies, custom swimlanes, and more planning controls.',
			iconSrc: '/smProIcon.svg',
			iconAlt: '',
			features: [
				'Story maps spanning multiple Jira projects',
				'Flexible issue types and map hierarchies',
				'Custom swimlanes and multi-project planning',
				'Export features and administrator controls'
			],
			marketplaceLink: ADVANCED_APP_LINK,
			marketplaceLabel: 'Try Advanced Story Maps',
			detailsHref: '/showcase/advanced',
			detailsLabel: 'Compare advanced features',
			featured: true
		}
	];

	const steps = [
		['Choose an edition', 'Choose Story Maps for Jira for focused story mapping or Advanced Story Maps for larger planning needs.'],
		['Install from Marketplace', 'Atlassian Marketplace handles the installation, trial, licensing, and updates inside your Jira site.'],
		['Open it in Jira', 'Go to a Jira project and open Story Maps from the project navigation to create your first map.']
	];
</script>

<SiteShell
	headTitle="Compare Story Maps for Jira and Advanced Story Maps"
	description="Compare Story Maps for Jira and Advanced Story Maps for Jira, see which edition fits your team, and start a trial from Atlassian Marketplace."
	highlight="Download"
	marketplaceLink={STORY_MAPS_APP_LINK}
>
	<main class="bg-[var(--bg-base)] text-[var(--text-primary)]">
		<PageHero
			id="download-title"
			eyebrow="Available on Atlassian Marketplace"
			title="Choose the Story Maps edition for your team"
			description="Both apps run inside Jira and are available through Atlassian Marketplace. Choose the one that fits how your team plans."
			compact
		>
			<div class="flex flex-col justify-center gap-3 sm:flex-row">
				<a href="#editions" class="realigned-primary-button">Choose your edition</a>
				<a href="/docs" data-umami-event="docs_journey" data-umami-event-destination="/docs" data-umami-event-source-page="/download" data-umami-event-placement="download_hero" class="realigned-secondary-button">Read the documentation</a>
			</div>
		</PageHero>

		<section id="editions" aria-labelledby="editions-title" class="realigned-band scroll-mt-24 py-16 sm:py-20">
			<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div class="mx-auto max-w-3xl text-center">
					<p class="text-sm font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">Choose your edition</p>
					<h2 id="editions-title" class="mt-4 text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">Story Maps for Jira or Advanced Story Maps?</h2>
					<p class="mt-4 text-lg leading-8 text-[var(--text-secondary)]">Both editions keep planning connected to Jira issues. Advanced Story Maps adds more ways to structure and coordinate the work.</p>
				</div>

				<div class="mt-12 grid gap-6 lg:grid-cols-2">
					{#each editions as edition}
						<InstallEditionCard {...edition} />
					{/each}
				</div>
			</div>
		</section>

		<section aria-labelledby="install-steps-title" class="bg-[var(--bg-base)] py-16 sm:py-20">
			<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div class="max-w-2xl">
					<p class="text-sm font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">Installation</p>
					<h2 id="install-steps-title" class="mt-4 text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">How installation works.</h2>
				</div>

				<ol class="mt-10 grid gap-5 md:grid-cols-3">
					{#each steps as step, index}
						<li class="realigned-card rounded-xl p-6">
						<span class="text-sm font-bold text-[var(--accent-cyan)]">0{index + 1}</span>
							<h3 class="mt-4 text-xl font-semibold text-[var(--text-primary)]">{step[0]}</h3>
							<p class="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{step[1]}</p>
						</li>
					{/each}
				</ol>

				<div class="mt-8 rounded-xl border border-[#bae6fd] bg-[var(--action-soft)] px-5 py-4 text-sm leading-6 text-[var(--text-secondary)]">
					<strong class="text-[var(--text-primary)]">Jira administrator access is required.</strong>
					If you are not a Jira administrator, send the Marketplace listing to the person who manages apps for your site.
				</div>
			</div>
		</section>
	</main>
</SiteShell>
