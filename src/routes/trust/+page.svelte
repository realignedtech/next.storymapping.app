<script>
	import TrustCard from '$lib/components/TrustCard.svelte';

	const resources = [
		{
			title: 'Bug Fix Policy',
			description: "How we prioritize and resolve security vulnerabilities across Realigned products.",
			href: '/trust/bug-fix-policy'
		},
		{
			title: 'Self-Assessment Questionnaire',
			description: 'Our public responses to cloud security, governance, and compliance controls.',
			href: '/trust/self-assessment-questionaire'
		},
		{
			title: 'Bug Bounty Program',
			description: 'Program scope, focus areas, reward framework, and remediation expectations.',
			href: '/trust/bug-bounty-program'
		},
		{
			title: 'Security & Privacy FAQ',
			description: 'Answers about data storage, analytics, hosting, and application security.',
			href: '/trust/security-and-privacy-faq'
		},
		{
			title: 'Data Processing Statement',
			description: 'How personal and application data is collected, processed, protected, and retained.',
			href: '/trust/privacy-policy'
		},
		{
			title: 'Security & Technology Policies',
			description: 'Our principles for access, assets, encryption, operations, and governance.',
			href: '/trust/security-policy'
		},
		{
			title: 'Security Scanning Practices',
			description: 'Dependency, application, Data Center, and Atlassian ecosystem security scanning.',
			href: '/trust/security-scanning'
		},
		{
			title: 'Cloud App Security Compliance',
			description: 'The Atlassian Marketplace security requirements that our Cloud apps follow.',
			href: 'https://developer.atlassian.com/platform/marketplace/security-requirements/',
			external: true
		},
		{
			title: 'Service Provider ISO 27001',
			description: 'Review the ISO 27001 certification published by our infrastructure provider.',
			href: 'https://www.hetzner.com/assets/downloads/FOX-Certificate.pdf',
			external: true
		}
	];
</script>

<main>
	<div class="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
		<div class="max-w-2xl">
			<p class="text-sm font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">Trust Center</p>
			<h2 class="mt-3 text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl">Security practices and policies.</h2>
			<p class="mt-3 leading-7 text-[var(--text-secondary)]">How Realigned handles application security, privacy, vulnerability management, and operational controls.</p>
		</div>
		<a href="mailto:info@realigned.io" class="realigned-secondary-button shrink-0">Report a concern</a>
	</div>

	<ul class="grid gap-4 p-0 md:grid-cols-2 xl:grid-cols-3">
		{#each resources as resource}
			<TrustCard {...resource} />
		{/each}
	</ul>

	<section class="mt-12 max-w-3xl">
		<h2 class="text-xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-2xl">How to use the Trust Center</h2>
		<p class="mt-3 leading-7 text-[var(--text-secondary)]">Start with the policy that matches your review. Security reviewers usually read the security and technology policies, the scanning practices, and the self-assessment responses together. Privacy and data-handling questions are answered in the data processing statement and the security and privacy FAQ.</p>
		<p class="mt-3 leading-7 text-[var(--text-secondary)]">The Trust Center covers Story Maps for Jira, Advanced Story Maps for Jira, and the other apps Realigned publishes for the Atlassian ecosystem. We run a private bug bounty program and publish a vulnerability disclosure policy. To report a security concern, email <a class="text-[var(--accent-cyan)] hover:text-[var(--action-hover)]" href="mailto:info@realigned.io">info@realigned.io</a> or open a ticket in our support portal.</p>
	</section>
</main>
