<script>
	import { page } from '$app/stores';
	import NotFound from '$lib/components/NotFound.svelte';

	let status = $derived($page.status ?? 404);
</script>

<svelte:head>
	<title>{status === 404 ? 'Page not found' : `Error ${status}`} | Story Maps for Jira</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<NotFound {status} />
