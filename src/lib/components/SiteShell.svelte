<script>
	import Header from './Header.svelte';

	let {
		headTitle,
		description,
		ogType = 'website',
		publishedTime = '',
		modifiedTime = '',
		image = undefined,
		jsonLd = [],
		subnav,
		children
	} = $props();
</script>

<div class="bg-[var(--bg-base)] text-[var(--text-primary)]">
	<Header
		title={headTitle}
		{description}
		{ogType}
		{publishedTime}
		{modifiedTime}
		{image}
		{jsonLd}
	/>
	{#if subnav}{@render subnav()}{/if}
	{@render children()}
</div>
