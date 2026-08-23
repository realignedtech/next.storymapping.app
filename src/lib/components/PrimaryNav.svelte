<script>
	let { title = "Story Maps", marketplaceLink = "", demoLink = "", h1 = false, disableDemo = false, highlight = "" } = $props();
	let open = $state(false);
</script>

<nav aria-label="Primary Navigation" id="header" class="w-full py-3 lg:py-3 text-gray-800 bg-white">
    <div class="w-full max-w-6xl mx-auto flex flex-wrap items-center justify-between mt-0 py-2 lg:py-6 px-4">
        
        {#if h1}
            <div class="flex pl-2 md:pl-0 items-center gap-5">
                <div class="w-16 h-16 relative">
                    <img src="/smFusedIcon.svg" alt="{title} Icon" />
                </div>
                <h1>
                    <a href="/">
                        <span class="text-2xl font-bold">{title}</span><br />
                        <span>for Jira</span>
                    </a>
                </h1>
            </div>
        {:else}
            <div class="flex pl-2 md:pl-0 items-center">
                <a href="/">
                    <span class="text-2xl font-bold">{title}</span><br />
                    <span>for Jira</span>
                </a>
            </div>
        {/if}

        <div class="block lg:hidden pr-4 md:pr-0">
            <input 
                class="side-menu" 
                bind:checked={open}
                type="checkbox" 
                id="side-menu" 
            />
            <label class="hamb" for="side-menu">
                <span class="hamb-line"></span>
            </label>
        </div>

        <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto {open ? '' : 'hidden'} lg:block mt-2 lg:mt-0 text-black lg:p-0 z-20" id="nav-content">
            <ul class="list-reset lg:flex justify-end gap-4 flex-1 items-center">
                <li class="mr-2">
                    <a class="inline-block py-2 no-underline hover:text-sky-500 {highlight === 'Showcase' ? 'text-sky-500 font-bold' : 'text-black font-bold'}" href="/">
                        Showcase
                    </a>
                </li>
                <li class="mr-2">
                    <a class="inline-block py-2 no-underline hover:text-sky-500 {highlight === 'Documentation' ? 'text-sky-500 font-bold' : 'text-black'}" href="/docs">
                        Documentation
                    </a>
                </li>
                <li class="mr-2">
                    <a class="inline-block py-2 no-underline hover:text-sky-500 {highlight === 'Blog' ? 'text-sky-500 font-bold' : 'text-black'}" href="/blog">
                        Blog
                    </a>
                </li>
                <li class="mr-4">
                    <a class="inline-block py-2 no-underline hover:text-sky-500 {highlight === 'Upgrade' ? 'text-sky-500 font-bold' : 'text-black'}" href="/upgrade">
                        Upgrade
                    </a>
                </li>
                <li>
                    <a href={marketplaceLink} target="_blank" rel="noreferrer">
                        <button id="try-free-button" class="mx-auto lg:mx-0 bg-[#0052cc] hover:bg-[#0065ff] text-white rounded mt-4 lg:mt-0 py-2 px-4">
                            Try free
                        </button>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<style>
    .side-menu {
        display: none;
    }
    
    .hamb {
        cursor: pointer;
        float: right;
        padding: 35px 20px;
    }
    
    .hamb-line {
        background: #999;
        display: block;
        height: 2px;
        position: relative;
        width: 24px;
    }
    
    .hamb-line::before,
    .hamb-line::after {
        background: #999;
        content: '';
        display: block;
        height: 100%;
        position: absolute;
        transition: all 0.2s ease-out;
        width: 100%;
    }
    
    .hamb-line::before {
        top: 5px;
    }
    
    .hamb-line::after {
        top: -5px;
    }
    
    .side-menu:checked ~ .hamb .hamb-line {
        background: transparent;
    }
    
    .side-menu:checked ~ .hamb .hamb-line::before {
        transform: rotate(-45deg);
        top: 0;
    }
    
    .side-menu:checked ~ .hamb .hamb-line::after {
        transform: rotate(45deg);
        top: 0;
    }
</style>
