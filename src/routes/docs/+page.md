---
title: "Introduction"
description: "What Story Maps for Jira does, what you can plan with it, and where to go from here."
---

Story Maps for Jira is a planning view that lives inside your Jira project. It takes the issues from an agile board and arranges them in two directions: the user journey runs across the map, and the delivery detail sits underneath. This gives you a single picture you can use to discuss sequence and scope, without moving the backlog out of Jira.

## What the map shows

The map is built from three levels:

- **Activities** are the big steps a user takes, arranged left to right.
- **Epics** form the backbone below each activity and describe what the product must do for that step.
- **Story cards** are the stories, tasks, and bugs from your board that deliver each epic.

Everything on the map is a real Jira issue. Dragging a card updates the issue in Jira; editing a card edits the issue. When the map is open in swimlane view, each lane is a sprint or a release, so the map doubles as a delivery plan.

## What you can do

- The app provides multiple maps in each Jira Software project, and you can mark one as the default.
- Switch between map view, sprint lanes, release lanes, and a tree list.
- Show dependency lines between issues that block each other.
- Choose which issue types and issue links make up the map in the hierarchy settings.
- Create issues at any level, assign them to lanes, and start or complete sprints from the map.

A map is based on one agile board. Sprint and release lanes come from that board, so the app fits into whatever process the board already reflects.

## Choose your edition

**Story Maps for Jira** works within a single Jira project and uses the project's own issue types and links. It is free.

**Advanced Story Maps for Jira** adds maps that span projects, custom-field swimlanes for cross-project release planning, goal issues above the map, iteration timeframes, configurable cards, statistics, and PNG export. See [Moving to Advanced](/docs/support/story-maps-to-advanced) for the full comparison.

## Start with a task

- [Create and open your first map](/docs/getting-started)
- [Understand and arrange work on the map](/docs/tutorials/working-with-the-map)
- [Plan work into sprints and releases](/docs/tutorials/planning-sprints-and-releases)
- [Resolve a permission or configuration problem](/docs/support/troubleshooting)

## Jira remains the source of truth

The app reads issues through Jira and writes changes back through Jira. Your Jira permissions decide which projects and issues you can see or edit, and nothing is stored outside your Jira site. Use the map for planning conversations; use the issue view whenever you need the full record.
