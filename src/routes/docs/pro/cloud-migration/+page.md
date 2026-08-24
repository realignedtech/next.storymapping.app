---
title: "Migrate Advanced Story Maps between Cloud sites"
description: "Export Advanced Story Maps from one Jira Cloud site and import them into another"
---

The Cloud migration assistant copies Advanced Story Maps project data between Jira Cloud sites. It does not migrate Jira projects, issues, users, boards, or filters. Move that Jira data first and install Advanced Story Maps on the target site.

> Export the target site's Advanced Story Maps data before importing. The assistant merges the existing map list, but other app properties with the same key can be replaced. Writes happen one property at a time and partial failures are not rolled back.

## Export from the source site

1. Sign in as a Jira administrator and go to **Jira settings > Apps > Advanced Story Maps > Configuration**.
2. Open **Cloud Migration** and select **Scan projects**.
3. Review the projects, map count, and archived-map count.
4. Select **Download export** and save the `storymap-cloud-export-*.json` file securely.

The export includes map lists, map data, and supported project-level Advanced Story Maps properties. Global app settings are not included.

## Import into the target site

1. Open **Cloud Migration** on the target site's Advanced Story Maps configuration page.
2. Select **Import from another cloud**, choose the export file, and select **Analyse**.
3. Review the summary.
4. Map each source project to a target project. Matching project keys are selected automatically; you can change the target or skip the project.
5. Map referenced issue types and link types. The assistant auto-matches global issue types and link types with the same names. Map unmatched names manually or choose **Skip (leave unresolved)**.
6. Continue to **Apply** and select **Apply now**.

Skipping a project excludes all of its properties. Skipping an issue or link type leaves that reference unresolved and can require manual repair.

## What to verify

The assistant remaps backbone issue IDs when the same issue keys exist on the target. It does not translate board or filter IDs, so reselect the correct Cloud board and filter on each imported map.

After the import, review the **Written**, **Skipped**, and **Failed** results. Then open each imported map and confirm its project, backbone issues, issue and link types, board, filter, archived state, and permissions. Resolve every skipped or failed property before users resume work.
