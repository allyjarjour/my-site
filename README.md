My personal website — React + Vite.

| Part | Host | Deploys on push to `main` |
|------|------|---------------------------|
| Site (UI) | [Firebase Hosting](https://firebase.google.com/docs/hosting) (`ally-jarjour`) | Yes — [GitHub Actions](.github/workflows/deploy.yml) |
| Spotify widget API | [Vercel](https://vercel.com) (`api/now-playing.js`) | Yes — Git integration |

Firebase Hosting does not require a card for static sites; the Spotify API runs on Vercel’s free tier.

## Development

```bash
npm install
npm run dev
```

The Spotify widget works in dev via a Vite proxy to your deployed Vercel API (no second terminal needed).

| Command | Description |
|---------|-------------|
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build locally |
| `npm test` | Run tests once |
| `npm run get-spotify-token` | One-time Spotify refresh token setup |

### Environment variables

**Frontend** (`.env.local`, prefix `VITE_`):

| Variable | Purpose |
|----------|---------|
| `VITE_EMAIL_JS_*` | EmailJS contact form |
| `VITE_NOW_PLAYING_API` | Spotify API base URL (set in `.env.production` for prod) |

**Vercel** (project → Settings → Environment Variables):

| Variable | Purpose |
|----------|---------|
| `SPOTIFY_CLIENT_ID` | Spotify app client ID |
| `SPOTIFY_CLIENT_SECRET` | Spotify app secret |
| `SPOTIFY_REFRESH_TOKEN` | From `npm run get-spotify-token` |

---

## Deployment

Pushing to `main` deploys **both** the site and the Spotify API automatically.

| What changed | Where it deploys | How |
|--------------|------------------|-----|
| UI, assets, `src/`, `public/` | Firebase Hosting | GitHub Actions |
| `api/now-playing.js` | Vercel | Git integration (linked repo) |

### Manual deploy (optional)

**Firebase (site only):**

```bash
npm run deploy
```

**One-time for CI:** `npx firebase login` locally; add `FIREBASE_TOKEN` to GitHub Actions secrets.

**Vercel:** Usually not needed — pushes to `main` redeploy automatically. Use the [Vercel dashboard](https://vercel.com/dashboard) only to redeploy manually or change env vars.

### What does *not* auto-update

- **Vercel env vars** — set once in the Vercel project settings; changing them does not require a code push.
- **Firebase env in the browser** — baked in at build time via `.env.production` (e.g. `VITE_NOW_PLAYING_API`). After changing that file, push to `main` or run `npm run deploy`.

---

## Architecture

```text
push to main
    ├─► GitHub Actions → Firebase Hosting (dist/)
    └─► Vercel Git       → /api/now-playing

Browser (Firebase URL) ──fetch──► Vercel API (Spotify widget)
```
