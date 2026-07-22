# Lovable + Claude = 10k$ Website (almost) for free

Here's what it actually takes to build a "$10K website" with AI, and exactly
how I did it for convertleads.pro. 

It's not 1click prompt.
It took me a month to perfect the website as non tech.

If you interested here is the full story behind 139 commits, 24 of them about logos, 7 of them
full rollbacks, one full brand pivot in the middle. Scroll it yourself:
[the commit history is public](https://github.com/ljkhgjvchf/nicola/commits/main).
Full phase-by-phase breakdown in [`prompts/evolution.md`](prompts/evolution.md).

**Pinned version:** this case study refers to
[this exact commit](https://github.com/ljkhgjvchf/nicola/tree/82e3b49fb22b687b4d9cd8f22c26449ffdc6300b)
of the live site. The repo keeps moving after this; that commit is the fixed
point the story below describes.


## The stack


| Layer | Tool | What it did |
|---|---|---|
| Build/edit | **Lovable** | Free version |
| Blocks | **21st.dev / Magic UI** | Pre-built UI/UX sections |
| Website reference | **land-book.com, Dribbble, Behance** | Copy paste and improve |
| Manual edits | **Claude (Code)** | Took over once Lovable's FREE-tier credits or patience ran out, editing the GitHub-synced repo directly |
| Hosting | **Vercel** | Auto-deploys from the same repo Lovable and Claude both write to |

Lovable's free tier has real limits, and publishing to your own custom
domain is one of the big ones. That's exactly where Claude came in: instead
of upgrading Lovable's plan, the GitHub-synced repo got edited directly and
Vercel handled the custom domain deploy. Free tier in, real domain out.

## How to actually do this

### STEP 1: Chose the reference

To garanteed a high-qality result you need a reference. This is your good base.

Check on:
🏆 [Land-book](https://land-book.com)
🏀 [Dribbble](https://dribbble.com)
🎨 [Behance](https://behance.net)
🌐 Alternatives: [Godly](https://godly.website), [Awwwards](https://www.awwwards.com)

### STEP 2: Paste the Prompt Master

Open Lovable. Paste the master prompt against your reference. See
   [`prompts/master-prompt.md`](prompts/master-prompt.md) - edit before pasting with your preferences.

### STEP 3: Image & Video 

In Lovable update the images you wnatin to be presnet in your website, and indicate where.

For my built i used real photo and real client logos throughout. If you
want AI-generated visuals for your own site, tools like
[OpenArt](https://bit.ly/4bbw4LJ) exist for this.

### STEP 4: Improve UI/UX Block with templaes

Use the below website to add prebuilt blocks. Lovable will adapt them to your website style.

🛒 [21st.dev](https://21st.dev)
🪄 [Magic UI](https://magicui.design)
✏️ [CodePen](https://codepen.io)
📱 [Mobbin](https://mobbin.com)

### STEP 5: Pubblication on Domain

I used the Lovable FREE version, so to publish on my own doman (converleads.pro) I hand it off to Claude. Ask to sync to GitHub, and deploys Vercel.

### STEP 6: Verify 

Check on Dekstop and Phone if everthing works properly. Ask Lovable to fix, and again ask Claude to publish. 


## Honest cons

🖼️ **Editing in Lovable could be a nighmare.** Small requests can take too mch time.

💳 **Free-tier limits force workarounds.** Custom domains and heavy edits push you toward the Claude handoff.

🔀 **Desync risk.** Editing the GitHub repo outside Lovable's own UI worksfor deployment, but Lovable's chat history and diff tracking never finds out those changes happened. Least-talked-about risk of the whole workflow.

🚧 **Real ceiling: static/simple sites only.** Landing pages, portfolio sites, simple startup marketing sites, yes. Anything needing daily updates or publishing (a blog with frequent posts, news, a product catalog) needs an actual CMS. This stack doesn't replace one, and most "AI website" content never mentions it because most of it never ships anything that needs updating after launch.

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
