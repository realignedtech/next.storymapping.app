---
title: "Migrate Advanced Story Maps from Data Center to Cloud"
description: "Export Advanced Story Maps data from Jira Data Center and import it into Jira Cloud"
---

Use the Advanced Story Maps migration assistant after you move your Jira projects and issues to Cloud. The assistant copies your story maps; it does not migrate Jira data.

## Before you start

Make sure that you are a Jira administrator on both sites and that Advanced Story Maps is installed on Cloud. If the Cloud site already has story maps, use its **Cloud Migration** tab to export them first as a backup.

- Migrate the Jira projects and issues first, for example with the Jira Cloud Migration Assistant.
- Keep the same project keys and backbone issue keys in Cloud.
- Create the required global issue types and issue link types in Cloud with the same names as in Data Center.
- Note which agile boards and filters each map uses so you can reselect them in Cloud.
- Ask users to stop changing story maps during the final export and import.

## 1. Export from Data Center

1. Sign in to Jira Data Center as a Jira administrator.
2. Go to **Administration > Manage apps**.
3. In the **Advanced Story Maps for Jira** section, open **Configuration**.
4. Select the **Data Center Migration** tab.
5. Select **Export**.
6. Save the downloaded `migration.json` file in a secure location.

## 2. Import into Cloud

1. Sign in to Jira Cloud as a Jira administrator.
2. Go to **Jira settings > Apps**.
3. In the **Advanced Story Maps** section, open **Configuration**.
4. Select the **Data Center Migration** tab. Do not use the **Cloud Migration** tab; that tab is for Cloud-to-Cloud migrations.
5. Choose the `migration.json` file that you exported from Data Center.
6. Select **Import**.

The assistant lists the projects it can import. Fix any warnings before you continue:

| Warning | What to do |
| --- | --- |
| Missing Project Keys | Migrate or create the project with the same key as the Data Center project. Story maps for a missing project are not imported. |
| Missing Issue Types | Create a global issue type with the same name as the source type, then analyse the file again. |
| Missing Link Types | Create an issue link type with the same name as the source type, then analyse the file again. |

When there are no unresolved warnings, select **Import now** and wait for **Projects imported**. Use **Import anyway** only if you accept that affected maps may need manual repair.

## 3. Verify the migration

Open each migrated project and confirm that:

- the expected maps appear in the project overview;
- each map opens without an error;
- backbone issues and cards refer to the correct Cloud issues;
- issue types, link types, and parent relationships are correct;
- each map uses the correct Cloud agile board and filter;
- project access and Advanced Story Maps visibility settings are correct.

Review the **App** and **Privacy** settings because site-wide settings are not included in the migration.

Keep the Data Center site unchanged until users have accepted the Cloud result. If a project is skipped or a map is incorrect, record the warning and [contact support](/docs/pro/support).
