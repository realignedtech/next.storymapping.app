---
title: "User story map vs journey map"
description: "A user story map plans the work; a journey map shows how a person moves through a product. How they differ, when to use each, and how to combine them in Jira."
---

A journey map and a user story map often contain the same pieces, so teams mix them up. They answer different questions at different points of the work. A journey map describes how a person experiences a product: the steps they take, what they expect, where they get stuck. A user story map arranges the work a team will deliver so that the next release is a coherent slice of that experience. One is for understanding; the other is for planning and building.

## The short version

| | Journey map | User story map |
|---|---|---|
| Question it answers | How does a specific type of user move through this, and how does it feel? | What do we build, in what order, and what goes in the next release? |
| Written from | One persona's point of view | The team's point of view |
| Unit | Steps, actions, thoughts, emotions, pain points | Epics, stories, tasks, bugs, in Jira terms: issues |
| Scope | One scenario or goal per map | The whole product area a team owns |
| Changes how often | Rarely, after research | Every sprint or release |
| Owner | Product, UX, research | Product and delivery together |
| Phase | Discovery and validation | Planning and implementation |

## What a journey map is

A journey map follows one persona through one scenario. For an online shop that might be "Michael, who likes to browse and is undecided, finds something to buy". Each step records what Michael does, what he expects, what he feels and where the product lets him down. The output is a shared understanding of a real person's path, including the parts that have nothing to do with your software.

Journey maps are written before and after building, not during. Before, they tell you where the opportunity is. After, they tell you whether what you shipped changed the experience. They do not tell a team what to build next week, and a step in a journey map is usually not something a developer can pick up.

## What a user story map is

A user story map lays the user's activities across the top, in the order the user does them, and hangs the work the team must deliver underneath each activity, with the most important work at the top. Slicing the map horizontally gives you a release: a thin, end-to-end version of the whole experience rather than one activity built to completion while the others sit empty.

The story map is a planning tool, so it changes every time the plan changes. In Jira terms, the activities are epics, the cards are issues, and a horizontal slice is a release or a sprint. That is why story maps live next to the backlog rather than in a research archive.

## Where they overlap, and why that confuses people

Both have a left-to-right backbone that follows the user. Both start from the user rather than from the system. If you put a journey map and a story map of the same scenario side by side, the top rows look alike. The difference is what hangs below. Under a journey map step you find observations about a person. Under a story map activity you find work for a team.

The practical test: if you can assign it to someone and estimate it, it belongs on the story map. If it describes what a person thinks or feels, it belongs on the journey map.

## Related maps you will see in the same search results

- **Customer journey map vs user journey map.** The same artefact at different zoom levels. A customer journey map covers the whole relationship with a company, from first hearing about it to renewing or leaving. A user journey map covers one task inside a product. Teams building software mostly need the second.
- **Experience map vs journey map.** An experience map describes how people accomplish a goal in general, before any product exists, often across several products and channels. A journey map is specific to your product and one persona.
- **User story vs user journey.** A user story is one unit of deliverable work, written from the user's perspective ("As a shopper I want to filter by size so that…"). A user journey is the sequence of steps a user takes. Journeys are where stories come from; one journey step may produce several stories or none.
- **Journey map vs process map.** A process map documents how the organisation works internally. A journey map documents how the person on the outside experiences it. They are often drawn for the same situation and disagree, which is the point.

## A worked example: the shop with two kinds of customer

You are building an online shopping platform with two typical customers.

- **Sean** knows what he wants. He searches directly, compares two results and buys.
- **Michael** is undecided. He browses categories, saves a few things, leaves, and comes back later.

**Journey map.** Michael's journey starts like this:

![Michael's journey: visits the landing page, looks at the categories section on the left side, clicks on a category of products, arrives at the category overview page](/img/journey-michael.png)

It goes on: he opens three products in tabs, closes the browser without buying, and returns later from a reminder email. Each step can carry what he expects (not to lose the things he looked at) and what he feels (mild frustration when the tabs are gone). None of these steps is a ticket. They are detailed, personal, and about behaviour.

**User story map.** The team's story map for the same shop has activities across the top: "find products", "evaluate a product", "save for later", "check out", "return". Under "save for later" sit the stories that would fix Michael's problem: a persistent wishlist, a reminder email, a "recently viewed" row. Under "find products" sit Sean's needs: fast search, filters, comparison. The first release slice takes the top card from each activity, so both Sean and Michael can get through the shop end to end, thinly.

![A story map: activities across the top, the work for each activity underneath, and horizontal lanes for releases](/docs/mockups/map-overview.svg)

The journey map told the team what mattered to Michael. The story map decided what to build first and showed how it fits with everything else.

## How to combine them in practice

1. Run discovery with journey maps, one per persona and scenario. Keep them in your research space, not in the backlog.
2. Translate each journey into activities and outcomes, and lay those across the top of a story map.
3. Write stories under each activity and rank them. Each story should point back to the journey step that justified it, so the "why" survives.
4. Slice releases horizontally. Check each slice against the journey maps: can Michael and Sean both get through?
5. After release, revisit the journey map. Steps that improved, steps that did not, and new pain points feed the next slice.

For the mechanics on the map itself, see [Working With the Map](/docs/tutorials/working-with-the-map) and [Planning Sprints and Releases](/docs/tutorials/planning-sprints-and-releases).

## Doing this in Jira

Story Maps for Jira puts the story map directly on your Jira project: epics across the top, issues underneath, sprints and releases as the slices. Nothing is copied into a separate tool; the map is a view over the issues your team already has, so planning on the map and working the board stay in step. Advanced Story Maps for Jira adds multi-project maps, custom hierarchies and custom-field swimlanes for larger planning environments. To try it, start with [Getting Started](/docs/getting-started).

For the persona side of the work, [Personas for Jira](https://betterpersonas.app/) lets you manage personas alongside your Jira issues, so a story can carry "this is for Michael" without a separate document.

Journey maps themselves are a research artefact rather than a backlog, and Jira is not where most teams keep them. Any whiteboard or research tool works; what matters is the link from each story back to the journey step it came from, which the story map gives you.
