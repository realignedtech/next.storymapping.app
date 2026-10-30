<script>
	import SiteShell from '$lib/components/SiteShell.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import ShowcaseNav from '$lib/components/ShowcaseNav.svelte';
	import Marketplace from '$lib/components/Marketplace.svelte';
	import DottedClouds from '$lib/components/DottedClouds.svelte';
	import { page } from '$app/stores';
	import { canonicalUrlFor } from '$lib/seo/canonical.js';
	import { softwareApplicationSchema } from '$lib/seo/schema.js';

	const APP_LINK = "https://marketplace.atlassian.com/1224417";
	const DEMO_LINK = "https://demo.userstorymap.net/projects/ASFJ/storymaps#/map/1662373150071";
	let structuredData = $derived([
		softwareApplicationSchema({
			name: 'Advanced Story Maps for Jira',
			description:
				'Advanced story mapping for Jira with custom hierarchies, custom-field swimlanes, multi-project maps, and portfolio planning.',
			url: canonicalUrlFor($page.url.pathname),
			marketplaceUrl: APP_LINK
		})
	]);
</script>

<svelte:head>
	<link rel="preload" as="image" href="/main/smhighlight2.png" fetchpriority="high" />
</svelte:head>

<SiteShell
	headTitle="Advanced Story Maps for Jira - The User Story Mapping App"
	description="See Advanced Story Maps for Jira in action: custom hierarchies, custom-field swimlanes, multi-project maps, and release planning."
	highlight="Showcase"
	marketplaceLink={APP_LINK}
	demoLink={DEMO_LINK}
	jsonLd={structuredData}
>
	{#snippet subnav()}<ShowcaseNav currentPage="advanced" />{/snippet}
	<main class="bg-[var(--bg-base)] text-[var(--text-primary)]">
		<PageHero
			id="showcase-title"
			title="Advanced Story Maps for Jira"
			description="Plan your product roadmap in Jira with custom fields, flexible map structures, and release planning for larger teams."
			iconSrc="/smProIcon.svg"
			iconAlt="Advanced Story Maps for Jira Icon"
		>
			<div class="flex items-center justify-center">
				<div class="w-full max-w-6xl">
					<img src="/main/smhighlight2.png" width="2314" height="1604" alt="Advanced Story Maps for Jira Screenshot" fetchpriority="high" decoding="async" class="rounded-xl border border-[var(--border-subtle)] shadow-2xl" />
				</div>
			</div>
			<Marketplace dark />
		</PageHero>

	<section aria-label="Features" class="realigned-band relative w-full overflow-hidden py-20 text-[var(--text-primary)]">
		<DottedClouds waveFrequency={1.4} waveAmplitude={0.9} opacity={0.16} dotColor="3, 105, 161" />
		<div class="max-w-6xl mx-auto px-4 relative z-10">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold mb-4">Features</h2>
				<p class="mx-auto max-w-2xl text-xl leading-relaxed text-[var(--text-secondary)]">Advanced Story Maps covers custom fields, flexible hierarchies, and releases that span more than one Jira project.</p>
			</div>

			<div class="space-y-20">
				<div class="flex flex-col md:flex-row items-center gap-12">
					<div class="md:w-1/2">
						<h3 class="text-3xl font-bold mb-6">Show the structure your team actually uses</h3>
						<p class="text-lg leading-relaxed text-[var(--text-secondary)]">Build the map around your Jira hierarchy, then add the fields and links that matter to the conversation. The result is a view of the product as your team understands it, not a fixed template.</p>
						<p class="mt-5 leading-relaxed text-[var(--text-secondary)]"><span class="font-semibold text-[var(--text-primary)]">In the screenshot:</span> the map brings related levels of work together so you can see where a decision sits and what it affects.</p>
					</div>
					<div class="md:w-1/2">
						<img src="/main/smhighlight2.png" width="2314" height="1604" alt="Advanced Story Map Overview" loading="lazy" decoding="async" class="rounded-xl border border-[var(--border-subtle)] shadow-xl"/>
					</div>
				</div>

				<div class="flex flex-col md:flex-row-reverse items-center gap-12">
					<div class="md:w-1/2">
						<h3 class="text-3xl font-bold mb-6">Change the view as the plan changes</h3>
						<p class="text-lg leading-relaxed text-[var(--text-secondary)]">A large product plan rarely stays tidy for long. Reorder issues, move them between levels, and adjust the information on each card while the underlying Jira work stays connected.</p>
						<p class="mt-5 leading-relaxed text-[var(--text-secondary)]">Useful when a discovery session changes the shape of an initiative, or a delivery team needs a closer view of the next few sprints.</p>
					</div>
					<div class="md:w-1/2">
						<img src="/main/smhighlight3.png" width="2314" height="1604" alt="Advanced Story Maps custom layout" loading="lazy" decoding="async" class="rounded-xl border border-[var(--border-subtle)] shadow-xl"/>
					</div>
				</div>

				<div class="flex flex-col md:flex-row items-center gap-12">
					<div class="md:w-1/2">
						<h3 class="text-3xl font-bold mb-6">See what a release can carry</h3>
						<p class="text-lg leading-relaxed text-[var(--text-secondary)]">Assign stories to releases and review them in the context of the wider map. You can see the intended outcome, the work underneath it, and the gaps that still need attention.</p>
						<p class="mt-5 leading-relaxed text-[var(--text-secondary)]">Before you commit, compare the planned slice with the people, dependencies, and other work already in the map.</p>
					</div>
					<div class="md:w-1/2">
						<img src="/main/smhighlight4.png" width="2314" height="1604" alt="Advanced Story Maps release planning" loading="lazy" decoding="async" class="rounded-xl border border-[var(--border-subtle)] shadow-xl"/>
					</div>
				</div>
			</div>
		</div>
	</section>
	</main>
</SiteShell>
