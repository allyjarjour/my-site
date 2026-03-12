/**
 * Firebase Cloud Function: GET /api/now-playing (via Hosting rewrite)
 * Returns current Spotify playback or { playing: false }.
 * Add a functions/.env file with SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN
 * (or the CLI will prompt for them on first deploy and save to functions/.env.<projectId>).
 */

import { onRequest } from 'firebase-functions/v2/https';
import { defineString } from 'firebase-functions/params';

const spotifyClientId = defineString('SPOTIFY_CLIENT_ID');
const spotifyClientSecret = defineString('SPOTIFY_CLIENT_SECRET');
const spotifyRefreshToken = defineString('SPOTIFY_REFRESH_TOKEN');

const TOKEN_URL = 'https://accounts.spotify.com/api/token';
const NOW_PLAYING_URL = 'https://api.spotify.com/v1/me/player/currently-playing';

async function getAccessToken() {
  const clientId = spotifyClientId.value();
  const clientSecret = spotifyClientSecret.value();
  const refreshToken = spotifyRefreshToken.value();

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error('Missing Spotify env vars');
  }

  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
  const res = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Spotify token refresh failed: ${res.status} ${text}`);
  }

  const data = await res.json();
  return data.access_token;
}

async function getNowPlaying(accessToken) {
  const res = await fetch(`${NOW_PLAYING_URL}?additional_types=track,episode`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (res.status === 204) {
    return null;
  }

  if (!res.ok) {
    throw new Error(`Spotify API error: ${res.status}`);
  }

  return res.json();
}

function formatTrack(data) {
  const item = data.item;
  if (!item) return null;
  const isEpisode = item.type === 'episode';
  const artists = isEpisode
    ? (item.show?.name ?? 'Podcast')
    : (item.artists?.map((a) => a.name).join(', ') ?? '');
  const albumArt = isEpisode
    ? item.images?.[0]?.url ?? item.show?.images?.[0]?.url ?? null
    : item.album?.images?.[0]?.url ?? null;
  const trackUrl = item.external_urls?.spotify ?? null;
  return {
    track: item.name,
    artists,
    albumArtUrl: albumArt,
    trackUrl,
  };
}

export const nowPlaying = onRequest(
  { cors: true },
  async (req, res) => {
    res.set('Cache-Control', 'public, s-maxage=30, stale-while-revalidate=60');

    if (req.method !== 'GET') {
      res.status(405).json({ error: 'Method not allowed' });
      return;
    }

    try {
      const accessToken = await getAccessToken();
      const nowPlayingData = await getNowPlaying(accessToken);

      if (!nowPlayingData) {
        res.status(200).json({ playing: false });
        return;
      }

      const payload = formatTrack(nowPlayingData);
      if (!payload) {
        res.status(200).json({ playing: false });
        return;
      }

      res.status(200).json({ playing: true, ...payload });
    } catch (err) {
      console.error('now-playing error:', err.message);
      res.status(500).json({
        playing: false,
        error: process.env.FUNCTIONS_EMULATOR === 'true' ? err.message : undefined,
      });
    }
  }
);
