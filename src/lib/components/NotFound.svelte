<script>
	let { status = 404 } = $props();

	let title = $derived(status === 404 ? 'This page is off the map' : 'Something went wrong');
	let description = $derived(
		status === 404
			? 'The page you asked for could not be found. It may have been moved, renamed, or never existed.'
			: 'This page could not be loaded right now. Try again in a moment, or head back to a known page.'
	);

	const destinations = [
		{
			href: '/docs',
			title: 'Documentation',
			text: 'Set up Story Maps, plan sprints and releases, and work with the map.'
		},
		{
			href: '/free-app',
			title: 'Story Maps for Jira',
			text: 'The core story mapping experience for focused product teams.'
		},
		{
			href: '/showcase/advanced',
			title: 'Advanced Story Maps',
			text: 'Portfolio-grade planning for complex, multi-project environments.'
		},
		{
			href: '/blog',
			title: 'Articles',
			text: 'Guides and product updates from the team behind the app.'
		}
	];
</script>

<main class="bg-[var(--bg-base)] text-[var(--text-primary)]">
	<section class="realigned-band border-b border-[var(--border-subtle)]">
		<div class="mx-auto flex max-w-3xl flex-col items-center px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
			<p class="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent-cyan)]">Error {status}</p>
			<h1 class="mt-4 text-4xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-5xl">{title}</h1>
			<p class="mt-5 max-w-xl text-lg leading-relaxed text-[var(--text-secondary)]">{description}</p>
			<div class="mt-9 flex flex-col gap-4 sm:flex-row">
				<a href="/" class="realigned-primary-button">Back to the homepage</a>
				<a href="/docs" class="realigned-secondary-button">Browse the documentation</a>
			</div>
		</div>
	</section>

	<section aria-labelledby="notfound-destinations" class="py-16 sm:py-20">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<h2 id="notfound-destinations" class="text-sm font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">Popular destinations</h2>
			<div class="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
				{#each destinations as destination}
					<a href={destination.href} class="realigned-card group flex h-full flex-col rounded-xl p-6 transition-transform hover:-translate-y-1">
						<h3 class="text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-cyan)]">{destination.title}</h3>
						<p class="mt-2 flex-1 text-sm leading-6 text-[var(--text-secondary)]">{destination.text}</p>
						<span class="mt-4 text-sm font-semibold text-[var(--accent-cyan)]">Open <span aria-hidden="true">→</span></span>
					</a>
				{/each}
			</div>
		</div>
	</section>
</main>
