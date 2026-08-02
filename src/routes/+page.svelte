<script>
	import SiteShell from '$lib/components/SiteShell.svelte';
	import DottedClouds from '$lib/components/DottedClouds.svelte';
	import StoryMapDemo from '$lib/components/StoryMapDemo.svelte';

	const APP_LINK = 'https://marketplace.atlassian.com/apps/1224357';

	const outcomes = [
		{
			title: 'Make priorities tangible',
			text: 'Put the user journey next to the backlog so trade-offs are visible, discussable, and easier to make.',
			image: 'https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?auto=format&fit=crop&w=900&q=80',
			imageAlt: 'Hand arranging sticky notes on a planning sheet'
		},
		{
			title: 'Plan as one team',
			text: 'Give product, design, and delivery a shared view of scope across stories, sprints, and releases.',
			image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80',
			imageAlt: 'Team members working together around a table'
		},
		{
			title: 'Keep Jira as the source of truth',
			text: 'Plan visually while the issues, links, sprints, and releases your team relies on stay in Jira.',
			image: 'https://images.unsplash.com/photo-1758876021444-3885d0a2539f?auto=format&fit=crop&w=900&q=80',
			imageAlt: 'Person reading a wall of sticky notes in an office'
		}
	];
</script>

<SiteShell
	headTitle="Story Maps for Jira | Visual release planning in Jira"
	description="Turn your Jira backlog into a shared story map. Plan sprints and releases, align your team, and preview the new Forge version of Story Maps for Jira."
	marketplaceLink={APP_LINK}
