# Ajla Korman - Portfolio

![GitHub stars](https://img.shields.io/github/stars/Ajla115/ajla115.github.io?style=flat-square&cacheSeconds=86400)
![GitHub forks](https://img.shields.io/github/forks/Ajla115/ajla115.github.io?style=flat-square&cacheSeconds=86400)
![License](https://img.shields.io/badge/License-GPL--3.0-blue?style=flat-square)
![Last Commit](https://img.shields.io/github/last-commit/Ajla115/ajla115.github.io?style=flat-square&cacheSeconds=86400)

[![CI](https://github.com/Ajla115/ajla115.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/Ajla115/ajla115.github.io/actions/workflows/ci.yml)

![React Version](https://img.shields.io/badge/react-19-blue)
![TypeScript](https://img.shields.io/badge/typescript-strict-3178c6)
![Vite Version](https://img.shields.io/badge/vite-8-purple)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-v4-06b6d4)
![Tests](https://img.shields.io/badge/tests-24%20passing-22c55e)
![Version](https://img.shields.io/badge/version-1.0.0-2563eb)

**Live:** [ajla115.github.io](https://ajla115.github.io/)

---

## About

A minimal dark personal portfolio: near-black canvas, one blue accent family, flat bordered cards, and an ambient aurora-and-beams background. Project cards carry live repo screenshots (GitHub's own OpenGraph card image per project). Built as a single-page scroll application with strict TypeScript, sections loaded near the viewport, data validation, and a persisted Full/Reduced motion preference.

Section links support reloads and browser history. Navigation loads the content before scrolling to its destination, while motion changes preserve form drafts, project filters, and keyboard focus.

---

## Tech Stack

| Category          | Technologies                                               |
| ----------------- | ---------------------------------------------------------- |
| **Core**          | React 19, TypeScript 7, Vite 8 (Rolldown), Tailwind CSS v4 |
| **Animations**    | Motion (Framer Motion)                                     |
| **Fonts**         | Inter Variable, JetBrains Mono (self-hosted)               |
| **Smooth Scroll** | Lenis (ReactLenis)                                         |
| **Icons**         | Lucide React, React Icons                                  |
| **Contact**       | Plain mailto CTA                                           |
| **Testing**       | Vitest 5, React Testing Library                            |
| **Code Quality**  | ESLint 10, typescript-eslint, jsx-a11y-x, Prettier         |
| **Deployment**    | GitHub Actions, GitHub Pages                               |

---

## Sections

| Section          | Features                                                                                               |
| ---------------- | ------------------------------------------------------------------------------------------------------ |
| **Hero**         | Logo tile, status badge, data-driven introduction, latest project and upstream contribution            |
| **About**        | Character reveal, highlight cards, quick-facts band                                                    |
| **Experience**   | Timeline with explicit detail controls, project evidence, internal contributions, and responsibilities |
| **Education**    | Academic timeline with CGPA counters and accessible achievement disclosures                            |
| **Skills**       | Brand-icon rows under dashed category rules, official brand colors                                     |
| **Projects**     | Filterable card grid with live repo screenshots, detail modal, and OSS banner                          |
| **Achievements** | Certifications, badges, and competitions (Credly sync supported but unused by default)                 |
| **Services**     | Responsive bento grid with optional decorative scenes                                                  |
| **Contact**      | Contact cards plus a plain mailto CTA (no third-party form service)                                    |

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/Ajla115/ajla115.github.io.git
cd ajla115.github.io

# Install dependencies (requires pnpm >=11, Node >=24.11)
pnpm install

# Start dev server (port 3000)
pnpm dev

# Run tests
pnpm test

# Production build
pnpm build
```

For a file map, editing recipes, and contribution checks, read the [contributor guide](CONTRIBUTING.md).

## Scripts

| Command              | Description                                    |
| -------------------- | ---------------------------------------------- |
| `pnpm dev`           | Start development server                       |
| `pnpm build`         | Validate data and build to `/build`            |
| `pnpm preview`       | Preview production build                       |
| `pnpm test`          | Run 24 focused Vitest tests                    |
| `pnpm validate:data` | Validate JSON schemas and cross-file rules     |
| `pnpm lint`          | ESLint app and scripts (zero warnings)         |
| `pnpm lint:fix`      | ESLint with auto-fix                           |
| `pnpm format`        | Prettier format all files                      |
| `pnpm format:check`  | Verify formatting without writing              |
| `pnpm type-check`    | TypeScript strict-mode checking                |
| `pnpm check`         | Run format, lint, types, tests, and data gates |
| `pnpm clean`         | Remove build artifacts and cache               |

---

## Project Structure

```
data/                                  # JSON content files (edit these to customize)
├── personal.json
├── experience.json
├── education.json
├── skills.json
├── projects.json
├── achievements.json
├── services.json
└── contact.json
src/
├── __tests__/                         # Navigation, real form/filter, accessibility, utility, and data tests
├── assets/projects/                   # 960x600 webp covers captured from live sites
├── components/
│   ├── common/                        # ErrorBoundary
│   ├── layout/
│   │   ├── AmbientBackground.tsx      # Aurora glows + dot lattice + light beams
│   │   ├── Header/                    # Hero (split into sub-components)
│   │   ├── Navigation/                # Nav + DesktopNav + MobileMenu
│   │   ├── Footer/                    # Footer + SITE/SOCIAL columns
│   │   ├── DeferredSection.tsx        # Stable anchors + lazy loading/error boundaries
│   │   └── PageSection.tsx            # Shared section heading and content layout
│   └── ui/
│       ├── BrowserMockup.tsx          # 3D tilted browser window (CSS perspective)
│       ├── CharacterReveal.tsx        # Spring char-by-char animation (word-wrapped)
│       ├── DevAvatar.tsx              # About avatar: monogram + orbit of real stack glyphs
│       ├── GlassCard.tsx              # Flat card with optional pointer tilt
│       ├── MotionPreferenceControl.tsx # Persisted Full/Reduced motion toggle
│       ├── TechTag.tsx                # Reusable skill/tech tag
│       └── ...
├── constants/
│   ├── sections.ts                    # Section IDs, labels, order, and surfaces
│   └── theme.ts                       # Centralized colors, fonts, spacing
├── data/                              # Domain-specific typed JSON accessors
│   ├── personal.ts
│   ├── projects.ts
│   └── ...
├── hooks/                             # Breakpoint, focus, section-navigation, and motion providers
├── pages/                             # 8 page sections (each split into sub-files)
│   ├── about/
│   ├── experience/
│   ├── education/
│   ├── skill/
│   ├── projects/                      # Projects.tsx, filters, cards, and detail modal
│   │   └── covers/                    # Cover registry (live repo screenshots)
│   ├── achievement/
│   ├── services/
│   │   └── animations/                # Service card animations on an 80x80 canvas
│   └── contact/
├── types/
│   └── index.ts                       # Data contracts
├── utils/
│   ├── animations.ts                  # Shared Motion variants
│   ├── projectMetadata.ts             # Project date parsing and link availability
│   ├── skillIcons.ts                  # Shared brand/concept icon registry
│   └── ...                            # Date ranges, social icons, and credential images
├── App.tsx                            # Stable Lenis root + viewport-deferred section boundaries
├── index.tsx                          # Entry point
└── index.css                          # Tailwind theme tokens + component classes
```

---

## Data-Driven Content

All portfolio content lives in JSON files under `data/` at the project root:

| File                | Content                                                                                        |
| ------------------- | ---------------------------------------------------------------------------------------------- |
| `personal.json`     | Name, intro, bio, languages, social profiles, site copy                                        |
| `education.json`    | Degrees, institutions, CGPA                                                                    |
| `experience.json`   | Professional experience + positions of responsibility                                          |
| `skills.json`       | Categorized skills (6 primary + 3 secondary categories)                                        |
| `services.json`     | Service offerings                                                                              |
| `projects.json`     | Featured, collaborative, community, other projects, open source PRs, and community discussions |
| `achievements.json` | Certifications, badges, and competitions                                                       |
| `contact.json`      | Contact options (email, LinkedIn, GitHub, etc.)                                                |

Domain modules under `src/data/` expose typed getters without forcing every JSON file into the initial bundle. `scripts/validate-data.js` enforces required fields, unique IDs and URLs, status/date rules, consistent repository stars, credential fields, and exact project-cover parity. Existing text and metadata can usually be updated in JSON alone. Adding or removing a project also requires a matching cover registration; follow the [project editing recipe](CONTRIBUTING.md#add-or-remove-a-project).

Certifications are plain entries by default (name/type/issuer, no badge image required). `scripts/sync-credly.js` can still sync verified Credly badges into `achievements.json` if you want image badges instead -- see the script for usage.

---

## Environment Variables

Copy `.env.example` to `.env.local` only if you want to override the optional analytics toggle:

- `VITE_ANALYTICS_ENABLED` - set to `false` to skip Simple Analytics

## Motion Preference

The floating control at the bottom-left toggles between two persisted modes: **Full** is the default and enables the complete visual treatment regardless of the OS setting, and **Reduced** disables smooth scrolling and freezes looping/decorative movement while keeping project and service artwork visible.

---

## Deployment

[CI](.github/workflows/ci.yml) runs on every push to `main` and every pull request (all actions pinned to SHA hashes): install from the frozen lockfile, Prettier formatting, ESLint, strict TypeScript, `validate:data`, the test suite, and a production build (including rendering the CV pages from the source PDF).

Deployment itself is manual: `pnpm run deploy` builds and pushes `build/` to the `gh-pages` branch via the [gh-pages](https://www.npmjs.com/package/gh-pages) package, which GitHub Pages then serves at the repo's user-page domain.

---

## License

GPL-3.0 -- see [LICENSE](LICENSE) for details.
