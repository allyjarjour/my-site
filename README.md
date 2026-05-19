My personal website — React + Vite, hosted on [Firebase Hosting](https://firebase.google.com/docs/hosting) (project `ally-jarjour`).

## Development

```bash
npm install
npm run dev
```

Other useful commands:

| Command | Description |
|---------|-------------|
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm test` | Run tests once |
| `npm run test:watch` | Run tests in watch mode |

### Environment variables

Vite only exposes variables prefixed with `VITE_`. Copy `.env.example` to `.env.local` for local overrides.

| Variable | Purpose |
|----------|---------|
| `VITE_NOW_PLAYING_API` | Spotify widget API base URL (optional; defaults to same-origin `/api/now-playing`) |
| `VITE_EMAIL_JS_*` | EmailJS contact form credentials |

Production values live in `.env.production` (committed). Local secrets go in `.env.local` (gitignored).

---

## Deployment

The site deploys to **Firebase Hosting** (`dist/` after `vite build`). You can deploy locally or automatically from GitHub.

### Option 1: Deploy locally (npm scripts)

**Prerequisites:** Log in once with the Firebase CLI:

```bash
npx firebase login
```

| Script | What it does |
|--------|----------------|
| `npm run deploy` | Build + deploy **hosting only** (typical UI changes) |
| `npm run deploy:all` | Build + deploy hosting **and** Cloud Functions |
| `npm run deploy:functions` | Deploy Cloud Functions only (no rebuild) |

Example — ship a UI change:

```bash
npm run deploy
```

`firebase-tools` is included as a dev dependency, so `npx firebase` works without a global install.

### Option 2: Deploy via GitHub Actions

Pushes to `main` automatically build and deploy hosting (see `.github/workflows/deploy.yml`).

**One-time setup:**

1. Create a CI token locally:
   ```bash
   npx firebase login:ci
   ```
2. In GitHub: **Settings → Secrets and variables → Actions** → New repository secret
3. Name: `FIREBASE_TOKEN` — paste the token from step 1

After that, merge or push to `main` and the workflow handles the rest. Check progress under the repo’s **Actions** tab.

### Spotify API note

The production build may point the Spotify widget at a separate API (see `VITE_NOW_PLAYING_API` in `.env.production`). Hosting deploys do not update that API — only Firebase static files. API changes go to Vercel (`api/`) or Firebase Functions (`functions/`), depending on which backend you use.
