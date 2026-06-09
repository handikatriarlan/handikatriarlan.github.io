# Resume CV — Arlan Tri Handika

Personal resume/CV website — [resume.handikatriarlan.dev](https://resume.handikatriarlan.dev)

## Tech Stack

- **Vanilla HTML/CSS** — no frameworks, no build tools, no JavaScript
- **Plain CSS** — CSS custom properties, BEM-like naming, no preprocessor
- **Mobile-first responsive** — card layout on mobile, two-column grid on desktop (≥968px)
- **SEO optimized** — JSON-LD structured data (Person + Resume), Open Graph, Twitter Card, hreflang, sitemap

## Features

- Single-page resume (profile, education, skills, experience, certificates)
- Responsive: mobile, tablet, desktop
- Print-friendly styles
- PDF CV download
- Scroll-to-top button
- Accessibility: `prefers-reduced-motion`, `focus-visible`, semantic HTML5 landmarks
- Bilingual SEO (English + Indonesian)

## Structure

```
./
├── index.html                   # Single-page resume
├── assets/css/styles.css        # All styles (plain CSS, ~750 lines)
├── assets/img/avatar.png        # Profile photo
├── CNAME                        # Custom domain
├── CV Arlan Tri Handika.pdf     # Downloadable CV
├── robots.txt                   # SEO: crawler rules
├── sitemap.xml                  # SEO: hreflang-aware sitemap
├── AGENTS.md                    # Project conventions
└── README.md
```

## Performance

- **Zero JavaScript** — no frameworks, no analytics, no third-party widgets
- Estimated **LCP:** ~1.0–1.5s, **CLS:** ~0.0, **TBT:** ~0ms
- 14KB CSS, 19KB HTML
- External deps: Google Fonts (Inter) + Box Icons CDN

## Development

No build system. Open `index.html` directly in a browser:

```bash
open index.html
```

## Deployment

Deployed via **GitHub Pages**. Custom domain configured in `CNAME`. Push to `main` to deploy.

## Domain

[resume.handikatriarlan.dev](https://resume.handikatriarlan.dev)
