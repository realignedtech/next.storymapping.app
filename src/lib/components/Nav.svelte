<script>
	let { title = "Story Maps", marketplaceLink = "", demoLink = "", h1 = false, disableDemo = false, highlight = "", wide = false } = $props();
	let open = $state(false);
	let showAppsPopover = $state(false);
	let buttonElement = $state(null);
	let popoverPosition = $state({ top: 0, right: 0 });

	const apps = [
		{
			name: "Advanced Story Maps for Jira",
			icon: "/smProIcon.svg",
			url: "https://storymapping.app",
			description: "User story mapping for Jira"
		},
		{
			name: "Personas for Jira",
			icon: "/smFreeIcon.svg",
			url: "https://betterpersonas.app",
			description: "Create user personas in Jira"
		},
		{
			name: "Denkplan Portfolio Maps for Jira",
			icon: "/smFreeIcon.svg",
			url: "https://portfoliomapping.app",
			description: "Portfolio mapping for Jira"
		}
	];

	function toggleAppsPopover() {
		if (!showAppsPopover && buttonElement) {
			const rect = buttonElement.getBoundingClientRect();
			popoverPosition = {
				top: rect.bottom + 8,
				right: window.innerWidth - rect.right
			};
		}
		showAppsPopover = !showAppsPopover;
	}

	function closePopover() {
		showAppsPopover = false;
	}
</script>

