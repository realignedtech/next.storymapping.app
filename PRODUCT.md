# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary: existing customers.** Teams already running Story Maps for Jira or Advanced Story Maps for Jira inside their Jira site. They arrive with a specific job — find how a feature works, upgrade or migrate between editions, or check what changed in the latest release. The site's first duty is to answer them, not to convert them.

Two further audiences are served by surfaces that already exist in the codebase, but were not confirmed as priorities in the interview and should not be treated as the site's center of gravity:

- Evaluators comparing Jira story-mapping apps, who land on the home, showcase, and download pages.
- Jira admins and security reviewers clearing an app for installation, who land on the Trust Center.

## Product Purpose

Story mapping for teams who plan in Jira. The product puts the user journey above the backlog so a team can see the shape of the work, decide what belongs in the next release, and keep those decisions attached to the Jira issues that carry them out.

Two editions ship on the Atlassian Marketplace under the Realigned brand:

- **Story Maps for Jira** — the focused edition. Free for up to 10 users; larger teams pay through the Marketplace. Marketplace app `1224357`.
- **Advanced Story Maps for Jira** — the paid edition for complex planning environments. Marketplace app `1224417`. Formerly "Story Mapping for Jira - Pro"; renamed May 2022.

Success is a customer who finds the answer they came for and keeps planning, and an evaluator or admin who can verify what the product does and how it handles their data without contacting anyone.

## Positioning

Three claims a neighboring Jira story-mapping app could not truthfully copy:

1. **Depth for complex organizations.** The Advanced edition goes beyond a single map: custom issue hierarchies and link types, custom-field swimlanes, a goals/activities level above epics, multi-project maps, iteration planning, and admin configuration.
2. **Native to Jira, not parallel to it.** No separate service, account, or synced copy. Issues, links, sprints, and releases stay in Jira; the story map is a view over them, and changes reflect back into the board.
3. **Independent and responsive.** A small independent vendor: direct support, fast fixes, and a published security posture — versus a large vendor's roadmap and ticket queue.

## Operating Context

- Customers work inside Jira Cloud, opening the app from a project's navigation. Planning happens in sessions where product, design, and delivery look at the same map together.
- Installation, trials, licensing, and updates are handled by the Atlassian Marketplace, not by Realigned directly.
- The map is built from the artifacts a team already maintains: epics and issues, issue links, sprints, releases/versions, custom fields, story points and time tracking.
- The app respects Jira Cloud's dark color mode (Pro, since June 2023).
- Admin and security review is a real stage in adoption; the Trust Center exists to answer it without a sales conversation.

## Capabilities and Constraints

**Confirmed capabilities** (see `src/routes/docs/` for the authoritative detail):

- Story Maps for Jira: one map per Jira project, visual planning with epics and issues, sprint and release swimlanes.
- Advanced Story Maps for Jira: everything above plus multiple maps per project, any Jira issue and link type for hierarchy levels, top-level goals and activities, custom-field swimlanes, configurable card layout, epic and swimlane statistics (including time tracking and third-party apps such as Foxly), per-project enable/disable, dynamic maps loaded from any agile board, PNG export, and Advanced Roadmaps parent/child relationships on Jira Premium.
- Upgrading from free to Advanced requires no migration: Advanced reads the free edition's data structures and adds to them. Customers uninstall the free edition to avoid duplicate menu entries.

**Release status (confirmed 2026-08-02):** the Forge rebuild of Story Maps for Jira is **still pre-release**. "Coming soon" and "nearing public release" copy is currently accurate. It is time-sensitive — re-confirm before restating it, and never invent a date.

**Technical constraints:**

- SvelteKit 2 with Svelte 5 runes, Tailwind CSS 3, mdsvex for documentation, `@sveltejs/adapter-static`. The site is statically generated — no server runtime is available at request time.
- This SvelteKit site **replaces** the Next.js site at `sites/storymapping` and becomes the single live site at `storymapping.app`, covering both editions plus docs and the Trust Center. The Next.js site is being retired; it is a content source, not a design authority.
- Documentation lives in `src/routes/docs/**/+page.md`; navigation in `src/lib/docs/nav.js`; Trust Center navigation in `src/lib/trust/navigation.js`.

**Provenance warning:** parts of this site were assembled from a copied template. A `docs/docker-deployment` page documenting an unrelated `ghcr.io/windshiftapp/core` container was found and removed on 2026-08-02. Content that does not trace back to this product record should be treated as suspect and verified, not preserved by default.

## Brand Commitments

- Published by **Realigned**. Logo assets: `/Realigned.svg`, `/RealignedShadow.svg`.
- App marks: `/smFreeIcon.svg` (Story Maps for Jira), `/smProIcon.svg` (Advanced Story Maps for Jira), `/smFusedIcon.svg` (combined, used in site navigation).
- Atlassian Marketplace brand assets are used under Atlassian's marks: `/atlassian-marketplace-brand.svg`, `/atlassian-marketplace-inverse.svg`.
- Sibling Realigned products cross-linked from the site's app switcher: Personas for Jira (`betterpersonas.app`), Denkplan Portfolio Maps for Jira (`portfoliomapping.app`).
- Product names are exact: "Story Maps for Jira" and "Advanced Story Maps for Jira". Do not shorten or re-coin them in UI copy.

## Evidence on Hand

**Real and usable:**

- **Atlassian Marketplace ratings and reviews** on both listings. Cite only figures read from the live listing at the time of writing; do not carry a number forward as if it were static.
- **Product screenshots and video** — the strongest evidence the site has, and the material that should carry it: `static/main/` (`smfree.png`, `smfree2.png`, `smfree3.png`, `overview.png`, `hierarchy.png`, `release.png`, `smhighlight*.png`, `demo.mp4`, `demo2.mp4`, `short.mp4`), `static/docs/` (feature diagrams and captures), `static/blog/` (tutorial sequences).
- Published security and privacy material in `src/routes/trust/` — real policies, not marketing claims.

**Absences that must not be filled with invention:**

- No named customers, testimonials, quotes, or customer logos exist. Do not write any.
- No install counts, revenue, team-size, or performance benchmarks are on record here.
- The homepage currently uses Unsplash stock photography for its "why story mapping" cards. Stock imagery is decoration, not evidence, and carries no claim.

## Product Principles

1. **Answer the customer who already bought.** Documentation, upgrade paths, and release notes are the primary product of this site; persuasion is secondary and must never crowd them out.
2. **The product is the proof.** With no testimonials or numbers to lean on, real screenshots and video of the actual map do the persuading.
3. **Jira stays the source of truth.** Never describe or imply a parallel system, external account, or synced copy of a customer's data.
4. **Say only what is true today.** Release status, ratings, and edition boundaries are time-sensitive facts; re-confirm rather than restate.
5. **Survive an admin's review.** Security, privacy, and licensing answers stay findable and unhedged, because clearing that gate is part of adoption.

## Accessibility & Inclusion

**WCAG 2.1 AA** is the required standard — Atlassian Marketplace and enterprise buyers expect it. Hold the site to AA contrast ratios, visible focus states, full keyboard operability, and correct heading and landmark structure. Do not publish a certified-conformance claim or VPAT unless one is actually produced.
