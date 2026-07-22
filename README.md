# Lovable + Claude + Vercel: how I actually built convertleads.pro

A real build log, not a highlight reel. If you've seen the "paste a prompt,
get a website in one second" videos, this is the honest version: the same
result is genuinely possible without knowing how to code, but it takes real
time, not seconds, and it only works for the right kind of site.

**Proof, not claims:** the [convertleads.pro source repo](https://github.com/ljkhgjvchf/nicola)
has 139 commits from the first prompt to today. 24 of them (17%) are just
fixing broken or misaligned logos, the single biggest recurring problem in
the whole build. 7 are explicit rollbacks ("Reverted to commit..."), proof
that not every AI-generated change was a keeper. And in March 2026, the
entire business identity changed mid-build, from a personal "Nicola Da Dalto,
AI Automation" pitch to the "ConvertLeads" brand live today, which is not a
prompt refinement, it's a full pivot that happened after the site was already
built once. Full breakdown in [`prompts/evolution.md`](prompts/evolution.md).
Scroll the commit history yourself, it's public.

## The real stack

Most "I built this with AI" content names one tool. The actual stack behind
convertleads.pro is five layers deep:

| Layer | Tool | What it did |
|---|---|---|
| Build/edit | **Lovable** | Generates and edits the app from prompts |
| Framework | **Vite + React + TypeScript** | What Lovable actually scaffolds, confirmed by the project literally being named `vite_react_shadcn_ts` |
| Components | **shadcn/ui + Radix UI + Tailwind CSS** | The design system underneath every Lovable-generated component |
| Blocks | **21st.dev / Magic UI** | Pre-built, shadcn-compatible sections dropped in where Lovable's default output wasn't good enough |
| Design reference | **land-book.com, Mobbin, Dribbble, Behance** | Where the actual visual direction came from before any prompting started |
| Manual edits | **Claude (Code)** | Took over once Lovable's free-tier credits or patience ran out, editing the GitHub-synced repo directly |
| Hosting | **Vercel** | Auto-deploys from the same repo Lovable and Claude both write to |

The reason blocks from 21st.dev/Magic UI drop into a Lovable project cleanly
isn't luck. Lovable scaffolds shadcn/ui, and those sites publish
shadcn-registry-compatible components: same underlying design system, three
different sources feeding it.

## The actual step-by-step

1. **Find a design reference first.** Not a prompt, a real site. land-book.com,
   Mobbin, Dribbble, and Behance are where the visual direction came from
   before Lovable ever saw a prompt.
2. **Write the master prompt against that reference.** See
   [`prompts/master-prompt.md`](prompts/master-prompt.md), the real one used
   here.
3. **Iterate in Lovable.** This is most of the time spent, not seconds. See
   [`prompts/evolution.md`](prompts/evolution.md) for the actual 139-commit
   history: what changed, when, and why, including a full mid-build brand
   pivot that no prompt predicted.
4. **Snipe blocks for the sections Lovable doesn't nail.** 21st.dev and Magic
   UI, adapted into the project, see [`blocks/`](blocks/).
5. **Hand off to Claude when Lovable stalls.** Once free-tier credits or
   patience run out, sync to GitHub and edit the repo directly.
6. **Vercel deploys from the same repo.** No separate deploy step once it's
   wired up.

## Honest pros

- Genuinely fast to a real, deployed MVP, not a mockup, a live site
- No infrastructure setup: Lovable + Vercel handles all of it
- Good for non-technical iteration on copy and layout without touching code

## Honest cons

- Editing AI-generated code is fragile: small requests can produce
  unpredictable diffs
- Lovable's free-tier credit limits force workarounds (see: Claude handoff)
- **Going outside Lovable's own UI risks desyncing what Lovable thinks the
  repo looks like.** Editing the synced GitHub repo directly (via Claude or
  by hand) works for deployment, but Lovable's own chat history and diff
  tracking doesn't know those changes happened. This is the least-talked-about
  risk of the whole workflow.
- **The real ceiling: this only works for static/simple sites.** Landing
  pages, portfolio sites, and simple startup marketing sites, yes. Anything
  that needs daily updates or content publishing (a blog with frequent posts,
  a news site, a product catalog) needs an actual CMS. This stack doesn't
  replace one. Most "build a website with AI" content never mentions this
  because most of it never ships anything that needs updating after launch.

## The takeaway

Even without writing code, you can build something that would've cost
$10,000+ from an agency a few years ago. But "AI writes your website" is
doing a lot of work in that sentence. What actually happens is closer to
directing a very fast, occasionally unpredictable junior developer, through
five different tools, over days or weeks, not seconds.

## What's in this repo

| Folder | What it is |
|---|---|
| [`prompts/`](prompts/) | The actual prompts used, and how they evolved from v1 to what's live |
| [`snippets/`](snippets/) | Reusable code patterns pulled from the live site, genericized |
| [`blocks/`](blocks/) | UI sections sourced from 21st.dev/Magic UI and adapted, credited to source |

Built by [Nicola Da Dalto](https://convertleads.pro), AI marketing automation
and growth systems.

## License

MIT, do whatever you want with it. Note: individual files in `blocks/` may
carry their own license terms from their original source. Check each block's
header before reusing commercially.