<nav aria-label="Main Navigation" class="sticky top-0 z-50 border-b border-[var(--footer-border)] bg-[#0c3468]/60 backdrop-blur-sm">
	<div class="mx-auto px-4 transition-[max-width] duration-300 ease-in-out sm:px-6 lg:px-8 {wide ? 'max-w-[90rem]' : 'max-w-7xl'}">
		<div class="flex h-20 items-center justify-between">
		<!-- Left: Logo + App title -->
		<div class="flex min-w-0 items-center gap-3">
			<a href="/" aria-label="Back to homepage" class="flex-shrink-0">
				<img alt="Realigned Logo" width="119" height="34" src="/Realigned.svg" class="h-[34px] w-auto" />
			</a>
			<div class="hidden h-7 w-px bg-white/20 sm:block"></div>
			<a href="/" class="hidden sm:flex items-center gap-2 hover:no-underline">
				<img src="/smFusedIcon.svg" alt="{title} Icon" class="h-7 w-7" />
				{#if h1}
					<h1 class="m-0 text-base font-semibold text-white">{title} for Jira</h1>
				{:else}
					<span class="text-base font-semibold text-white">{title} for Jira</span>
				{/if}
			</a>
		</div>

		<!-- Mobile navigation toggle -->
		<button
			type="button"
			class="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
			aria-label={open ? "Close navigation" : "Open navigation"}
			aria-expanded={open}
			aria-controls="mobile-navigation"
			onclick={() => (open = !open)}>
			{#if open}
				<svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 18 6M6 6l12 12" />
				</svg>
			{:else}
				<svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			{/if}
		</button>

		<!-- Right: Nav links -->
		<div class="hidden items-center lg:flex">
			<ul class="list-reset flex items-center justify-end gap-7 xl:gap-8">
				<li>
					<a class="inline-block py-2 text-base font-medium no-underline transition-colors duration-200 {highlight === 'Showcase' ? 'text-white' : 'text-white/80 hover:text-white'}" href="/showcase/basic">
						Showcase
					</a>
				</li>
				<li>
					<a class="inline-block py-2 text-base font-medium no-underline transition-colors duration-200 {highlight === 'Documentation' ? 'text-white' : 'text-white/80 hover:text-white'}" href="/docs/">
						Documentation
					</a>
				</li>
				<li>
					<a class="inline-block py-2 text-base font-medium no-underline transition-colors duration-200 {highlight === 'Download' ? 'text-white' : 'text-white/80 hover:text-white'}" href="/download/">
						Compare editions
					</a>
				</li>
				<li>
					<button
						bind:this={buttonElement}
						class="inline-flex items-center gap-1 border-none bg-transparent py-2 text-base font-medium text-white/80 transition-colors duration-200 hover:text-white"
						onclick={toggleAppsPopover}
						onblur={() => setTimeout(closePopover, 150)}>
						All Apps
						<svg class="w-3.5 h-3.5 transition-transform duration-200 {showAppsPopover ? 'rotate-180' : ''}"
							 fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M19 9l-7 7-7-7" />
						</svg>
					</button>
				</li>
				<li>
					<a href={marketplaceLink || '/download/'} target={marketplaceLink ? '_blank' : undefined} rel={marketplaceLink ? 'noreferrer' : undefined} class="realigned-primary-button !rounded-lg !px-5 !py-2.5 text-base">
						Try free
					</a>
				</li>
			</ul>
		</div>
		</div>

		{#if open}
			<div id="mobile-navigation" class="border-t border-white/10 py-4 lg:hidden">
				<div class="flex flex-col gap-1">
					<a class="rounded-lg px-2 py-2 text-base font-medium {highlight === 'Showcase' ? 'text-white' : 'text-white/80'}" href="/showcase/basic" onclick={() => (open = false)}>Showcase</a>
					<a class="rounded-lg px-2 py-2 text-base font-medium {highlight === 'Documentation' ? 'text-white' : 'text-white/80'}" href="/docs/" onclick={() => (open = false)}>Documentation</a>
					<a class="rounded-lg px-2 py-2 text-base font-medium {highlight === 'Download' ? 'text-white' : 'text-white/80'}" href="/download/" onclick={() => (open = false)}>Compare editions</a>
					<a class="rounded-lg px-2 py-2 text-base font-medium text-white/80" href="https://realigned.io?utm_source=storymapping_site" rel="noreferrer">All Realigned apps</a>
					<a href={marketplaceLink || '/download/'} target={marketplaceLink ? '_blank' : undefined} rel={marketplaceLink ? 'noreferrer' : undefined} class="realigned-primary-button mt-3 self-start !rounded-lg !px-5 !py-2.5 text-base">
						Try free
					</a>
				</div>
			</div>
		{/if}
	</div>
</nav>

<!-- Apps popover -->
{#if showAppsPopover}
	<button type="button" aria-label="Close apps menu" class="fixed inset-0 z-[9998] cursor-default" onclick={closePopover}></button>

	<div class="fixed z-[9999] w-80 overflow-hidden rounded-xl border border-white/15 bg-[#103d73] shadow-2xl shadow-slate-950/35"
		 style="top: {popoverPosition.top}px; right: {popoverPosition.right}px;">
		<div class="p-4">
			<h3 class="mb-3 text-lg font-semibold text-white">Our Apps</h3>
			<div class="space-y-3">
				{#each apps as app}
					<a href={app.url}
					   class="group flex items-center gap-3 rounded-lg p-3 no-underline transition-colors duration-200 hover:bg-white/[0.06]"
					   rel="noreferrer">
						<div class="w-10 h-10 flex-shrink-0">
							<img src={app.icon} alt="{app.name} icon" class="w-full h-full object-contain" />
						</div>
						<div class="flex-1">
							<h4 class="font-semibold text-white transition-colors duration-200 group-hover:text-sky-200">
								{app.name}
							</h4>
							<p class="text-sm text-[var(--text-secondary)]">{app.description}</p>
						</div>
						<svg class="h-5 w-5 text-[var(--text-muted)] transition-colors duration-200 group-hover:text-sky-200"
							 fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
						</svg>
					</a>
				{/each}
			</div>
			<div class="mt-4 border-t border-white/10 pt-3">
				<a href="https://realigned.io?utm_source=storymapping_site"
				   class="flex items-center justify-center gap-2 text-sm font-medium text-sky-200 no-underline transition-colors duration-200 hover:text-white"
				   rel="noreferrer">
					View all on Realigned.io
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
					</svg>
				</a>
			</div>
		</div>
	</div>
{/if}
