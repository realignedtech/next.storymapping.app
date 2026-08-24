<script>
    import { realignedApps } from '$lib/apps.js';
    
    let showAppsPopover = $state(false);
    let buttonElement = $state(null);
    let popoverPosition = $state({ top: 0, right: 0 });
    
    function toggleAppsPopover() {
        if (!showAppsPopover && buttonElement) {
            // Calculate position when opening
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

<nav aria-label="Secondary Navigation" class="header-gradient from-blue-400 to-emerald-300 p-3 mt-0 w-full">
    <div class="max-w-6xl mx-auto flex flex-wrap items-center px-4">
        <div class="flex w-1/2 justify-start text-white font-extrabold mt-2">
            <a aria-label="Back to homepage" class="hover:no-underline" href="/">
                <img alt="Realigned Logo" loading="lazy" width="140" height="40" src="/Realigned.svg"/>
            </a>
        </div>
        <div class="flex w-1/2 hidden md:flex content-center justify-between md:w-1/2 md:justify-end">
            <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
                <li>
                    <button 
                        bind:this={buttonElement}
                        class="inline-flex items-center gap-1 text-white no-underline hover:text-cyan-300 py-2 px-4 transition-colors duration-200" 
						aria-controls="secondary-apps-popover"
						aria-expanded={showAppsPopover}
						aria-haspopup="true"
                        onclick={toggleAppsPopover}
                        onblur={() => setTimeout(closePopover, 150)}>
                        All Apps
                        <svg class="w-4 h-4 transition-transform duration-200 {showAppsPopover ? 'rotate-180' : ''}" 
                             fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</nav>

<!-- Portal popover to body level -->
{#if showAppsPopover}
    <!-- Backdrop to prevent overlap and allow clicking outside to close -->
    <button type="button" aria-label="Close apps menu" class="fixed inset-0 z-[9998] cursor-default" onclick={closePopover}></button>
    
    <!-- Popover positioned using calculated coordinates -->
    <div id="secondary-apps-popover" class="fixed z-[9999] w-[calc(100vw-2rem)] max-w-[42rem] overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-xl"
         style="top: {popoverPosition.top}px; right: {Math.max(16, popoverPosition.right)}px; max-height: calc(100vh - {popoverPosition.top + 16}px);">
        <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-800 mb-3">Our Apps</h3>
            <div class="grid gap-1 sm:grid-cols-2">
                {#each realignedApps as app}
                    <a href={app.url} 
					   target="_blank"
					   class="group flex min-w-0 items-center gap-3 rounded-lg p-3 no-underline transition-colors duration-200 hover:bg-gray-50 focus-visible:bg-gray-50"
                       rel="noreferrer">
                        <div class="w-10 h-10 flex-shrink-0">
							<img src={app.icon} alt="" aria-hidden="true" class="h-full w-full rounded-[0.6rem] object-contain" />
                        </div>
						<div class="min-w-0 flex-1">
                            <h4 class="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                                {app.name}
                            </h4>
                            <p class="text-sm text-gray-600">{app.description}</p>
                        </div>
						<svg aria-hidden="true" class="h-5 w-5 flex-shrink-0 text-gray-400 transition-colors duration-200 group-hover:text-blue-600"
                             fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                {/each}
            </div>
            <div class="mt-4 pt-3 border-t border-gray-200">
                <a href="https://realigned.io?utm_source=storymapping_site" 
                   class="flex items-center justify-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium no-underline transition-colors duration-200"
				   target="_blank"
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
