---
title: Release Notes
description: "Release notes for Story Maps for Jira: what changed in each release, including new features, fixes, and improvements to the app."
---

This page is an archive of release notes published from September 2021 through June 2023. It does not yet describe the current Forge rebuild. For current release status, use the Atlassian Marketplace listing or contact [support@realigned.io](mailto:support@realigned.io).

## June 2023

### Pro Version: Dark Theme Support

The Pro version now supports the new dark color mode in Jira Cloud

- The cloud migration import has been rolled out and is currently in beta
- Fixed a bug that affected activities on static maps
- Improved load times in various places

<br />

<sub>January 2023</sub>

### Better support for multi project story maps

You can now use multi-select custom fields, sync releases across projects and
assign issues to more than one custom swim-lane.

- The app now supports custom field swimlanes of type "Multi select list"
- If you have a board consisting of issues from multiple projects, you can use
  releases with the same name in a unified swim-lane. This is especially useful
  if you have a version sync app installed.
- Custom swimlanes are now unique for each story map. This means that issues can
  be in different custom swimlanes on different maps. Be aware that this only
  applies to newly created story maps.
- Story maps with 500 issues or more will now load faster, we added better
  keyboard support and fixed an issue related to story point estimation.

<br />

<sub>May 2022</sub>

### Major updates and a new name

Story Mapping for Jira - Pro is now Advanced Story Maps for Jira!

We have added a significant new feature to this release: Dynamic maps. You can
now load any agile board and manage epics, stories, tasks, and their issue links
on the fly, and all changes will now reflect 100% into the agile board.
Additionally, managing the app configuration has gotten much easier - use the
new hierarchy button in the top right-hand corner to modify the map's issue
hierarchy and link types. The changes will appear instantly in the map view.

Link types can now be configured in both directions, so you do not only have to
work with the "outward" link. Use custom field values as swim lanes, for example
for cross-project release planning. Ordering top-level elements and epics will
not reflect back on their board rank.

<br />

<sub>March 2022</sub>

### Pro Version Improvements 01/22

Story Mapping App now supports top-level elements above the backbone row. You
can use any issue type to group columns, as well as select a color to style the
columns for more clarity on large story maps. Create Sprint &
Release buttons have been unified into the new Create dropdown at the top of the
story map. Server & Data Center now support the scrolling header that was already
available in the Cloud version.

<br />

<sub>November 2021</sub>

### Pro Version Improvements 11/21

Our most requested feature is here: You can now manage multiple user story maps.
When you open the app for the first time, you will be asked to select the map
you want to work on. You can create many more user story maps with different
boards and settings within the same project. You can also select a story map as
a favorite and it will load automatically the next time you open the app.
Introducing epic statistics: You can now see the progress of your issues within
an epic. Toggle between totals per status, percentage of issues per status
completed or percentage of story points done. Sub-task support: You can now
display the number of subtasks on the issue card, alongside a link that reveals
all subtasks and their status. Quick-Filters from your agile board will be
available from the redesigned filter menu. Improved issue link import: Issues
that are imported into the map via custom issue link will now be filtered
correctly. Zoom in and out of your user story map with the new buttons in the
bottom right hand corner. Import steps automatically based on issue type when
creating a user story map. Better export: We have adjusted the card layout to
improve export image quality.

<br />

<sub>September 2021</sub>

### Pro Version Improvements 09/21 (DC / Server V1.7)

You can now make Story Mapping App available only in select projects. Head to
the new administration area to either enable the app for all projects or add
only select projects to the list of eligible projects.
