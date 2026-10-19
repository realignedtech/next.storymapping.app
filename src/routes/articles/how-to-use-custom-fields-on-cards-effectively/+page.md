---
title: "How to use custom fields on cards effectively"
description: "Did you know Advanced Story Maps for Jira lets you configure Jira fields to be displayed directly on issue cards in your story map?"
date: "2022-07-27"
---

Did you know Advanced Story Maps for Jira lets you configure Jira fields to be displayed directly on issue cards in your story map?

From the story map, click the menu icon in the top right-hand corner, select Settings, then navigate to the fields tab.


![Navigate to settings](/blog/field-blog1.png)

The summary field is pre-selected here, as it is the only field displayed by default on the cards. You can search for additional fields using the search dropdown at the bottom of the list.

![Adding fields to the story map](/blog/field-blog2.png)

A simple case would be, for example, to add the labels field to the cards to display labels directly in the story map. It is beneficial if you have quick-filters enabled for the labels field. This way, you can easily spot cards that might be missing a label.

![Story Map with added label field](/blog/field-blog3.png)

Advanced Story Maps also has special support for built-in fields like Assignee or Priority, which will be displayed as little icons on the cards, just like on Jira Agile Boards.

![Story Map with added label field](/blog/field-blog4.png)

When changing any field using the built-in Jira edit dialog, the card fields will also automatically update - no need to reload the story map. Without context-switching, you can quickly change anything that might need work on your Jira Issues directly from the story map.

<video class="article-demo" width="1246" height="718" autoplay loop muted playsinline controls preload="metadata" poster="/blog/Priority-poster.webp" aria-label="Changing a priority value on a story map issue card">
  <source src="/blog/Priority.mp4" type="video/mp4" />
  <track kind="captions" src="/blog/Priority-captions.vtt" srclang="en" label="English" />
  <a href="/blog/Priority.mp4">Watch the priority editing demonstration</a>.
</video>

Once you add a numerical or a time estimation field to your cards, you will also be able to configure your swimlanes to display the totals for all cards in a status. In practice, you can select a field like "Original Estimate" - if you prefer to estimate hours and not story points and then configure your swimlane to display hourly values instead.

![Story Map with added label field](/blog/field-blog5.png)

These values are processed on-the-fly in the app, so once you change values, there total sum will be re-calculated

![Story Map with added label field](/blog/field-blog6.png)


You can also work with fields for third-party apps. Advanced Story Maps supports the Priority Score field from [Foxly](https://marketplace.atlassian.com/apps/1222824/foxly-requirements-backlog-prioritization-planning-poker), displaying and accumulating it directly on the story map. Once you have completed priority scoring in Foxly, you can show the final score in the map and rank issues accordingly. A shared score makes the reason for an issue's position easier to explain across teams.

![Foxly priority score](/blog/field-blog7.webp)

If you want to use user story mapping to make data-driven decisions, try [Foxly](https://marketplace.atlassian.com/apps/1222824/foxly-requirements-backlog-prioritization-planning-poker) and [Advanced Story Maps for Jira](https://marketplace.atlassian.com/1224417?utm_source=realigned-blog). If you have an idea for another field to display, [let us know](https://realignedtechnologies.atlassian.net/servicedesk/customer/portals).

As always, [book a demo](https://calendly.com/realigned/product-demo) with us if you want to learn more or see this feature live.
