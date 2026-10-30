<script>
	import SiteShell from '$lib/components/SiteShell.svelte';
	import PageHero from '$lib/components/PageHero.svelte';

	const articles = [
		{
			title: 'How to do Cross Project Releases in Jira',
			description: 'Compare practical ways to plan releases across several Jira projects.',
			date: '2022-10-12',
			href: '/articles/how-to-do-cross-project-releases-in-jira'
		},
		{
			title: 'Story Maps for Jira — User Story Mapping in Jira',
			description: 'Learn the structure of a user story map and how to create one from Jira issues.',
			date: '2022-10-06',
			href: '/articles/story-maps-for-jira'
		},
		{
			title: 'How to use custom fields on cards effectively',
			description: 'Display relevant Jira fields on map cards and use their values during planning.',
			date: '2022-07-27',
			href: '/articles/how-to-use-custom-fields-on-cards-effectively'
		},
		{
			title: 'Introducing the all new Story Maps for Jira',
			description: 'An archive of the dynamic maps, filters, and quick-add release announced in 2022.',
			date: '2022-07-20',
			href: '/articles/story-maps-for-jira-is-all-new'
		},
		{
			title: 'Creating a Portfolio Map with Advanced Story Maps for Jira',
			description: 'Build a visual map of initiatives and related work across Jira projects.',
			date: '2022-07-20',
			href: '/articles/creating-a-portfolio-map-with-advanced-storymaps'
		},
		{
			title: 'Getting started with user story mapping in Jira',
			description: 'Create a first map, arrange work, and plan the next delivery slice.',
			date: '2022-07-19',
			href: '/articles/get-started-with-user-story-mapping'
		}
	];
</script>

<SiteShell
	headTitle="User story mapping articles | Story Maps for Jira"
	description="Guides and archived product updates about user story mapping in Jira, from structuring a map to planning across projects."
>
	<main class="bg-[var(--bg-base)] text-[var(--text-primary)]">
		<PageHero
			id="articles-title"
			eyebrow="Articles"
			title="User story mapping in practice"
			description="Guides for structuring a map, planning across projects, and working with Jira fields."
			compact
		/>

		<section aria-labelledby="articles-title" class="realigned-band py-16 sm:py-20">
			<div class="mx-auto grid max-w-5xl gap-5 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
				{#each articles as article}
					<article class="realigned-card flex h-full flex-col rounded-xl p-6 sm:p-7">
						<time datetime={article.date} class="text-xs font-bold uppercase tracking-[0.16em] text-[var(--accent-cyan)]">
							{new Date(`${article.date}T00:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })}
						</time>
						<h2 class="mt-4 text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
							<a href={article.href} class="transition-colors hover:text-[var(--accent-cyan)]">{article.title}</a>
						</h2>
						<p class="mt-3 flex-1 leading-7 text-[var(--text-secondary)]">{article.description}</p>
						<a href={article.href} class="mt-6 inline-flex items-center text-sm font-semibold text-[var(--accent-cyan)] transition-colors hover:text-[var(--action-hover)]">
							Read article<span class="sr-only">: {article.title}</span> <span aria-hidden="true" class="ml-1.5">→</span>
						</a>
					</article>
				{/each}
			</div>
		</section>
	</main>
</SiteShell>
