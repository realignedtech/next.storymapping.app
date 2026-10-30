<script>
	import SiteShell from '$lib/components/SiteShell.svelte';
	import DottedClouds from '$lib/components/DottedClouds.svelte';
	import StoryMapDemo from '$lib/components/StoryMapDemo.svelte';
	import { page } from '$app/stores';
	import { canonicalUrlFor } from '$lib/seo/canonical.js';
	import { softwareApplicationSchema } from '$lib/seo/schema.js';

	const APP_LINK = 'https://marketplace.atlassian.com/apps/1224357';

	let structuredData = $derived([
		softwareApplicationSchema({
			name: 'Story Maps for Jira',
			description:
				'Turns a Jira backlog into a visual story map for planning sprints and releases inside Jira.',
			url: canonicalUrlFor('/free-app'),
			marketplaceUrl: APP_LINK
		})
	]);

	const outcomes = [
		{
			title: 'Trade-offs happen on the map',
			text: 'The user journey sits above the backlog, so missing work and uneven steps show up while you can still react to them.',
			image: 'https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?auto=format&fit=crop&w=900&q=80',
			imageAlt: 'Hand arranging sticky notes on a planning sheet'
		},
		{
			title: 'One view for the whole team',
			text: 'Product, design, and delivery work from the same picture of scope across stories, sprints, and releases.',
			image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80',
			imageAlt: 'Team members working together around a table'
		},
		{
			title: 'Jira stays the source of truth',
			text: 'The map reads issues, links, sprints, and releases from Jira, so planning and execution never drift apart.',
			image: 'https://images.unsplash.com/photo-1758876021444-3885d0a2539f?auto=format&fit=crop&w=900&q=80',
			imageAlt: 'Person reading a wall of sticky notes in an office'
		}
	];
</script>

<SiteShell
	headTitle="Story Maps for Jira | Visual release planning in Jira"
	description="Story Maps for Jira turns your Jira backlog into a visual story map so teams can plan sprints and releases and keep work in Jira."
	marketplaceLink={APP_LINK}
	jsonLd={structuredData}
