# v1 to now: the real timeline

Pulled directly from the `nicola` repo's commit history (139 commits, GitHub
API, not estimated). This is the actual edit log, not a reconstruction.

## Phase 1: initial build (2025-07-02 to 2025-07-04)

The master prompt (see [`master-prompt.md`](master-prompt.md)) goes in, Lovable
generates the first version. Within 2 days there are already two explicit
rollbacks:

```
2025-07-02  Use tech stack vite_react_shadcn_ts
2025-07-02  feat: Implement landing page design
2025-07-02  Visual edit in Lovable
2025-07-02  Visual edit in Lovable
2025-07-02  Refactor: Update landing page content and design
2025-07-03  Refactor: Implement design updates
2025-07-03  Visual edit in Lovable
2025-07-03  Refine landing page and add analytics
2025-07-04  Refactor: Update hero section and content
2025-07-04  Reverted to commit 443d35f...
2025-07-04  Remove Spline background and update text
2025-07-04  Remove pulse effect and adjust image position
```

Two rollbacks in the first 48 hours. Even a precise, detailed prompt (and this
one was unusually detailed) didn't produce a keeper on every pass.

## Phase 2: the logo problem (2025-08-08 to 2025-09-16)

This is the single biggest time sink in the whole build, and it has nothing to
do with design taste. **24 of the 139 total commits (17%) mention "logo."**
Nine straight days (Sep 8 to Sep 16) are dominated by it:

```
2025-09-08  Fix: Case studies not defined error
2025-09-08  Update logo image
2025-09-08  Reverted to commit 733187c...
2025-09-09  Fix company logos and web3 experience
2025-09-09  Fix company logos and update bio
2025-09-09  Update company logos
2025-09-09  Update logo display
2025-09-09  Reverted to commit c9797a1...
2025-09-09  Update logo sizes and effects
2025-09-13  Update header and logo section
2025-09-13  Refactor: Move company logos and adjust sizes
2025-09-13  Reverted to commit a1424a8...
2025-09-13  Refactor: Update menu, awards, and logos
2025-09-14  Reverted to commit a1424a8...
2025-09-14  Update company logos
2025-09-14  Fix logo display issues
2025-09-14  Fix logo loading error
2025-09-14  Fix logo loading issues
2025-09-14  Fix: Resolve logo loading issues
2025-09-14  Move logo section to header
2025-09-14  Reverted to commit ab83faa...
2025-09-14  Reverted to commit b5812a2...
2025-09-15  Update company logos
2025-09-15  Update logos from chat
2025-09-16  Fix: Update company logos
```

**Takeaway for the video/repo:** the highest-friction part of building with
Lovable wasn't the AI writing bad copy or ugly layouts, it was image assets.
Client/company logo files (format, sizing, loading, positioning) triggered
more rollbacks than anything else in this project's history. If you're
recording the step-by-step, flag this explicitly: budget real time for
logo/image asset handling, it's not glamorous but it's where the hours go.

## Phase 3: case studies get built out (2026-02-06 to 2026-02-07)

```
2026-02-06  Add case studies showcase
2026-02-06  Populate case study pages data
2026-02-07  Revamped case studies pages
```

