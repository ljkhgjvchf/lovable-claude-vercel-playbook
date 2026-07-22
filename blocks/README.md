# Blocks

UI sections from convertleads.pro, genericized (no brand copy, no tracking
IDs, no client logos) so they drop into any Lovable/shadcn-ui project.

| Block | Pattern | Source |
|---|---|---|
| `hero-section.tsx` | Oversized thin-weight headline, fade/slide-in | Lovable's own output, refined by hand |
| `cta-section.tsx` | Centered headline + pill CTA, scroll-in | Lovable's own output, refined by hand |
| `faq-accordion-section.tsx` | Two-column FAQ with shadcn Accordion | Lovable's own output, refined by hand |
| `infinite-logo-marquee.tsx` | Auto-scrolling, hover-to-slow, edge-faded logo strip | **Flagged**: this exact `InfiniteSlider`/`BlurredInfiniteSlider` pattern is a recognizable UI-sniping block (commonly seen on sites like 21st.dev / originui.com), not something Lovable generates from scratch |

## Before you reuse the flagged block commercially

`infinite-logo-marquee.tsx` matches a pattern that's widely redistributed
across UI-block libraries. Confirm:
1. Where it actually came from (21st.dev, Magic UI, originui, or elsewhere)
2. That source's license terms: MIT, free-for-personal-use, and pro-tier-only
   all show up in this space, and they're not interchangeable

The other three blocks are Lovable's own generated output (refined by hand,
not sniped from an external library), so they carry no external license
constraint beyond this repo's own MIT license.

## Requirements

All blocks assume a shadcn/ui project: Tailwind CSS, `@/components/ui/*`
primitives, `@/lib/utils` (`cn` helper), and `framer-motion` installed.
`infinite-logo-marquee.tsx` additionally needs `react-use-measure`.
