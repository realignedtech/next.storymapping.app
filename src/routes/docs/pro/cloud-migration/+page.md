---
title: "Cloud to Cloud Migration"
description: "Move Advanced Story Maps between Jira Cloud sites: export a project’s maps and import them into another Cloud site without losing structure."
---

Use the Cloud migration assistant to copy Advanced Story Maps from one Jira Cloud site to another. Move the Jira projects and issues first, then install Advanced Story Maps on the target site.

Before you start, make sure that you are a Jira administrator on both sites. If the target site already has story maps, export them first as a backup.

## Export from the source site

1. Sign in as a Jira administrator and go to **Jira settings > Apps > Advanced Story Maps > Configuration**.
2. Open **Cloud Migration** and select **Scan projects**.
3. Review the projects, map count, and archived-map count.
4. Select **Download export** and save the `storymap-cloud-export-*.json` file securely.

## Import into the target site

1. Open **Cloud Migration** on the target site's Advanced Story Maps configuration page.
2. Select **Import from another cloud**, choose the export file, and select **Analyse**.
3. Review the summary.
4. Map each source project to a target project. Matching project keys are selected automatically; you can change the target or skip the project.
5. Map referenced issue types and link types. The assistant auto-matches global issue types and link types with the same names. Map unmatched names manually or choose **Skip (leave unresolved)**.
6. Continue to **Apply** and select **Apply now**.

Choose **Skip** only for projects or settings that you do not want to import.

## What to verify

Backbone issues are matched by issue key, so make sure the same issue keys exist on the target site. After the import, open each map and reselect the correct Cloud board and filter.

Review the import results and fix any skipped or failed items. Confirm the maps, backbone issues, issue types, link types, archived maps, and project access. Finally, review the **App** and **Privacy** settings because site-wide settings are not included in the migration.
