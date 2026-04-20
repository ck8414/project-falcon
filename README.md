# G&C Capital Holdings — Project Falcon

Institutional-grade website for **G&C Capital Holdings LLC**, a specialized investment and advisory firm focused on the Revenue Cycle Management (RCM) ecosystem.

**Live (Prod):** gccapitalholdings.com
**Repository:** https://github.com/ck8414/project-falcon

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, SSG) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | Playfair Display + Inter (via `next/font/google`) |
| Form Backend | Formspree |
| Package Manager | npm |

---

## Frameworks & Libraries

- **[Next.js 16](https://nextjs.org)** — React framework with App Router and static site generation. All pages are fully statically generated (`○ Static`).
- **[Tailwind CSS v4](https://tailwindcss.com)** — Utility-first CSS. Custom G&C brand tokens (`--color-gc-navy`, `--color-gc-gold`, etc.) defined as CSS variables in `app/globals.css` via `@theme`.
- **[Framer Motion](https://www.framer.com/motion/)** — Scroll-triggered fade/slide animations (`ScrollReveal`), animated stat counters (`AnimatedCounter`), hero headline stagger, and gold underline entrance.
- **[Lucide React](https://lucide.dev)** — Icon set used for contact details (Mail, Phone, MapPin) and UI elements (Menu, X, ArrowRight, ExternalLink).
- **[Formspree](https://formspree.io)** — Serverless form backend. Set `NEXT_PUBLIC_FORMSPREE_ID` in `.env.local`.

---

## Code Architecture

```
gc-capital-website/
├── app/
│   ├── layout.tsx              # Root layout: fonts (Playfair Display + Inter), metadata, global CSS
│   ├── page.tsx                # Single-page composition — imports all section components in order
│   ├── globals.css             # Tailwind v4 @theme tokens + global resets
│   ├── privacy-policy/page.tsx
│   ├── terms-of-use/page.tsx
│   └── disclosures/page.tsx
│
├── components/
│   ├── Navbar.tsx              # Sticky nav, mobile hamburger overlay, smooth scroll links
│   ├── Hero.tsx                # Full-viewport hero, animated headline, stat row
│   ├── About.tsx               # Who We Are, mission card, 3-value strip
│   ├── RCMOpportunity.tsx      # Market stats (animated), RCM lifecycle, Why Now grid
│   ├── TechAI.tsx              # 9 AI use-case cards, velocity callout
│   ├── OurEdge.tsx             # 6 competitive advantage cards
│   ├── Approach.tsx            # 6-step framework, closing quote
│   ├── Insights.tsx            # 3 static article cards, category filter bar
│   ├── Leadership.tsx          # Founder bios (Gautam Srivastava, Chaithra Kumar)
│   ├── Vision.tsx              # Centered vision statement on navy bg
│   ├── Contact.tsx             # Formspree contact form + contact details card
│   ├── Footer.tsx              # 4-column footer, legal links, disclaimer
│   └── ui/
│       ├── ScrollReveal.tsx    # Framer Motion whileInView wrapper (fade + slide up)
│       ├── AnimatedCounter.tsx # Count-up animation triggered on scroll into view
│       └── SectionLabel.tsx    # Gold uppercase eyebrow label component
│
└── public/
    └── logos/
        ├── gc-logo-dark-only.svg   # Seal + wordmark on transparent (for navy backgrounds)
        ├── gc-logo-light-only.svg  # Seal + wordmark for white backgrounds
        ├── gc-logo-dark.png        # Original PNG (full composite sheet)
        ├── gc-logo-light.png       # Original PNG (full composite sheet)
        └── gc-logo.svg             # Original combined SVG (both dark+light panels)
```

### Key Patterns

**Section layout:** Every section is a full-width `<section>` with `py-[60px] md:py-[120px]` and a `max-w-[1280px] mx-auto px-6` inner container. Alternating backgrounds: navy `#142254` → off-white `#F2F4F8` → white `#FFFFFF`.

**Scroll animations:** Wrap any block in `<ScrollReveal delay={0.1}>` to get a fade-in + slide-up on viewport entry (once). Delay staggers child elements.

**Brand colors:** All defined as CSS custom properties in `globals.css`. Reference via Tailwind class `text-gc-navy`, `bg-gc-gold`, etc., or directly as hex in inline `style` props.

**Anchor navigation:** All nav links use `document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })`. Anchor IDs: `#about` `#rcm-opportunity` `#ai-rcm` `#our-edge` `#approach` `#insights` `#leadership` `#vision` `#contact`.

---

## Commands

```bash
npm run dev       # Start dev server → http://localhost:3000
npm run build     # Production build (all pages statically generated)
npm run lint      # ESLint
```

## Environment Variables

Create `.env.local` in the project root:

```env
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_form_id
```

---

## Brand Tokens

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-gc-navy` | `#142254` | Primary background, headings |
| `--color-gc-gold` | `#C4973C` | Accents, CTAs, labels |
| `--color-gc-gold-dark` | `#A8812E` | Button hover state |
| `--color-gc-offwhite` | `#F2F4F8` | Alternating section bg |
| `--color-gc-body` | `#0D1A3A` | Body text on white/offwhite |
| `--color-gc-caption` | `#6B7A99` | Secondary/caption text |
| `--color-gc-gold-bg` | `#F5EDD6` | Gold callout card background |

---

## Deployment

The site is configured for static export and deploys on **Vercel** (recommended) or any static host:

```bash
npm run build   # outputs to .next/
```

For Vercel: connect the GitHub repo (`ck8414/project-falcon`) and set the `NEXT_PUBLIC_FORMSPREE_ID` environment variable in the Vercel dashboard.

---

## Versioning

| Tag | Description |
|-----|-------------|
| `v0.1.0` | Initial scaffold — all 12 sections, mobile-responsive |
