# Nandesh Murali — Portfolio

A modern, responsive personal portfolio for **Nandesh Murali** (Software Engineer / AI Engineer), built with React, TypeScript, Vite, Tailwind CSS and Framer Motion. Dark mode by default, fully responsive, animated and accessible.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite 5** (fast dev + optimized production build)
- **Tailwind CSS 3** (dark mode, custom theme)
- **Framer Motion** (scroll reveal, hover, stagger, page transitions)
- **React Icons**

## Getting Started

```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # type-check + production build to /dist
npm run preview  # preview the production build
```

> For detailed installation, customization, deployment and troubleshooting
> steps, see the **[Setup Guide](SETUP.md)**.

## Resume PDF

The Resume section and all "Download Resume" buttons point to `/Nandesh_Murali_Resume.pdf`,
which is served as a static file from `public/`. The PDF is already included.

To replace it, drop a new PDF into `public/` named `Nandesh_Murali_Resume.pdf`
(or update the path in `src/data/portfolio.ts` → `profile.resumeUrl`).

## Update Your Links (LinkedIn / GitHub)

The GitHub and LinkedIn links are configured in one place. Update them anytime:

- `src/data/portfolio.ts` → `profile.github`, `profile.linkedin`
- Per-project repo/demo links: `projects[].github`, `projects[].demo`

All content lives in **`src/data/portfolio.ts`** — the single source of truth.

## Project Structure

```
src/
  components/
    layout/     Navbar, Footer, ScrollProgress, BackToTop, CustomCursor, Loader, ThemeToggle
    ui/         Section, SectionHeading, Button, Badge, SocialLinks, AnimatedBackground
    sections/   Hero, About, Skills, Experience, Projects, ProjectCard,
                Education, Certifications, Achievements, Resume, Contact
  data/         portfolio.ts   (all content)
  hooks/        useTheme, useActiveSection, useMediaQuery
  types/        index.ts       (shared interfaces)
  utils/        motion.ts (Framer variants), cn.ts (class combiner)
  styles/       index.css      (Tailwind + base styles)
  App.tsx, main.tsx
public/         favicon.svg, og-image.svg, (place resume PDF here)
```

## Features

- Sticky navbar with active-section highlighting & smooth scroll
- Scroll progress bar, back-to-top button, custom cursor (desktop only)
- Loading animation & smooth page fade-in
- Dark/Light theme toggle (persisted)
- Scroll-reveal, hover, fade, slide, scale & stagger animations
- Lazy-loaded, code-split sections for fast loading
- Client-side validated contact form (opens mail client)
- SEO meta tags, Open Graph tags, favicon
- Accessible: semantic HTML, skip link, focus rings, reduced-motion support
```
```
