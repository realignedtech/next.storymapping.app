<script>
	import { page } from '$app/stores';
	import BlogLayout from '$lib/components/BlogLayout.svelte';

	let { children } = $props();
	const articleMeta = {
		'/articles/creating-a-portfolio-map-with-advanced-storymaps': {
			title: 'Creating a Portfolio Map with Advanced Story Maps for Jira',
			description: 'Create a visual portfolio map of initiatives and related work across Jira projects.',
			date: '2022-07-20'
		},
		'/articles/get-started-with-user-story-mapping': {
			title: 'Getting started with user story mapping in Jira',
			description: 'Learn how to build your first user story map in Jira.',
			date: '2022-07-19'
		},
		'/articles/how-to-do-cross-project-releases-in-jira': {
			title: 'How to do Cross Project Releases in Jira',
			description: 'Compare ways to plan releases and make release fields useful across Jira projects.',
			date: '2022-10-12'
		},
		'/articles/how-to-use-custom-fields-on-cards-effectively': {
			title: 'How to use custom fields on cards effectively',
			description: 'Display useful Jira fields on Advanced Story Maps issue cards.',
			date: '2022-07-27'
		},
		'/articles/story-maps-for-jira-is-all-new': {
			title: 'Introducing the all new Story Maps for Jira',
			description: 'An archive of the Story Maps for Jira improvements announced in 2022.',
			date: '2022-07-20'
		},
		'/articles/story-maps-for-jira': {
			title: 'Story Maps for Jira — User Story Mapping in Jira',
			description: 'Learn what a user story map is and how to create one from Jira issues.',
			date: '2022-10-06'
		}
	};
	let meta = $derived(articleMeta[$page.url.pathname] || {});
</script>

<BlogLayout {meta}>
	{@render children()}
</BlogLayout>
