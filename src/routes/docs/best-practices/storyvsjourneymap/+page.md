---
title: User story vs journey map
description: "Compare a user story map with a user journey map, what each one is for, and how they fit together when you plan work in Jira."
preloadImage: "/img/journey-michael.png"
---

We have developed [Journey Mapping for Jira](https://marketplace.atlassian.com/apps/1223654/journey-mapping-for-jira) alongside Story Mapping for Jira
in order to support the different needs of each practice.

Although a journey map and user story map may contain
some of the same pieces, they are used at different points of the process.

A story map is for planning and implementation while a journey map lets you validate
features from a user's perspective and also aims at discovery and understanding of user's requirements.

Therefore, our apps do very different things. In practical terms:

| Feature | Story Mapping for Jira | Journey Mapping for Jira |
| --- | :-: | :-: |
| Planning sprints and releases | &#10003; | &#10007; |
| Use standard issue types like Epic, Story, etc. | &#10003; | Custom |
| Analyse personas and their behaviour | &#10007; | &#10003; |

## Let's have a look at a simple example

You are building an online shopping platform and you have two types of customers
that use the site in very different ways.

### Personas

#### Sean

Quickly scans what is on offer by directly searching for what he wants.

#### Michael

Likes to browse and is a bit undecided, so he will look through the categories of your shop

### Journey Mapping

In order to satisfy both users, your shop software will need to support these two different approaches as best as possible.
You should write down each individual path to using the shop software in a journey map for later reference
and also to capture user's expectations.

Let's quickly look at Michael's journey:

![Michael's Journey](/img/journey-michael.png)

As you can see, these items are not actionable for your team.
They also go into great detail about Michael's behaviour. Therefore, you
may not want to represent these as Epics within your backlog.

Journey Mapping for Jira lets you link individual tickets to these steps.
It does not provide planning features as it is designed for the discovery phase and planning
and implementation is best done on the User Story Map.

### User Story Mapping

This is what a simple story map for your shop software could look like:

![Example User Story](/docs/mockups/map-overview.svg)

As you can see, the epics at the top only represent a generalized version of the user's actions.
You can add the individual tickets to sprints or releases for planning purposes.

## Conclusion

User Story Mapping and Journey Mapping complement each other very well.
The process of journey mapping forces you to look at the overarching behaviours or your users.
You can easily build a shared understanding of their personas and requirements.

Story mapping on the other hand will help you implement the user journeys into your software and prioritise
which features come first, by giving developers and product managers an easier overview of actionable items.
