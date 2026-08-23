---
title: "Migrate Advanced Story Maps from Data Center to Cloud"
description: "Export Advanced Story Maps data from Jira Data Center and import it into Jira Cloud"
---

Use the Advanced Story Maps migration assistant after you migrate your Jira projects and issues to Cloud. The assistant moves the app's story map configuration. It does not move Jira projects, issues, users, attachments, or other Jira data.

> Back up existing Advanced Story Maps data on the target Cloud site before you import. Use the **Cloud Migration** tab to create a Cloud export if the target already contains maps. The Data Center import writes project properties and can replace properties that use the same keys. Do not configure replacement story maps on the target site before the migration is complete.

## Before you start

You need Jira administrator access on the Data Center and Cloud sites. Install Advanced Story Maps on the target Cloud site before you start the import.

Complete these checks:

- Migrate the Jira projects and issues first, for example with the Jira Cloud Migration Assistant.
- Keep the same project keys in Cloud. The Advanced Story Maps assistant finds target projects by their keys and skips projects that it cannot find.
- Confirm that the issues used in story map backbones exist in Cloud with the same issue keys. The assistant uses those keys to replace Data Center issue IDs with Cloud issue IDs.
- Create the required global issue types in Cloud with the same names as in Data Center. Project-scoped issue types are not used for this match.
- Create the required issue link types in Cloud with the same names as in Data Center.
- Note which agile boards and filters each map uses. The assistant does not translate Data Center board or filter IDs to their Cloud equivalents.
- Ask users to stop changing story maps during the final export and import.

The migration assistant processes all exported projects. It does not provide a project-selection step.

## 1. Export from Data Center

1. Sign in to Jira Data Center as a Jira administrator.
2. Go to **Administration > Manage apps**.
3. In the **Advanced Story Maps for Jira** section, open **Configuration**.
4. Select the **Data Center Migration** tab.
5. Select **Export**.
6. Save the downloaded `migration.json` file in a secure location.

The file contains Advanced Story Maps project data and the information needed to match project keys, issue keys, issue types, and issue link types. Do not edit the file unless Realigned support asks you to do so.

## 2. Finish the Jira migration

Use Atlassian's Jira migration tools to move the projects, issues, users, workflows, and other Jira data to Cloud. The order matters: the Advanced Story Maps import needs the target projects and referenced issues to exist before it can translate the app configuration.

After the Jira migration, compare the source and target sites. Resolve changed project keys, missing backbone issues, and missing issue or link types before you import the story maps.

## 3. Analyse the file in Cloud

1. Sign in to Jira Cloud as a Jira administrator.
2. Go to **Jira settings > Apps**.
3. In the **Advanced Story Maps** section, open **Configuration**.
4. Select the **Data Center Migration** tab. Do not use the **Cloud Migration** tab; that tab is for Cloud-to-Cloud migrations.
5. Choose the `migration.json` file that you exported from Data Center.
6. Select **Import** to analyse the file.

The assistant lists the projects that it can import. It can also report missing project keys, issue types, or issue link types.

Resolve every warning before you continue:

| Warning | What to do |
| --- | --- |
| Missing Project Keys | Migrate or create the project with the same key as the Data Center project. Story maps for a missing project are not imported. |
| Missing Issue Types | Create a global issue type with the same name as the source type, then analyse the file again. |
| Missing Link Types | Create an issue link type with the same name as the source type, then analyse the file again. |

The assistant offers **Import anyway** when it finds problems. Use this only if you accept that the affected maps can be incomplete and will require manual repair.

## 4. Import the story maps

When the analysis has no unresolved warnings, select **Import now**. Keep the page open until the assistant shows **Projects imported**.

The import writes the exported Advanced Story Maps properties to the matching Cloud projects. If the target already has an Advanced Story Maps property with the same key, the imported value replaces it. Re-running the import is therefore not a substitute for a backup.

## 5. Validate the result

Open every migrated project and check its story maps. At minimum, confirm that:

- the expected maps appear in the project overview;
- each map opens without an error;
- backbone issues and cards refer to the correct Cloud issues;
- the configured backbone and activity issue types are correct;
- issue-link directions and parent relationships behave as expected;
- each map uses the correct Cloud agile board and filter; reselect them when their IDs differ from Data Center;
- sprints, releases, and custom-field views use valid Cloud configuration;
- project access and Advanced Story Maps visibility settings are correct.

Global app settings are not part of the project story map import. Review the **App** and **Privacy** tabs in the Cloud configuration page after the migration.

Keep the Data Center site unchanged until users have accepted the Cloud result. If the analysis fails, a project is skipped, or issue references are incorrect, do not repeatedly import the same file into a production site. Record the warning or error and [contact support](/docs/support) with the migration date, source and target Jira versions, and the affected project keys.
