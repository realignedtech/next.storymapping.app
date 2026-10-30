<script>
	export let dark = false;
</script>

<div class="flex justify-center mt-14 py-4 md:py-0 items-center">
	<div class="text-center text-lg" class:text-white={dark} class:text-slate-600={!dark}>
		Available on the<br/>
		<a href="https://marketplace.atlassian.com/1224357" target="_blank" aria-label="Atlassian Marketplace Link" rel="noreferrer">
			{#if dark}
				<img src="/atlassian-marketplace-inverse.svg" width="266" height="22" alt="Atlassian Marketplace Logo" loading="lazy" decoding="async" class="mt-3" style="width: 320px"/>
			{:else}
				<img src="/atlassian-marketplace-brand.svg" width="266" height="22" alt="Atlassian Marketplace Logo" loading="lazy" decoding="async" class="mt-3" style="width: 320px"/>
			{/if}
		</a>
	</div>
</div>
