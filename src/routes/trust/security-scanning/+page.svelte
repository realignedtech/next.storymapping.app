<script>
	import Header from '$lib/components/Header.svelte';
</script>

<Header title="Advanced Story Maps for Jira - Security Scanning" description="Security scanning practices by Realigned Technologies as well as Atlassian" />

<main class="max-w-4xl mx-auto pb-24 px-4 min-h-[50vh]">
	<h1 class="text-3xl font-bold text-gray-800 mt-8 mb-8">Security Scanning Practices</h1>

	<section class="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-a:text-blue-600 hover:prose-a:text-blue-500">
		<h2>Security Scanning with Snyk</h2>

		<p>We use Snyk to scan the following:</p>
		<ul>
			<li>Our deployment Docker images</li>
			<li>Application frontend dependencies</li>
			<li>Backend dependencies used for the Server & DC edition of our products</li>
		</ul>

		<p><a href="https://snyk.io/" target="_blank" rel="noreferrer">Snyk.io</a></p>

		<h2>Atlassian Data Center Approval</h2>

		<p>
			Atlassian requires us to scan all of our backend dependencies using their own
			scanner to renew the certification of our apps for Atlassian Data Center every year.
			You can read more about it <a href="https://developer.atlassian.com/platform/marketplace/dc-apps-security-scanner/" target="_blank" rel="noreferrer">here</a>.
		</p>

		<h2>Ecoscanner by Atlassian</h2>

		<p>
			The Ecoscanner platform is a platform used for performing security checks against all Marketplace cloud apps on an ongoing basis.
			This will help Atlassian continuously monitor Marketplace cloud apps for common security vulnerabilities and improve the overall security posture of our ecosystem.
		</p>

		<p><a href="https://developer.atlassian.com/platform/marketplace/ecoscanner/" target="_blank" rel="noreferrer">Atlassian Ecoscanner</a></p>
	</section>
</main>
