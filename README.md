# Lovable + Claude + Vercel: how I actually built convertleads.pro

One click. One prompt. A perfect website in ten seconds. That's the pitch
you keep seeing online, and it's a lie.

Here's what it actually takes to build a "$10K website" with AI, and exactly
how I did it for convertleads.pro.

**Pinned version:** this case study refers to
[this exact commit](https://github.com/ljkhgjvchf/nicola/tree/82e3b49fb22b687b4d9cd8f22c26449ffdc6300b)
of the live site. The repo keeps moving after this; that commit is the fixed
point the story below describes.

## Proof, not claims: the convertleads.pro source repo

July 2025. A long, unusually detailed prompt goes into Lovable (the real
thing, verbatim, in [`prompts/master-prompt.md`](prompts/master-prompt.md)).
The design comes out almost right on the first pass. Within 48 hours it's
already been rolled back twice.

Then the real fight starts, and it's not about design. For nine days in
September 2025, almost a quarter of all the edits made on this project are
about one thing: logos. Client logos that won't load, won't align, render
at the wrong size, or just break. Not taste, not layout, just broken images,
over and over.

Six months later, in March 2026, a bigger swerve: the business behind the
site changes. What started as a personal "Nicola Da Dalto, AI Automation"
pitch becomes "ConvertLeads." Not a copy edit, a full rebuild: nav, footer,
logo, every case study page, touched again.

By summer 2026, the gaps that only show up once a site is actually live get
patched in: an FAQ section, a favicon, meta tags and schema markup, a
sitemap, bilingual EN/IT support. None of it was in the original prompt.
All of it got added once the site had been out in the world for a while.

That's the full story behind 139 commits, 24 of them about logos, 7 of them
full rollbacks, one full brand pivot in the middle. Scroll it yourself:
[the commit history is public](https://github.com/ljkhgjvchf/nicola/commits/main).
Full phase-by-phase breakdown in [`prompts/evolution.md`](prompts/evolution.md).

## The real stack

Most "I built this with AI" content names one tool. Here's what actually
built convertleads.pro:

| Layer | Tool | What it did |
|---|---|---|
| Build/edit | **Lovable** | Generates and edits the app from prompts |
| Blocks | **21st.dev / Magic UI** | Pre-built, shadcn-compatible sections dropped in where Lovable's default output wasn't good enough |
| Design reference | **land-book.com, Dribbble, Behance** | Where the actual visual direction came from before any prompting started |
| Manual edits | **Claude (Code)** | Took over once Lovable's free-tier credits or patience ran out, editing the GitHub-synced repo directly |
| Hosting | **Vercel** | Auto-deploys from the same repo Lovable and Claude both write to |

Even Lovable's free tier has real limits, and publishing to your own custom
domain is one of the big ones. That's exactly where Claude came in: instead
of upgrading Lovable's plan, the GitHub-synced repo got edited directly and
Vercel handled the custom domain deploy. Free tier in, real domain out.

## How to actually do this

### STEP 1: Screenshots & References
🏆 [Land-book](https://land-book.com)
🏀 [Dribbble](https://dribbble.com)
🎨 [Behance](https://behance.net)
🌐 Alternatives: [Godly](https://godly.website), [Awwwards](https://www.awwwards.com)

### STEP 2: UI Sniping
🛒 [21st.dev](https://21st.dev)
🪄 [Magic UI](https://magicui.design)
✏️ [CodePen](https://codepen.io)
📱 [Mobbin](https://mobbin.com)

### STEP 3: Image & Video Generation (optional)
Not used on this build, real photo and real client logos throughout. If you
want AI-generated visuals for your own site, tools like
[OpenArt](https://bit.ly/4bbw4LJ) exist for this.

### Then
1. Write the master prompt against your reference. See
   [`prompts/master-prompt.md`](prompts/master-prompt.md).
2. Iterate in Lovable. Most of the time goes here, not seconds. Full history:
   [`prompts/evolution.md`](prompts/evolution.md).
3. Hand off to Claude when Lovable stalls, sync to GitHub, edit the repo
   directly.
4. Vercel deploys from the same repo, including your custom domain.

## Honest cons

🖼️ **Editing is fragile.** Small requests can produce unpredictable diffs.

💳 **Free-tier limits force workarounds.** Custom domains and heavy edits
push you toward the Claude handoff.

🔀 **Desync risk.** Editing the GitHub repo outside Lovable's own UI works
for deployment, but Lovable's chat history and diff tracking never finds out
those changes happened. Least-talked-about risk of the whole workflow.

🚧 **Real ceiling: static/simple sites only.** Landing pages, portfolio
sites, simple startup marketing sites, yes. Anything needing daily updates
or publishing (a blog with frequent posts, news, a product catalog) needs an
actual CMS. This stack doesn't replace one, and most "AI website" content
never mentions it because most of it never ships anything that needs
updating after launch.

## Watch the video

🎥 Full video breakdown coming this afternoon, a real walkthrough of the
process above, step by step. Link will go here once it's live.

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
