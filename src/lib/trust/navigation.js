export const trustNavigation = [
	{
		href: '/trust',
		title: 'Trust Center',
		navTitle: 'Overview',
		description:
			'Security, privacy, and compliance information for Realigned Jira apps in one place: policies, scanning practices, and disclosures.'
	},
	{
		href: '/trust/security-policy',
		title: 'Security & Technology Policies',
		description:
			'How Realigned manages access, risk, infrastructure, and operations across the products we build for the Atlassian ecosystem.'
	},
	{
		href: '/trust/security-scanning',
		title: 'Security Scanning Practices',
		description:
			'The dependency, application, Data Center, and Atlassian ecosystem security scanning practices used across Realigned products.'
	},
	{
		href: '/trust/bug-fix-policy',
		title: 'Bug Fix Policy',
		description:
			'Severity-based objectives for how Realigned prioritizes, tracks, and resolves security vulnerabilities across its products.'
	},
	{
		href: '/trust/bug-bounty-program',
		title: 'Bug Bounty Program',
		description:
			'Scope, focus areas, reward framework, and remediation expectations for security reports that affect Realigned Atlassian apps.'
	},
	{
		href: '/trust/security-and-privacy-faq',
		title: 'Security & Privacy FAQ',
		description:
			'Answers about hosting, data storage, analytics, and application security for Realigned apps built for Atlassian Jira Cloud.'
	},
	{
		href: '/trust/privacy-policy',
		title: 'Data Processing Statement',
		description:
			'How Realigned collects, processes, protects, and retains personal and application data across the products it builds for the Atlassian ecosystem.'
	},
	{
		href: '/trust/self-assessment-questionaire',
		title: 'Self-Assessment Responses',
		description:
			'Our public responses to cloud security, governance, and compliance questionnaire controls for Realigned Atlassian apps and services.'
	}
];

export function trustPageFor(pathname) {
	return trustNavigation.find((item) => item.href === pathname) || trustNavigation[0];
}
