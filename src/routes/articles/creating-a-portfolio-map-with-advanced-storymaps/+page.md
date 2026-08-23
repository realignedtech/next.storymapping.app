---
title: "Creating a Portfolio Map with Advanced Story Maps for Jira"
description: "Jira is not only used by software teams, but it can be really useful even for portfolio management. Learn how you can create a simple portfolio map using Story Mapping for Jira - Pro."
date: "2022-07-20"
---

On a high level, portfolio management controls delivery over
multiple teams, projects, initiatives or programs. In practice,
portfolio managers in Jira often deal with the limitations
of Jira's default functionality. For example, you can't put issues in the hierarchy
above the built-in Epic issue type.
One way to circumvent this, is by using issues links to connect issues
and then use either a third party tool like Jira Align or one of
the various Gantt-Chart or Roadmap-Apps from the Atlassian Marketplace
to build a high level overview over multiple Jira projects and Epics.

Another way to achieve this goal is to start simple - why not build a
simple visual map of your initiatives and link either Epics from projects or
other representations of high level planning items to these initiatives?
In this example, we do this by creating a new project and customizing its issue types.

If you have a team-managed project in Jira, you can do this
with project administrator permissions. If you have a company managed project,
or you lack the required administrative rights, you can ask your Jira
administrator to create issue types for you. In our example we will
use 3 issue types according to SAFe principles.

- Portfolio Epic
- Enabler
- Feature

You can name these any way you want or rename them later if needed.


Here is what the portfolio map looks like for example.


![Portfolio Map Example](/blog/PortfolioMap.png)

Now how do we achieve this? With Story Mapping for Jira, you can select
any issue type for the backbone row of your map (the top row). Go to the
app settings and choose the issue type from the dropdown menu.

![Epic Select Dropdown](/blog/EpicSelect.png)

This issue type is then used in place of an Epic like you would use it in
a classic story map in Jira.

You can optionally select a custom link type to connect the two sub-issue-types
to the Portfolio Epic type. **This is important if you later want to use
the tree structure that we create here in a gantt chart or a roadmap**.

    ![Link Select Dropdown](/blog/LinkSelect.png)

Now we have set up everything we need, we can start creating the portfolio map.
If you set up a Kanban board in the same project, you can basically
do the portfolio kanban method in parallel to the portfolio planning done in the
story map.

You would work the following way: You create or assign your features and enablers
in the story map, then later on you can move them in the kanban board, changing
their status, which in turn gets reflected back into the story map. You can
double check if items with priority are not moving or are in an unsuitable
status at any point.

You want to try it out for yourself?
Check out [Advanced Story Maps for Jira](https://marketplace.atlassian.com/1224417) on the Atlassian Marketplace.
And let us know how it is going, we are happy to help!

In the next blog post we will talk about planning long term with
custom timeframes, and how to use the plan view of the story mapping app. Stay tuned!