>
	<main class="bg-[var(--bg-base)] text-[var(--text-primary)]">
	<section aria-labelledby="hero-title" class="realigned-hero relative isolate overflow-hidden pb-20 pt-20 sm:pb-28 sm:pt-24">
		<DottedClouds opacity={0.18} />
		<div class="wave-glow" aria-hidden="true"></div>

		<div class="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-4xl text-center">
				<h1 id="hero-title" class="text-[clamp(40px,6vw,68px)] font-bold leading-[1.04] tracking-tight text-white">
					See your Jira backlog as a story map.
				</h1>
				<p class="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-white/85 sm:text-2xl">
			Arrange issues along the user journey and plan sprints and releases without leaving Jira.
				</p>

				<div class="mt-7 inline-flex items-center gap-2.5 border-y border-cyan-100/25 px-3 py-2.5 text-left">
					<span class="flex h-7 w-7 flex-none items-center justify-center text-cyan-100">
						<svg aria-hidden="true" class="h-[1.125rem] w-[1.125rem]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m7-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm13 10v-2a4 4 0 0 0-3-3.87m-2-9.96a4 4 0 0 1 0 7.75" />
						</svg>
					</span>
					<span class="text-sm font-medium text-cyan-50/85 sm:text-base">Over <strong class="font-semibold text-white">3,000 installations</strong> from the Atlassian Marketplace</span>
				</div>

				<div class="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
					<a href="/free-app" class="realigned-primary-button text-base">
						See Story Maps in action
						<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 12h14m-6-6 6 6-6 6" />
						</svg>
					</a>
					<a href={APP_LINK} target="_blank" rel="noreferrer" data-umami-event="marketplace_click" data-umami-event-product="story_maps" data-umami-event-listing-id="1224357" data-umami-event-intent="trial" data-umami-event-source-page="/" data-umami-event-placement="homepage_hero" class="realigned-secondary-button text-base">
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

	<section aria-label="Product highlights" class="border-b border-[var(--border-subtle)] bg-[var(--bg-base)] py-10">
		<div class="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-9 gap-y-4 px-4 text-sm font-semibold text-[var(--text-secondary)] sm:px-6 sm:text-base lg:px-8">
			<span class="inline-flex items-center gap-2"><i class="status-check">✓</i> Built on Forge</span>
			<span class="inline-flex items-center gap-2"><i class="status-check">✓</i> Plan sprints &amp; releases</span>
			<span class="inline-flex items-center gap-2"><i class="status-check">✓</i> Multiple maps per project</span>
			<span class="inline-flex items-center gap-2"><i class="status-check">✓</i> Changes stay in Jira</span>
		</div>
	</section>

	<section aria-labelledby="choose-title" class="bg-[var(--bg-base)] py-24">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-3xl text-center">
				<p class="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">Two editions</p>
				<h2 id="choose-title" class="text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">Story Maps for Jira or Advanced Story Maps?</h2>
				<p class="mt-5 text-lg leading-relaxed text-[var(--text-secondary)]">Both editions run in your Jira project and write straight to Jira issues. The difference is how much planning structure you need.</p>
			</div>

			<div class="mt-14 grid gap-5 lg:grid-cols-2">
				<article class="edition-card featured realigned-card relative flex flex-col overflow-hidden rounded-lg p-8 md:p-10">
					<div class="flex items-center gap-4">
						<div class="flex h-14 w-14 items-center justify-center"><img src="/smFreeIcon.svg" width="48" height="48" alt="" decoding="async" class="h-12 w-12" /></div>
						<div>
							<p class="text-sm font-semibold text-[var(--accent-cyan)]">For focused product teams</p>
							<h3 class="text-2xl font-semibold text-[var(--text-primary)]">Story Maps for Jira</h3>
						</div>
					</div>
					<p class="mt-7 leading-relaxed text-[var(--text-secondary)]">The core story mapping experience, rebuilt on Forge for visual planning in a Jira Software project.</p>
					<ul class="mt-7 grid gap-3 text-sm text-[var(--text-secondary)] sm:grid-cols-2">
						<li><span>✓</span> Multiple maps per project</li><li><span>✓</span> Sprint swimlanes</li>
						<li><span>✓</span> Release swimlanes</li><li><span>✓</span> Epics and Jira issues</li>
						<li><span>✓</span> Jira stays the source of truth</li><li><span>✓</span> Runs inside Jira</li>
					</ul>
					<a href="/free-app" class="realigned-primary-button mt-9 w-fit">Explore Story Maps</a>
				</article>

				<article class="edition-card realigned-card flex flex-col rounded-lg p-8 md:p-10">
					<div class="flex items-center gap-4">
						<div class="flex h-14 w-14 items-center justify-center"><img src="/smProIcon.svg" width="48" height="48" alt="" decoding="async" class="h-12 w-12" /></div>
						<div>
							<p class="text-sm font-semibold text-[var(--accent-cyan)]">For complex planning environments</p>
							<h3 class="text-2xl font-semibold text-[var(--text-primary)]">Advanced Story Maps</h3>
						</div>
					</div>
					<p class="mt-7 leading-relaxed text-[var(--text-secondary)]">Extend the map with portfolio-grade planning tools for custom processes, timeframes, and strategic context.</p>
					<ul class="mt-7 grid gap-3 text-sm text-[var(--text-secondary)] sm:grid-cols-2">
						<li><span>✓</span> Everything in Story Maps for Jira</li><li><span>✓</span> Custom swimlanes</li>
						<li><span>✓</span> Iteration planning</li><li><span>✓</span> Goal connections</li>
						<li><span>✓</span> PNG export</li><li><span>✓</span> Admin configuration</li>
					</ul>
					<a href="/showcase/advanced" class="realigned-secondary-button mt-9 w-fit">Explore Advanced Story Maps</a>
				</article>
			</div>
		</div>
	</section>

	<section aria-labelledby="outcomes-title" class="realigned-band border-y border-[var(--border-subtle)] py-24">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<div class="mb-14 max-w-3xl">
				<p class="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">Why story mapping</p>
				<h2 id="outcomes-title" class="text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">The map shows the work in the order a user experiences it.</h2>
			</div>
			<div class="grid gap-5 md:grid-cols-3">
				{#each outcomes as outcome}
					<article class="realigned-card overflow-hidden rounded-lg p-7">
						<div class="relative -mx-7 -mt-7 mb-7 h-44 overflow-hidden">
							<img src={outcome.image} alt={outcome.imageAlt} loading="lazy" width="900" height="600" class="h-full w-full object-cover saturate-[0.8]" />
							<div aria-hidden="true" class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(16,45,74,0.28)_100%)]"></div>
						</div>
						<h3 class="text-xl font-semibold text-[var(--text-primary)]">{outcome.title}</h3>
						<p class="mt-3 leading-relaxed text-[var(--text-secondary)]">{outcome.text}</p>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<section aria-labelledby="final-cta-title" class="realigned-hero relative overflow-hidden py-20">
		<DottedClouds opacity={0.12} />
		<div class="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
			<h2 id="final-cta-title" class="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Open your backlog as a story map.</h2>
			<p class="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/80">Import the issues you have, agree on what belongs in the next release, and leave the rest for later.</p>
			<div class="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
				<a href="/free-app" class="realigned-primary-button">See Story Maps in action</a>
				<a href="/docs" data-umami-event="docs_journey" data-umami-event-destination="/docs" data-umami-event-source-page="/" data-umami-event-placement="homepage_footer" class="realigned-secondary-button">Read the documentation</a>
			</div>
			<p class="mt-8 text-sm text-white/70">Built by <a href="/about" class="font-semibold text-white underline underline-offset-4 hover:text-cyan-100">Realigned Technologies</a>, a Swiss software company.</p>
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
		background: rgba(3, 105, 161, 0.1);
		color: var(--accent-cyan);
		font-size: 0.7rem;
		font-style: normal;
	}

	article.edition-card {
		transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;
		background: linear-gradient(135deg, #ffffff 0%, #e9f5fc 100%);
	}
	article.edition-card:hover { transform: translateY(-2px); border-color: rgba(3, 105, 161, 0.38); background: linear-gradient(135deg, #ffffff 0%, var(--bg-surface-hover) 100%); }
	article.edition-card.featured { border-color: rgba(3, 105, 161, 0.35); background: linear-gradient(150deg, var(--action-soft) 0%, #ffffff 70%); }
	.edition-card li { display: flex; gap: 0.55rem; }
	.edition-card li span { color: var(--accent-cyan); }
</style>
