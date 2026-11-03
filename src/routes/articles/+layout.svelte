<script>
	import { page } from '$app/stores';
	import BlogLayout from '$lib/components/BlogLayout.svelte';

	let { children } = $props();
	const articleMeta = {
		'/articles/creating-a-portfolio-map-with-advanced-storymaps': {
			title: 'Creating a Portfolio Map with Advanced Story Maps for Jira',
			description: 'Learn how to build a portfolio map in Jira with Advanced Story Maps, connecting initiatives, epics, and delivery work across projects.',
			date: '2022-07-20',
			author: 'Stefan Ernst',
			preloadImage: '/blog/PortfolioMap.png'
		},
		'/articles/get-started-with-user-story-mapping': {
			title: 'User story mapping in Jira: a worked example',
			description: 'A step-by-step worked example of turning a Jira backlog into a user story map: agree the backbone, place the stories, and slice a release.',
			date: '2022-07-19',
			updated: '2026-11-03',
			author: 'Stefan Ernst'
		},
		'/articles/how-to-do-cross-project-releases-in-jira': {
			title: 'How to do Cross Project Releases in Jira',
			description: 'Compare practical ways to plan cross-project releases in Jira and keep fix versions useful across projects, with and without an app.',
			date: '2022-10-12',
			author: 'Stefan Ernst',
			preloadImage: '/blog/cross-project/crossproject3.png'
		},
		'/articles/how-to-use-custom-fields-on-cards-effectively': {
			title: 'How to use custom fields on cards effectively',
			description: 'See how Advanced Story Maps for Jira shows Jira custom fields on issue cards, so estimates, dates, and status stay visible while you plan.',
			date: '2022-07-27',
			author: 'Stefan Ernst',
			preloadImage: '/blog/field-blog1.png',
			video: {
				name: 'Changing a priority value on a story map issue card',
				description: 'A short demonstration of editing a priority value directly on an Advanced Story Maps issue card in Jira.',
				thumbnailUrl: 'https://storymapping.app/blog/Priority-poster.webp',
				contentUrl: 'https://storymapping.app/blog/Priority.mp4',
				uploadDate: '2022-07-27T00:00:00.000Z',
				duration: 'PT11S'
			}
		},
		'/articles/story-maps-for-jira-is-all-new': {
			title: 'Introducing the all new Story Maps for Jira',
			description: 'An archive of the 2022 Story Maps for Jira update: dynamic maps from any agile board, quick-add, filters, and zoom improvements inside Jira.',
			date: '2022-07-20',
			author: 'Stefan Ernst',
			preloadImage: '/blog/smfree-sc1.webp'
		},
		'/articles/story-maps-for-jira': {
			title: 'Story Maps for Jira — User Story Mapping in Jira',
			description: 'What a user story map is, why it helps a Jira team see the user journey, and how to create your first map from existing Jira issues.',
			date: '2022-10-06',
			author: 'Stefan Ernst',
			preloadImage: '/blog/story-maps-for-jira/step1.png'
		}
	};
	let meta = $derived(articleMeta[$page.url.pathname] || {});
</script>

<BlogLayout {meta}>
	{@render children()}
</BlogLayout>
