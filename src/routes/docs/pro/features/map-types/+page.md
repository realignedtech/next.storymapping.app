---
title: 'Map Types'
description: 'Choose between board-driven dynamic maps and manually curated static maps.'
---

Advanced Story Maps supports **dynamic maps** and **static maps**. Choose the type when you create a map.

## Dynamic Maps

Dynamic maps load their scope from one Jira agile board. The map uses issue rank and configured issue relationships to arrange the work.

Create a dynamic map from the overview, then select its board. With the default hierarchy, the map loads epics from that board. If you configure a top-level row, it loads the connected issues according to the selected issue and link types.

Choose a dynamic map when the board should continuously define which issues belong in the planning view.

## Static Maps

Static maps keep an ordered backbone as map configuration in Jira. You add issues deliberately and can include work from anywhere the user can access in Jira, even without an agile board.

When you create a static map, give it a name, select the backbone issue type, and optionally select a board. The board can provide a backlog, sprints, and releases without defining the complete issue scope.

A static map can use Jira issue links for relationships or the map's internal association. The internal association lets the map organize issues without changing existing Jira issue links.

## Map Type Comparison

| Feature | Dynamic Maps | Static Maps |
|---------|--------------|-------------|
| Question | Dynamic map | Static map |
|---|---|---|
| What defines the issue scope? | The selected Jira board | Issues added to the map |
| Is a board required? | Yes | No |
| How is the backbone ordered? | Jira rank and configured relationships | The order stored for the map |
| Best fit | A board-driven view of active work | A curated planning view |

## Best Practices

## Next Steps

- [Getting Started](/docs/pro/setup) — create the selected map type.
- [Board Configuration](/docs/pro/features/board) — control the board used by a map.
- [Settings](/docs/pro/features/settings) — configure hierarchy, display, and swimlanes.
