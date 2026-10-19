---
title: "Common Issues & Questions"
description: "Common issues and questions"
---

## The Release view is missing

You might be using a project where the Release feature is not enabled.
Please go to Project Administration → Features and enable Releases.

## The Sprints view is missing

In team-managed projects the Sprint feature may be disabled. Enable it the same way as Releases above.
In classic projects, the board selected for the map may not support sprints, or you may lack the Manage Sprints permission. Sprint lanes also require a board — if the map has none, the Settings button shows a warning.

## Sprint creation fails even though I have "Manage Sprints" permission

The selected board contains issues from more than one project. You need Manage Sprints permission in all included projects.

## Cannot add an issue to a sprint: "customfield_xxxxx cannot be set"

Make sure the sprint field is visible on the edit issue screen.
If your project was created from a template other than the scrum template, you need to add this field manually.

## An issue appears in the story map but not in any sprint lane

You might have had this issue in a previous sprint that was completed.
Unfortunately, Jira does not clear the sprint field when the issue is moved back to the backlog
while remaining open or in progress.
You need to manually reopen the old sprint and clear the field. [See here for more info](https://support.atlassian.com/jira-software-cloud/docs/reopen-a-sprint/).

## Cannot add an issue to a release

If your map is based on a board that covers several projects, you will see the release versions of all these projects. But an issue can only be assigned to the fix versions of its own project. There is nothing we can do about this Jira rule.

If you want to plan cross-project releases, use the custom swimlane feature of [Advanced Story Maps for Jira](/docs/support/story-maps-to-advanced).

## Could not update estimate

There are a few possible reasons for this:

1. The configured board is a scrum board but the context for the story points field does not include the current issue type. See this [community thread](https://community.atlassian.com/t5/Jira-questions/Story-points-not-visible-for-Issues/qaq-p/1315572) for further info.
2. The configured board is a kanban board or no board is configured and you have enabled the estimation feature in the settings — make sure the story point field is available on the edit screen of the issue type.
3. You entered a value that cannot be read as a number.

## I can't find Story Maps in the project navigation

Story Maps for Jira supports Jira Software projects. You will not find the entry in Business projects or Jira Service Management projects. Advanced Story Maps for Jira supports additional project types.

You also need **Edit Issues** permission in the project to use the story mapping features.

## How do I change the issue types used in the map?

Open **Settings → Hierarchy**. There you can pick the issue type for activities and for the backbone, and the issue link types that connect them to the issues below. The backbone type is confirmed once during map creation and can be changed here afterwards.
