<script>
	import SiteShell from '$lib/components/SiteShell.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import ShowcaseNav from '$lib/components/ShowcaseNav.svelte';
	import Marketplace from '$lib/components/Marketplace.svelte';
	import DottedClouds from '$lib/components/DottedClouds.svelte';

	const APP_LINK = "https://marketplace.atlassian.com/1224357";
	const DEMO_LINK = "";
</script>

<SiteShell
	headTitle="Story Maps for Jira - Basic User Story Mapping"
	description="Get started with user story mapping in Jira. Create visual story maps to organize your backlog and plan releases."
	highlight="Showcase"
	marketplaceLink={APP_LINK}
	demoLink={DEMO_LINK}
>
	{#snippet subnav()}<ShowcaseNav currentPage="basic" />{/snippet}
	<main class="bg-[var(--bg-base)] text-white">
		<PageHero
			id="showcase-title"
			title="Story Maps for Jira"
			description="Get started with user story mapping in Jira. Create visual story maps to organize your backlog and plan releases."
			iconSrc="/smFreeIcon.svg"
			iconAlt="Story Maps for Jira Icon"
		>
			<div class="flex items-center justify-center">
				<div class="w-full max-w-6xl">
					<img src="/main/smfree.png" width="2260" height="1394" alt="Basic Story Maps for Jira Screenshot" class="rounded-xl border border-white/15 shadow-2xl" />
				</div>
			</div>
			<Marketplace dark />
		</PageHero>

	<section aria-label="Features" class="realigned-dark-gradient relative w-full overflow-hidden py-20 text-white">
		<DottedClouds waveFrequency={1.4} waveAmplitude={0.9} opacity={0.1} />
		<div class="max-w-6xl mx-auto px-4 relative z-10">
			<div class="text-center mb-16">
				<h2 class="text-4xl font-bold mb-4">Core Features</h2>
				<p class="mx-auto max-w-2xl text-xl leading-relaxed text-[var(--text-secondary)]">A closer look at the map, the backlog, and the release decisions they help you make together.</p>
			</div>

			<div class="space-y-20">
				<div class="flex flex-col md:flex-row items-center gap-12">
					<div class="md:w-1/2">
						<h3 class="text-3xl font-bold mb-6">Put the journey above the backlog</h3>
						<p class="text-lg leading-relaxed text-[var(--text-secondary)]">The top row keeps the user’s steps in view. The cards underneath are the Jira issues that support each step, so the team can talk about the experience and the work at the same time.</p>
						<p class="mt-5 leading-relaxed text-white/75"><span class="font-semibold text-white">Useful in a planning session:</span> spot missing work, discuss trade-offs, and agree on what belongs in the first release.</p>
					</div>
					<div class="md:w-1/2">
						<img src="/main/smfree.png" width="1162" height="713" alt="Basic Story Map" class="rounded-xl border border-white/10 shadow-xl"/>
					</div>
				</div>

				<div class="flex flex-col md:flex-row-reverse items-center gap-12">
					<div class="md:w-1/2">
						<h3 class="text-3xl font-bold mb-6">Keep Jira issues in the conversation</h3>
						<p class="text-lg leading-relaxed text-[var(--text-secondary)]">Work with the issues your team already has in Jira, arranged into a map that is easier to scan than a long backlog. Move cards as the plan changes without leaving the planning view.</p>
						<p class="mt-5 leading-relaxed text-white/75"><span class="font-semibold text-white">What this changes:</span> product, design, and delivery can point to the same piece of work while they decide what to do next.</p>
					</div>
					<div class="md:w-1/2">
						<img src="/main/smfree2.png" width="2260" height="1394" alt="Sprint backlog management in Story Maps for Jira" class="rounded-xl border border-white/10 shadow-xl"/>
					</div>
				</div>

				<div class="flex flex-col md:flex-row items-center gap-12">
					<div class="md:w-1/2">
						<h3 class="text-3xl font-bold mb-6">Give each release a visible boundary</h3>
						<p class="text-lg leading-relaxed text-[var(--text-secondary)]">Use swimlanes to place stories in the release or sprint where they are expected to land. The map shows how the pieces fit together before the team commits to the work.</p>
						<p class="mt-5 leading-relaxed text-white/75"><span class="font-semibold text-white">A good question to ask here:</span> does this slice deliver a useful step for someone, or is it just a collection of tickets?</p>
					</div>
					<div class="md:w-1/2">
						<img src="/main/smfree3.png" width="2260" height="1394" alt="Custom swimlane planning in Story Maps for Jira" class="rounded-xl border border-white/10 shadow-xl"/>
					</div>
				</div>
			</div>

			<div class="mt-16 rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
				<h3 class="text-2xl font-bold mb-4">A new Story Maps experience is almost here</h3>
				<p class="mb-6 text-lg text-[var(--text-secondary)]">Story Maps for Jira brings multiple maps, sprint and release planning, dependencies, and a Forge-native foundation.</p>
				<a href={APP_LINK} target="_blank" rel="noreferrer" class="realigned-primary-button">
					View Story Maps on Atlassian Marketplace
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
					</svg>
				</a>
			</div>
		</div>
	</section>
	</main>
</SiteShell>
