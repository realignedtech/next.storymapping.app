---
title: "Plan Sprints and Releases"
description: "Use sprint and release swimlanes to turn a story map into a delivery plan."
---

Swimlanes divide a story map into horizontal delivery slices. Switch the map to **Sprints** for iteration planning or **Releases** for version planning.

## Plan a sprint

1. Select **Sprints** from the swimlane control.
2. Review the unassigned lane and the current order of work.
3. Drag an issue into the intended sprint.
4. Check the sprint scope from left to right across the user journey.
5. Repeat until the sprint represents a coherent outcome, not only a list of capacity fillers.

![Assigning issues to sprint swimlanes](/docs/Sprint.svg)

The app updates the Jira sprint field. Creating or changing a sprint requires the relevant Jira permissions. On a board that covers several projects, you need **Manage Sprints** permission in every included project.

## Plan a release

Select **Releases**, then drag issues into the version that should contain them. Jira versions belong to projects, so an issue can only be assigned to a version from its own project.

For a map that spans projects, Advanced Story Maps can use a shared custom field as a planning swimlane. This gives the projects a common planning label without changing how Jira versions are owned.

## When a lane is missing

Enable **Releases** in the Jira project's features if release lanes are unavailable. For sprint lanes, confirm that the selected board supports sprints and that the Sprint field is present on the relevant edit screens. See [Common Issues & Questions](/docs/support/troubleshooting) for detailed checks.
