# Resume CV — Arlan Tri Handika

Personal resume/CV website — [resume.handikatriarlan.dev](https://resume.handikatriarlan.dev)

## Tech Stack

- **Vanilla HTML/CSS/JS** — no frameworks, no build tools
- **Plain CSS** — CSS custom properties, BEM-like naming, no preprocessor
- **Mobile-first responsive design** — card layout on mobile, two-column on desktop (≥968px)
- **SEO optimized** — JSON-LD structured data, Open Graph, Twitter Card

## Features

- Single-page resume with all sections (profile, education, skills, experience, certificates)
- Responsive design: mobile, tablet, desktop
- Print-friendly styles
- PDF CV download
- Scroll-to-top button
- Accessibility: `prefers-reduced-motion`, `focus-visible`, semantic HTML5

## Structure

```
./
├── index.html                   # Single-page resume
├── assets/css/styles.css        # All styles
├── assets/img/avatar.png        # Profile photo
├── CNAME                        # Custom domain
├── resume-cv.pdf     # Downloadable CV
└── README.md
```

## Development

No build system. Open `index.html` directly in a browser:

```bash
open index.html
```

## Deployment

Deployed via **GitHub Pages**. Custom domain configured in `CNAME`. Push to `main` to deploy.

## Domain

[resume.handikatriarlan.dev](https://resume.handikatriarlan.dev)
