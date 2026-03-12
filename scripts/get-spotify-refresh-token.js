/**
 * One-time script to get your Spotify refresh token.
 *
 * 1. In Spotify Dashboard (https://developer.spotify.com/dashboard), add this Redirect URI:
 *    http://127.0.0.1:8888/callback
 *    (Spotify no longer accepts "localhost"; use 127.0.0.1.)
 *
 * 2. Put your Client ID and Client Secret in functions/.env (no refresh token yet).
 *
 * 3. Run from project root: npm run get-spotify-token
 *
 * 4. Open the URL printed in the terminal, log in to Spotify, approve access.
 *
 * 5. The script will print SPOTIFY_REFRESH_TOKEN=... — add that line to functions/.env
 */

import { createServer } from 'http';
import { readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const envPath = join(rootDir, 'functions', '.env');

function loadEnv() {
  if (!existsSync(envPath)) {
    console.error('Missing functions/.env. Add SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET first.');
    process.exit(1);
  }
  const raw = readFileSync(envPath, 'utf8');
  const env = {};
  for (const line of raw.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1).replace(/\\"/g, '"');
    if (value.startsWith("'") && value.endsWith("'")) value = value.slice(1, -1);
    env[key] = value;
  }
  return env;
}

const env = loadEnv();
const clientId = env.SPOTIFY_CLIENT_ID;
const clientSecret = env.SPOTIFY_CLIENT_SECRET;

if (!clientId || !clientSecret) {
  console.error('functions/.env must contain SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET.');
  process.exit(1);
}

const redirectUri = 'http://127.0.0.1:8888/callback';
const scope = 'user-read-currently-playing';
const authUrl =
  'https://accounts.spotify.com/authorize?' +
  new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: 'code',
    scope,
  }).toString();

const server = createServer(async (req, res) => {
  const url = new URL(req.url, redirectUri);
  if (url.pathname !== '/callback' || !url.searchParams.has('code')) {
    res.writeHead(302, { Location: authUrl });
    res.end();
    return;
  }

  const code = url.searchParams.get('code');
  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectUri,
    }),
  });

  if (!tokenRes.ok) {
    const text = await tokenRes.text();
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(
      `<p>Token exchange failed (${tokenRes.status}). Check that your Redirect URI in Spotify Dashboard is exactly: <code>${redirectUri}</code> (use 127.0.0.1, not localhost).</p><pre>${text}</pre>`
    );
    server.close();
    process.exit(1);
  }

  const data = await tokenRes.json();
  const refreshToken = data.refresh_token;

  if (!refreshToken) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<p>No refresh_token in response. Try again.</p>');
    server.close();
    process.exit(1);
  }

  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(
    '<p><strong>Success.</strong> Check your terminal for the refresh token, then add it to <code>functions/.env</code> and close this tab.</p>'
  );

  console.log('\nAdd this line to your functions/.env file:\n');
  console.log('SPOTIFY_REFRESH_TOKEN=' + refreshToken);
  console.log('\n');
  server.close();
  process.exit(0);
});

server.listen(8888, () => {
  console.log('Open this URL in your browser, log in to Spotify, and approve access:\n');
  console.log(authUrl);
  console.log('\nWaiting for callback on http://127.0.0.1:8888/callback ...\n');
});
