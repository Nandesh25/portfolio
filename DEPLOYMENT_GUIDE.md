# Deployment Guide

This portfolio deploys automatically to **GitHub Pages** using **GitHub Actions**.

**Live site:** https://nandesh25.github.io/portfolio/

---

## How it works

- **Workflow:** [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
- **Trigger:** every push to the `main` branch (or manually from the **Actions** tab → *Run workflow*).
- **Pipeline:** checkout → setup Node → configure Pages → `npm ci` → `npm run build` → upload `dist/` → deploy to Pages.
- **Hosting:** GitHub Pages *project site*, served from the `/portfolio/` base path (configured in [`vite.config.ts`](vite.config.ts)).

Once a run finishes green in the [Actions tab](https://github.com/Nandesh25/portfolio/actions), the site is updated (allow a minute for CDN propagation).

---

## Redeploying after any change

Every push to `main` rebuilds and redeploys automatically:

```bash
git add .
git commit -m "describe your change"
git push origin main
```

No manual steps are needed after the initial setup.

---

## Updating the resume (most common change)

The "Download Resume" buttons serve `public/Nandesh_Murali_Resume.pdf` via `profile.resumeUrl`.

**Recommended — keep the same filename (zero config):**

1. Replace `public/Nandesh_Murali_Resume.pdf` with your new PDF (keep the exact name).
2. Commit and push:
   ```bash
   git add public/Nandesh_Murali_Resume.pdf
   git commit -m "docs: update resume"
   git push origin main
   ```
3. The workflow redeploys automatically.

**If you rename the PDF:** also update `profile.resumeUrl` in [`src/data/portfolio.ts`](src/data/portfolio.ts) to match the new filename, then commit both files.

> **Caching note:** browsers and the Pages CDN may serve the old PDF briefly after a redeploy. Hard-refresh (Ctrl+Shift+R) to fetch the latest.

---

## Updating other content

All site content lives in [`src/data/portfolio.ts`](src/data/portfolio.ts) (profile, links, projects, skills, etc.). Edit it, commit, and push — the site redeploys.

---

## Checking deployment status

- **Actions tab:** https://github.com/Nandesh25/portfolio/actions — a green check on the latest run means it deployed.
- The **deploy** job's step "Deploy to GitHub Pages" can take a few minutes on the first run of a session; that's normal.

---

## One-time setup (already done — kept here for reference / forks)

1. **Settings → Pages → Build and deployment → Source:** `GitHub Actions`.
2. **Base path:** `vite.config.ts` sets `base: '/portfolio/'` for production builds (must match the repo name). If you rename the repo, update this value.
3. **Lockfile:** `package-lock.json` must resolve from the public npm registry (`registry.npmjs.org`) so `npm ci` works on the CI runner.

---

## Troubleshooting

| Symptom | Cause & fix |
| ------- | ----------- |
| **404 "There isn't a GitHub Pages site here"** after a deploy | Browser cached the 404, or the deploy is still finishing. Hard-refresh (Ctrl+Shift+R) and confirm the latest Actions run is green. |
| **Deploy stuck at `in_progress`** | The workflow uses `concurrency: cancel-in-progress: true`, so pushing again cancels a stuck run and starts fresh. |
| **`npm ci` fails with `E401` / auth error** | `package-lock.json` is pointing at a private registry. Regenerate it against the public registry: `npm install --registry=https://registry.npmjs.org/`, then commit the updated lockfile. |
| **Blank page / assets 404** | The `base` in `vite.config.ts` must equal `/<repo-name>/`. Fix it if the repo was renamed. |
| **"Download Resume" downloads an `.htm` file** | The PDF is missing from `public/`. Add `public/Nandesh_Murali_Resume.pdf`. |
