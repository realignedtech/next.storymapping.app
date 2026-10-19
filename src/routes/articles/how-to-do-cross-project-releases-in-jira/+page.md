---
title: "How to do Cross Project Releases in Jira"
description: "This article will show you different solutions to plan releases and have fix versions available across multiple Jira projects"
date: "2022-10-12"
---

## Introduction

If you have users in several different Jira projects and want to release fixes in those projects at the same time, you should consider using a cross project release. This article will cover the basics of this feature, as well as three solutions for planning releases across multiple Jira projects within the same organization.

Atlassian Jira has evolved for many years as a go-to solution for many software teams doing their release planning. However, one big gaping hole in the feature set of Jira is the ability to do cross-project release planning. This article will show you different solutions to plan releases and have "fix versions" available across multiple Jira projects.

## Built-In Solution

The easiest way to plan releases across different projects without any apps is to create a custom field and maintain a separate release list from the one available in the "fix versions" field. You can even hide the default field from all issue screens when you set up your cross-project release field and use that.

Jira allows you to have single and multi-select lists as custom fields. Depending on your needs, one or the other is preferential.

To create a custom field, go to Issues -> Custom Fields and click "Create," then select the desired type, Single or Multi-Select list and enter the field options. You can later update the field option at any point.

![Creating the custom field](/blog/cross-project/crossproject3.png)

One downside of this solution is that a Jira admin has to maintain the field options. Also, many third-party apps work with the available "Fix versions" field and do not support custom version fields like this.

Advanced Story Maps for Jira, however, offers the ability to plan those cross-project releases within the app. We will get into this later.

## Release Sync Tools

There are a few release sync tools on the marketplace. One of the most popular ones is [Version Sync for Jira](https://marketplace.atlassian.com/apps/1219807/version-sync-for-jira?hosting=cloud&tab=overview)

The tool works by syncing versions between projects that have the same name. You set it up to include all projects within scope, and it will keep the releases updated for you.

![Version Sync for Jira](/blog/cross-project/crossproject2.png)

You can configure the tool with project admin permissions, so you will find it when you go to your project configuration and click Apps.

## Roadmap Tools

Another possibility is to use Roadmap Tools like [Swanly](https://marketplace.atlassian.com/apps/1219470/swanly-portfolio-roadmaps-structure-gantt-release-timeline?hosting=cloud&tab=overview) to create cross-project releases for you. This is handy if you anyway require a roadmap functionality within your instance.

You can create cross-project releases by going to Swanly's release view and selecting Create Release on the right-hand side.

![Release Planning with Swanly](/blog/cross-project/crossproject1.png)

You can even create stages for your release, letting you split releases into smaller phases that are easier to plan.

## Advanced Roadmaps in Jira Premium

Jira Premium includes "Advanced Roadmaps," which lets you plan cross-project releases. You can read more about it here.

You can link individual project versions to this release to maintain the ability to use the "fix versions" field inside the projects and remain compatible with third-party apps.

![Advanced Roadmaps for Jira](/blog/cross-project/crossproject4.png)

Go to your Plan > Releases and click "Create release."
Select the release name, and choose Cross-project release.
Click Add and select the projects that will be sharing this release.
Select the dates.

## Working with cross-project releases in a user story map

[Advanced Story Maps for Jira](/) lets you choose how you want to work with releases. Whether you prefer to have the original "fix version" field or a custom field for all projects, you can work with all solutions.

To get started with custom fields, open the user story map, then go to the top right-hand menu "More options" -> "Settings" and then select "Swimlanes." From here, you can add custom fields to represent swim-lanes in the story map. The app supports both Single and Multi-Select fields. .

![Adding the cross project field to the story map](/blog/cross-project/crossproject5.png)

Once you have set up the custom field, you can switch back to the user story map and find the field's name in the dropdown list at the top when you click on "Swimlanes." When dragging a user story between swim-lanes, the app will update your custom field, making release planning very fast.

![Story Mapping view](/blog/cross-project/crossproject6.png)

If you are using a release sync tool as described above - the latest version of Advanced Story Maps offers an even easier solution. All releases with the same name from different projects will get a unified swim-lane. So there is no setup work involved.
Simply drag the issue to the respective release and the app will figure out the correct release to assign automatically.

We hope you found this helpful. Let us know what your preferred way of working with releases in Jira is.

See [Advanced Story Maps](/showcase/advanced) in action, then visit Atlassian Marketplace for current plans.