>
	<main class="bg-[var(--bg-base)] text-[var(--text-primary)]">
	<section aria-labelledby="hero-title" class="realigned-hero relative isolate overflow-hidden pb-20 pt-20 sm:pb-28 sm:pt-24">
		<DottedClouds opacity={0.18} />
		<div class="wave-glow" aria-hidden="true"></div>

		<div class="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-4xl text-center">
				<div class="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur-sm">
					<span class="h-2 w-2 rounded-full bg-cyan-300"></span>
					Story Maps for Jira is nearing public release
				</div>

				<h1 id="hero-title" class="text-[clamp(40px,6vw,68px)] font-bold leading-[1.04] tracking-tight text-white">
					Turn your Jira backlog into a plan everyone can see.
				</h1>
				<p class="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-white/85 sm:text-2xl">
			Map the user journey, shape releases, and keep planning in Jira.
				</p>

				<div class="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
					<a href="/showcase/basic/" class="realigned-primary-button text-base">
						See Story Maps in action
						<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 12h14m-6-6 6 6-6 6" />
						</svg>
					</a>
					<a href={APP_LINK} target="_blank" rel="noreferrer" class="realigned-secondary-button text-base">
						View on Atlassian Marketplace
					</a>
				</div>
			</div>

			<div class="relative mx-auto mt-12 max-w-5xl sm:mt-14">
				<div class="absolute -inset-10 rounded-full bg-cyan-300/10 blur-3xl"></div>
				<div class="relative"><StoryMapDemo /></div>
			</div>
		</div>
	</section>

	<section aria-label="Release status" class="border-b border-white/10 bg-[var(--bg-base)] py-10">
		<div class="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-9 gap-y-4 px-4 text-sm font-semibold text-white/70 sm:px-6 sm:text-base lg:px-8">
			<span class="inline-flex items-center gap-2"><i class="status-check">✓</i> Built on Atlassian Forge</span>
			<span class="inline-flex items-center gap-2"><i class="status-check">✓</i> Made for existing maps</span>
			<span class="inline-flex items-center gap-2"><i class="status-check">✓</i> Final validation in progress</span>
			<span class="inline-flex items-center gap-2"><i class="status-check">✓</i> Runs inside Jira</span>
		</div>
	</section>

	<section aria-labelledby="choose-title" class="bg-[var(--bg-base)] py-24">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-3xl text-center">
				<p class="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">Choose your map</p>
				<h2 id="choose-title" class="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Start focused. Go further when you need to.</h2>
				<p class="mt-5 text-lg leading-relaxed text-[var(--text-secondary)]">Both editions keep planning close to Jira. Choose the feature set that matches the complexity of your team.</p>
			</div>

			<div class="mt-14 grid gap-5 lg:grid-cols-2">
				<article class="edition-card featured realigned-card relative flex flex-col overflow-hidden rounded-2xl p-8 md:p-10">
					<div class="absolute right-0 top-0 rounded-bl-xl bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">Coming soon</div>
					<div class="flex items-center gap-4">
						<div class="flex h-14 w-14 items-center justify-center"><img src="/smFreeIcon.svg" alt="" class="h-12 w-12" /></div>
						<div>
							<p class="text-sm font-semibold text-sky-200">For focused product teams</p>
							<h3 class="text-2xl font-semibold text-white">Story Maps for Jira</h3>
						</div>
					</div>
					<p class="mt-7 leading-relaxed text-[var(--text-secondary)]">The core story mapping experience, rebuilt on Forge for planning across multiple maps, sprints, and releases.</p>
					<ul class="mt-7 grid gap-3 text-sm text-white/80 sm:grid-cols-2">
						<li><span>✓</span> Multiple maps</li><li><span>✓</span> Sprint swimlanes</li>
						<li><span>✓</span> Release swimlanes</li><li><span>✓</span> Dependency view</li>
						<li><span>✓</span> Custom hierarchy</li><li><span>✓</span> Dynamic or static maps</li>
					</ul>
					<a href="/showcase/basic/" class="realigned-primary-button mt-9 w-fit">Explore Story Maps</a>
				</article>

				<article class="edition-card realigned-card flex flex-col rounded-2xl p-8 md:p-10">
					<div class="flex items-center gap-4">
						<div class="flex h-14 w-14 items-center justify-center"><img src="/smProIcon.svg" alt="" class="h-12 w-12" /></div>
						<div>
							<p class="text-sm font-semibold text-sky-200">For complex planning environments</p>
							<h3 class="text-2xl font-semibold text-white">Advanced Story Maps</h3>
						</div>
					</div>
					<p class="mt-7 leading-relaxed text-[var(--text-secondary)]">Extend the map with portfolio-grade planning tools for custom processes, timeframes, and strategic context.</p>
					<ul class="mt-7 grid gap-3 text-sm text-white/80 sm:grid-cols-2">
						<li><span>✓</span> Everything in Story Maps for Jira</li><li><span>✓</span> Custom swimlanes</li>
						<li><span>✓</span> Iteration planning</li><li><span>✓</span> Goal connections</li>
						<li><span>✓</span> PNG export</li><li><span>✓</span> Admin configuration</li>
					</ul>
					<a href="/showcase/advanced/" class="realigned-secondary-button mt-9 w-fit">Explore Advanced Story Maps</a>
				</article>
			</div>
		</div>
	</section>

	<section aria-labelledby="outcomes-title" class="realigned-dark-gradient border-y border-white/10 py-24">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<div class="mb-14 max-w-3xl">
				<p class="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">Why story mapping</p>
				<h2 id="outcomes-title" class="text-3xl font-semibold tracking-tight text-white sm:text-4xl">A shared picture changes the conversation.</h2>
			</div>
			<div class="grid gap-5 md:grid-cols-3">
				{#each outcomes as outcome}
					<article class="realigned-card overflow-hidden rounded-2xl p-7">
						<div class="relative -mx-7 -mt-7 mb-7 h-44 overflow-hidden">
							<img src={outcome.image} alt={outcome.imageAlt} loading="lazy" width="900" height="600" class="h-full w-full object-cover saturate-[0.8]" />
							<div aria-hidden="true" class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_28%,rgba(12,52,104,0.52)_100%)]"></div>
						</div>
						<h3 class="text-xl font-semibold text-white">{outcome.title}</h3>
						<p class="mt-3 leading-relaxed text-[var(--text-secondary)]">{outcome.text}</p>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<section aria-labelledby="final-cta-title" class="realigned-hero relative overflow-hidden py-20">
		<DottedClouds opacity={0.12} />
		<div class="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
			<h2 id="final-cta-title" class="text-3xl font-semibold tracking-tight text-white sm:text-4xl">See the whole journey. Plan the next valuable slice.</h2>
			<p class="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/80">Bring your backlog into a view that helps the team decide what belongs in the next release and what can wait.</p>
			<div class="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
				<a href="/showcase/basic/" class="realigned-primary-button">See Story Maps in action</a>
				<a href="/docs/" class="realigned-secondary-button">Read the documentation</a>
			</div>
		</div>
	</section>
	</main>
</SiteShell>

<style>
	.wave-glow {
		position: absolute;
		left: -10%;
		right: -10%;
		bottom: -24%;
		height: 45%;
		background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.06) 42%, transparent 72%);
		filter: blur(16px);
		pointer-events: none;
	}

	.status-check {
		display: inline-grid;
		width: 1.25rem;
		height: 1.25rem;
		place-items: center;
		border-radius: 999px;
		background: rgba(125, 211, 252, 0.14);
		color: #bae6fd;
		font-size: 0.7rem;
		font-style: normal;
	}

	.edition-card { transition: transform 180ms ease, border-color 180ms ease, background 180ms ease; }
	.edition-card:hover { transform: translateY(-4px); border-color: rgba(56, 189, 248, 0.38); background: var(--bg-surface-hover); }
	.edition-card.featured { border-color: rgba(125, 211, 252, 0.35); }
	.edition-card li { display: flex; gap: 0.55rem; }
	.edition-card li span { color: #7dd3fc; }
</style>
