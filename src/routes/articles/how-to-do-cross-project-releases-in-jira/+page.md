---
title: "How to do Cross Project Releases in Jira"
description: "Compare four practical ways to plan releases across several Jira projects, including cross-space releases in Jira plans, and keep fix versions useful."
date: "2022-10-12"
---

A Jira version belongs to a single project. When one release ships work from several projects at once, no built-in field spans them: each project keeps its own version list, and the same release has a different version in each. That is the gap this article is about.

There are four practical ways to close it. They differ in how much setup they need and whether the release stays visible on the issue.

## Option 1: Use a custom field for the release

The simplest approach without an app is a single- or multi-select custom field that holds the release name. You can hide the built-in fix version field from the issue screens and use the custom field instead.

Create it under **Issues**, then **Custom Fields**, and add the release options. You can edit the options later.

![Creating the custom field](/blog/cross-project/crossproject3.png)

The trade-off is maintenance. A Jira admin has to keep the options current, and most third-party apps only understand the built-in fix version field, not a custom one.

## Option 2: Sync versions between projects

A version sync app keeps versions with the same name aligned across projects. You choose the projects in scope and the app updates the releases for you. [Version Sync for Jira](https://marketplace.atlassian.com/apps/1219807/version-sync-for-jira?hosting=cloud&tab=overview) is one example.

![Version Sync for Jira](/blog/cross-project/crossproject2.png)

This keeps the standard fix version field, so other apps continue to work. Setup needs project admin permissions, and you will find it in the project's app configuration.

## Option 3: Use a roadmap app

Roadmap apps such as [Swanly](https://marketplace.atlassian.com/apps/1219470/swanly-portfolio-roadmaps-structure-gantt-release-timeline?hosting=cloud&tab=overview) can create cross-project releases as part of a broader roadmap. Open the release view and choose **Create Release**.

![Release planning with Swanly](/blog/cross-project/crossproject1.png)

Some of these tools let you split a release into stages, which helps when a single date is too coarse. Choose this option when you want roadmap reporting as well as the release itself.

## Option 4: Use cross-space releases in Jira plans (Premium)

Jira Premium includes plans, the planning feature formerly called Advanced Roadmaps. A plan can hold a cross-space release that spans several projects. Create it from the plan's release view and choose which projects share it.

![Cross-space release in a Jira plan](/blog/cross-project/crossproject4.png)

There is an important limit: a cross-space release is a planning object inside the plan. [Atlassian's documentation](https://support.atlassian.com/jira-software-cloud/docs/create-a-cross-project-release-in-advanced-roadmaps/) states that cross-space releases cannot be saved to issues in Jira and cannot be viewed or edited in the projects themselves. To keep the fix version field usable, link the plan release to the individual project versions.

## Which option fits

| Option | Setup | Stays on the issue | Best when |
| --- | --- | --- | --- |
| Custom field | Low | As a custom field | You want the smallest change and can maintain the options |
| Version sync app | Medium | Yes, as fix versions | You want standard fix versions and automatic alignment |
| Roadmap app | Medium | Yes, as fix versions | You want roadmap views as well as releases |
| Cross-space release (Premium) | Medium | Only inside the plan | You already plan in Jira Premium plans |

## Working with cross-project releases in a story map

[Advanced Story Maps for Jira](/showcase/advanced) works with all four options.

For a custom field, open the map and choose **More options**, then **Settings**, then **Swimlanes**. Add the custom field as a swimlane. Single- and multi-select fields are supported.

![Adding the cross-project field to the story map](/blog/cross-project/crossproject5.png)

Back on the map, pick the field in the **Swimlanes** menu. Dragging an issue between lanes updates the field value, so a release plan takes shape on the map and the issues stay in step.

![Story mapping view](/blog/cross-project/crossproject6.png)

If you use matching release names across projects, Advanced Story Maps unifies them into one swimlane with no extra setup. Drag an issue to the lane and the app assigns the correct project release automatically. The [multi-project releases tutorial](/docs/tutorials/multi-project-releases) walks through that setup.

## A worked example

A release ships a checkout change from a **Web** project and an API change from a **Platform** project.

1. Create a version named `2026.4` in both projects, or let a sync app do it.
2. In Advanced Story Maps, create a dynamic map whose board filter includes both projects, for example `project in (Web, Platform)`.
3. Switch the swimlanes to **Releases**. The two `2026.4` versions appear as one lane.
4. Drag the checkout stories and the API stories into the lane. Their fix versions are set in Jira.
5. Use the map to check the slice is coherent before the team commits, then plan the sprint work in the sprint lanes.

That is the whole loop: one map, the real issues, and fix versions that other Jira tools still understand.

See [Advanced Story Maps](/showcase/advanced) in action, then visit the [Atlassian Marketplace](https://marketplace.atlassian.com/apps/1224417) for current plans.