The three chatbot/voice-agent case studies from the v1 prompt (EIT customer
support bot, hair salon receptionist, Ca' di Rajo wine lead-gen) do not appear
in this phase. What gets built instead is the current site's case study
structure: dedicated pages per client, populated with different content.

## Phase 4: the rebrand (2026-03-24 to 2026-03-26)

```
2026-03-24  Update Nicola branding to ConvertLeads
2026-03-24  Update ConvertLeads nav logo
2026-03-25  Update EIT case study and grid
2026-03-25  Update case studies grid and add EIT page
2026-03-25  Fix case-study gallery images
2026-03-25  Sync navbar across pages
2026-03-26  Fix case study nav and scroll
2026-03-26  Adjusted gradient overlay in case studies
```

This is the pivot: personal "Nicola Da Dalto, AI Automation" branding becomes
"ConvertLeads." Not a prompt refinement, a business identity change made
mid-build, cascading through nav, logo, and every case study page that
referenced the old name. This is the single most useful thing to say plainly
in the video: **the tools make the site cheap enough to rebuild that changing
your mind about the business itself, not just the design, becomes a real
option mid-project.** That's a different kind of "AI website" story than
"I typed a prompt and got a landing page."

## Phase 5: SEO and technical polish (2026-03-29 to 2026-06-15)

```
2026-03-29  Update GA4 measurement ID
2026-04-13  Removed links & added tags
2026-06-12  Added favicon and OG image
2026-06-12  Added FAQ, fixed scroll
2026-06-12  Added FAQ to Highloop case study
2026-06-12  SEO: fix meta tags, add schema markup, sitemap, robots.txt
2026-06-12  fix: correct sitemap namespace to 0.9
2026-06-15  fix: www redirect + add case study pages to sitemap
```

None of this was in the v1 prompt. Analytics, FAQ, favicon/OG image, schema
markup, sitemap, robots.txt, redirect handling: all added months later, once
the site was live and the gaps became obvious in practice. If you know you'll
want these (you almost always will for anything client-facing), ask for them
in the first prompt. See the refined master prompt below.

## Phase 6: latest polish (2026-07-16 to 2026-07-22, this week)

```
2026-07-16  Swapped Coty and McDonald's logos
2026-07-16  Replaced Cointelegraph logo
2026-07-16  Updated hero CTA to mailto
2026-07-21  Added static tool page          (the Signals Radar dashboard)
2026-07-21  Fixed mobile layout gaps
2026-07-21  Updated footer content & links
2026-07-21  Updated footer & Tools page
2026-07-22  Added lang toggle & fixed items  (EN/IT bilingual support)
2026-07-22  Fixed GitHub logo, added trans.
```

Logos again (still the recurring friction point, more than a year later),
plus the bilingual EN/IT rollout and the Signals Radar tool page from this
project.

## The numbers, for the video

- **139 total commits** from first prompt to today
- **24 commits (17%) mention "logo"**, the single biggest recurring problem
- **7 explicit "Reverted to commit..." rollbacks**, concrete proof that not
  every AI-generated change was a keeper
- **A full brand pivot mid-build** (March 2026), not in any prompt, a business
  decision made after seeing the site live
- **SEO, FAQ, favicon, schema, sitemap: all added 8+ months after launch**,
  not in the original ask

---

# Master prompt v2 (refined, informed by the real history)

If writing the v1 prompt again knowing all of the above, here's what changes.
Everything about the design system stays (it worked first try). What's added
addresses the actual friction points found in the commit history.

## Additions to the original prompt

**On logos/images (the #1 time sink):**
> For every logo or image asset: use SVG where possible, specify exact
> display height in the prompt (don't leave sizing to inference), and if a
> raster fallback is needed (PNG/JPG), say so explicitly. Confirm each logo
> renders correctly (not broken, not misaligned, not the wrong file) before
> moving to the next section, don't batch multiple logo changes into one
> prompt and review at the end. This one category caused more rollbacks than
> every other part of the build combined.

**On brand identity (decide before, not during):**
> Lock the business name, tagline, and positioning before writing this
> prompt. Changing it later touches nav, footer, logo, every case study, and
> every meta tag, it's a full pass, not a quick edit, however cheap the tools
> make it to actually execute.

**On what to ask for upfront (all added months later here):**
> Include from the start: an FAQ section, a favicon and OG image, basic SEO
> (meta tags, schema markup, sitemap.xml, robots.txt), and analytics
> (GA4 or equivalent). All of these get bolted on eventually for anything
> client-facing; asking for them in v1 avoids a second full pass later.

**On bilingual/multi-language (if relevant to your audience):**
> If you'll need more than one language, build the translation context
> (a single `t(key)` pattern, see [`snippets/language-context.tsx`](../snippets/language-context.tsx))
> from the first prompt. Retrofitting translations onto a site that wasn't
> built with them means touching every section again.

## What stays exactly the same

The full style-wise paragraph from v1 (Inter 300, tight heading tracking,
`#1c1c1c`/`#6c6c6f` neutrals, electric blue accent, phosphor icons light
weight, sticky blurred nav, scroll opacity/blur animation, glassmorphic
cards, glow-on-hover flat buttons) needed zero revision across 139 commits
and 12+ months. If your design brief is this specific, trust it.
