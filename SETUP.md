# Setup Guide

Step-by-step instructions to install, run, build, and deploy this portfolio.
All content lives in a single file — [`src/data/portfolio.ts`](src/data/portfolio.ts).

## Prerequisites

| Tool | Version | Check |
| ---- | ------- | ----- |
| Node.js | 18 or newer (Vite 5 requirement) | `node -v` |
| npm | 9 or newer (ships with Node) | `npm -v` |
| Git | any recent | `git --version` |

## 1. Get the code

```bash
git clone https://github.com/Nandesh25/portfolio.git
cd portfolio
```

> If you downloaded a ZIP instead of cloning, extract it and `cd` into the folder
> that directly contains `package.json` before running any commands.

## 2. Install dependencies

```bash
npm install
```

Then start developing:

```bash
npm run dev        # start the dev server at http://localhost:5173
```

## 3. Available scripts

| Command | What it does |
| ------- | ------------ |
| `npm run dev` | Start the Vite dev server with hot-module reload (http://localhost:5173). |
| `npm run build` | Type-check (`tsc -b`) and build an optimized bundle to `dist/`. |
| `npm run preview` | Serve the production build locally to verify it. |
| `npm run lint` | Run ESLint over all `.ts`/`.tsx` files. |

## 4. Customize your content

Everything is data-driven from [`src/data/portfolio.ts`](src/data/portfolio.ts):

- **Profile & links** — `profile.name`, `profile.title`, `profile.email`,
  `profile.github`, `profile.linkedin`, `profile.resumeUrl`.
- **Sections** — `about`, `skills`, `experience`, `projects`, `education`,
  `certifications`, `achievements`.
- **Per-project links** — `projects[].github`, `projects[].demo`.

Changes hot-reload instantly while `npm run dev` is running.

## 5. Add / replace the resume PDF

The Resume section and every "Download Resume" button link to
`/Nandesh_Murali_Resume.pdf`, served as a static file from `public/`.

1. Copy your PDF into the `public/` folder.
2. Name it exactly `Nandesh_Murali_Resume.pdf`
   (or change `profile.resumeUrl` in `src/data/portfolio.ts` to match your filename).

Because it is one static file at one URL, every visitor on every device downloads
the identical PDF.

## 6. Production build & preview

```bash
npm run build      # outputs to dist/
npm run preview    # preview the built site locally
```

## 7. Deployment

The app builds to a static `dist/` folder and can be hosted anywhere.

- **Vercel / Netlify** — import the repo. Build command: `npm run build`,
  output directory: `dist`. No extra config needed (the site is served from the domain root).
- **GitHub Pages (project site)** — served from `https://<user>.github.io/portfolio/`,
  so set a base path in `vite.config.ts` before building:

  ```ts
  export default defineConfig({
    base: '/portfolio/',
    // ...existing config
  });
  ```

  Then deploy the `dist/` folder with your preferred GitHub Pages action.

## Troubleshooting

**"Download Resume" downloads an `.htm` file**
The PDF is missing from `public/`. The dev server falls back to `index.html` when
`/Nandesh_Murali_Resume.pdf` doesn't exist. Add the file (see step 5).

**`npm install` fails with `E401` / "Unable to authenticate"**
`package-lock.json` may resolve packages from a private registry that requires auth.
Install from the public npm registry instead:

```bash
npm install --registry=https://registry.npmjs.org/
```

If it still fails, delete `package-lock.json`, then re-run the command above to
regenerate the lockfile against the public registry.

**Port 5173 is already in use**
Vite automatically picks the next free port, or specify one:
`npm run dev -- --port 3000`.
