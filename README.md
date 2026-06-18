My personal website — React + Vite, hosted on [Vercel](https://vercel.com).

| Part | Host | Deploys on push to `main` |
|------|------|---------------------------|
| Site (UI) + widget APIs | [Vercel](https://vercel.com) | Yes — Git integration |

## Development

```bash
npm install
npm run dev        # UI only (fast)
npm run dev:api    # UI + /api/* (needs Vercel login)
```

`npm run dev:api` runs `vercel dev`, which serves the Vite app and API routes locally using env vars from your linked Vercel project. Use `npm run dev` for quick UI work without the widgets.

| Command | Description |
|---------|-------------|
| `npm run dev` | Vite only — fast local UI dev |
| `npm run dev:api` | UI + API via `vercel dev` (Spotify/Hardcover widgets) |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build locally |
| `npm test` | Run tests once |
| `npm run get-spotify-token` | One-time Spotify refresh token setup |
| `npm run deploy` | Manual production deploy via Vercel CLI |

### Environment variables

**Frontend** (`.env.local`, prefix `VITE_`):

| Variable | Purpose |
|----------|---------|
| `VITE_EMAIL_JS_*` | EmailJS contact form |

**Vercel** (project → Settings → Environment Variables):

| Variable | Purpose |
|----------|---------|
| `SPOTIFY_CLIENT_ID` | Spotify app client ID |
| `SPOTIFY_CLIENT_SECRET` | Spotify app secret |
| `SPOTIFY_REFRESH_TOKEN` | From `npm run get-spotify-token` |
| `HARDCOVER_API_TOKEN` | Token from [hardcover.app/settings](https://hardcover.app/settings) → Hardcover API |

---

## Deployment

Pushing to `main` deploys the site and APIs automatically via Vercel Git integration.

| What changed | Deploys |
|--------------|---------|
| UI, assets, `src/`, `public/` | Vercel (static `dist/`) |
| `api/*.js` | Vercel (serverless functions) |

### Manual deploy (optional)

```bash
npm run deploy
```

Usually not needed — pushes to `main` redeploy automatically.

---

## Architecture

```text
push to main → Vercel
    ├─► dist/          (static React app)
    └─► api/*          (Spotify + Hardcover widgets)

Browser ──same origin──► /api/now-playing, /api/currently-reading
```
