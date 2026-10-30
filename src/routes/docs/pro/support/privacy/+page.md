---
title: "Privacy"
description: "How Advanced Story Maps for Jira handles data, what analytics are collected, and how the app stays inside your Jira Cloud site."
---

Read the [Data Processing Statement](/trust/privacy-policy) for the Realigned Technologies website.

## Definition of Data

Story Mapping App collects and processes three types of data:

- User generated content (Jira content like issues, releases, sprints, settings, etc)
- Error reports
- Install information (Cloud only)

Both Story Maps for Jira and Advanced Story Maps for Jira contain analytics software from PostHog.

Analytics is used to measure feature usage across our apps. We do not collect personal information at any time.

Analytics components can be disabled in Advanced Story Maps for Jira.

## Data residency information

### User Generated Content

All user generated content (see above) is stored within your
Jira instance, both on Cloud, Server and Data Center.
None of this data is stored by us.

### Install information (Cloud only)

To enable installation and licensing via the Atlassian Marketplace
we collect information about the instance and license upon
installation of the app in your Cloud instance.

This data includes:
- Host name
- Host ID (Client ID)
- JWT secrets

For the Forge versions of Story Maps for Jira and Advanced Story Maps for Jira, this information is
stored in Atlassian's Forge infrastructure and never in our own databases. Our own databases in
Helsinki, Finland, are only used by the legacy Connect versions of our apps.

### Personal Data processed by our analytics products

Due to the nature of analytics software, the following artefacts are collected by them that are considered
personal data under the GDPR:

- IP address
- Atlassian Account ID

This data is stored and processed by both Sentry and PostHog.

We use this data to measure product usage on a per instance basis. We do not profile individual users
for this purpose.

If you object to this personal data being collected, you can disable analytics products in the admin
section of our apps.

### Error Reports

We use Sentry.io for error reporting on all products.

Review [Sentry's Data Processing Addendum](https://sentry.io/legal/dpa/2.0.0/).
