<script>
	import SiteShell from '$lib/components/SiteShell.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import ShowcaseNav from '$lib/components/ShowcaseNav.svelte';
	import Marketplace from '$lib/components/Marketplace.svelte';
	import DottedClouds from '$lib/components/DottedClouds.svelte';
	import { page } from '$app/stores';
	import { canonicalUrlFor } from '$lib/seo/canonical.js';
	import { softwareApplicationSchema } from '$lib/seo/schema.js';

	const APP_LINK = "https://marketplace.atlassian.com/1224357";
	let sourcePage = $derived($page.url.pathname === '/' ? '/' : $page.url.pathname.replace(/\/+$/, ''));
	let structuredData = $derived([
		softwareApplicationSchema({
			name: 'Story Maps for Jira',
			description:
				'Turns a Jira backlog into a visual user story map for planning sprints and releases inside Jira.',
			url: canonicalUrlFor($page.url.pathname)
		})
	]);
</script>

<svelte:head>
	<link rel="preload" as="image" href="/main/smfree.png" fetchpriority="high" />
</svelte:head>

<SiteShell
	headTitle="Story mapping tool for Jira | Story Maps for Jira"
	description="Story Maps for Jira is a user story mapping tool for Jira: arrange a backlog into a visual story map and plan sprints and releases without leaving Jira."
	jsonLd={structuredData}
>
	{#snippet subnav()}<ShowcaseNav currentPage="basic" />{/snippet}
	<main class="bg-[var(--bg-base)] text-[var(--text-primary)]">
		<PageHero
			id="showcase-title"
			title="User story mapping in Jira"
			description="Story Maps for Jira arranges your Jira backlog into a visual map so you can plan sprints and releases without leaving Jira."
			iconSrc="/smFreeIcon.svg"
			iconAlt="Story Maps for Jira Icon"
		>
			<div class="flex items-center justify-center">
				<div class="w-full max-w-6xl">
					<img src="/main/smfree.png" width="2260" height="1394" alt="Basic Story Maps for Jira Screenshot" fetchpriority="high" decoding="async" class="rounded-xl border border-[var(--border-subtle)] shadow-2xl" />
				</div>
			</div>
			<Marketplace dark marketplaceLink={APP_LINK} />
		</PageHero>

	<section aria-label="Features" class="realigned-band relative w-full overflow-hidden py-20 text-[var(--text-primary)]">
		<DottedClouds waveFrequency={1.4} waveAmplitude={0.9} opacity={0.16} dotColor="3, 105, 161" />
		<div class="max-w-6xl mx-auto px-4 relative z-10">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold mb-4 text-[var(--text-primary)]">What you can do with the map</h2>
			</div>

			<div class="space-y-20">
				<div class="flex flex-col md:flex-row items-center gap-12">
					<div class="md:w-1/2">
						<h3 class="text-3xl font-bold mb-6">Put the journey above the backlog</h3>
						<p class="text-lg leading-relaxed text-[var(--text-secondary)]">The top row keeps the user’s steps in view. The cards underneath are the Jira issues that support each step, so the team can talk about the experience and the work at the same time.</p>
						<p class="mt-5 leading-relaxed text-[var(--text-secondary)]">In a planning session you can spot missing work, discuss trade-offs, and agree on what belongs in the first release.</p>
					</div>
					<div class="md:w-1/2">
						<img src="/main/smfree.png" width="1162" height="713" alt="Basic Story Map" loading="lazy" decoding="async" class="rounded-xl border border-[var(--border-subtle)] shadow-xl"/>
					</div>
				</div>

				<div class="flex flex-col md:flex-row-reverse items-center gap-12">
					<div class="md:w-1/2">
						<h3 class="text-3xl font-bold mb-6">Keep Jira issues in the conversation</h3>
						<p class="text-lg leading-relaxed text-[var(--text-secondary)]">Work with the issues your team already has in Jira, arranged into a map that is easier to scan than a long backlog. Move cards as the plan changes without leaving the planning view.</p>
						<p class="mt-5 leading-relaxed text-[var(--text-secondary)]">Product, design, and delivery can point to the same piece of work while they decide what to do next.</p>
					</div>
					<div class="md:w-1/2">
						<img src="/main/smfree2.png" width="2260" height="1394" alt="Sprint backlog management in Story Maps for Jira" loading="lazy" decoding="async" class="rounded-xl border border-[var(--border-subtle)] shadow-xl"/>
					</div>
				</div>

				<div class="flex flex-col md:flex-row items-center gap-12">
					<div class="md:w-1/2">
						<h3 class="text-3xl font-bold mb-6">Give each release a visible boundary</h3>
						<p class="text-lg leading-relaxed text-[var(--text-secondary)]">Use swimlanes to place stories in the release or sprint where they are expected to land. The map shows how the pieces fit together before the team commits to the work.</p>
					</div>
					<div class="md:w-1/2">
						<img src="/main/smfree3.png" width="2260" height="1394" alt="Custom swimlane planning in Story Maps for Jira" loading="lazy" decoding="async" class="rounded-xl border border-[var(--border-subtle)] shadow-xl"/>
					</div>
				</div>
			</div>

			<div class="mt-16 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface-hover)] p-8 text-center">
				<h3 class="text-2xl font-bold mb-4 text-[var(--text-primary)]">The new Story Maps experience is live</h3>
				<p class="mb-6 text-lg text-[var(--text-secondary)]">Story Maps for Jira now supports multiple maps per project, sprint and release swimlanes, and dependencies between issues.</p>
				<a href={APP_LINK} target="_blank" rel="noreferrer" data-umami-event="marketplace_click" data-umami-event-product="story_maps" data-umami-event-listing-id="1224357" data-umami-event-source-page={sourcePage} data-umami-event-placement="showcase_bottom" class="realigned-primary-button">
					View Story Maps on Atlassian Marketplace
				</a>
				<p class="mt-6 text-base text-[var(--text-secondary)]">New to the app? <a href="/docs/getting-started" class="font-semibold text-[var(--accent-cyan)] no-underline">Set up your first map</a> or read the <a href="/docs/tutorials" class="font-semibold text-[var(--accent-cyan)] no-underline">tutorials</a>.</p>
			</div>
		</div>
	</section>
	</main>
</SiteShell>
