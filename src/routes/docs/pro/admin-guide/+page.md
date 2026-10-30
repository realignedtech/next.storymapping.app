---
title: 'Admin Guide'
description: "Jira administrators can control which projects show Advanced Story Maps, configure global settings, and manage how the app appears."
---

The global configuration controls where Advanced Story Maps appears in Jira project navigation.

## Make the app available in every project

Turn on the global project toggle to show Advanced Story Maps in all supported Jira projects.

## Limit the app to selected projects

Turn off the global project toggle, then add each allowed project to the project list. Use this when only specific teams should see the app entry.

This setting controls the project navigation entry. It does not create an access boundary around Jira issues. A map or its board filter can still include issues from another project when the user has the required Jira permissions.

## Choosing between global and selected projects

Use the global toggle when every team should be able to create a map. Use the project list when you want a controlled rollout, a pilot group, or a temporary trial. You can switch between the two at any time; existing maps are not deleted when a project is removed from the list.

## Permissions still come from Jira

Advanced Story Maps respects Jira access to projects, boards, filters, issues, and editable fields. Review those Jira permissions when a person can open the app but cannot see or change expected work.

For per-map configuration, see [Settings](/docs/pro-app/pro-settings). For installation and licensing, use the Advanced Story Maps listing in Atlassian Marketplace.
