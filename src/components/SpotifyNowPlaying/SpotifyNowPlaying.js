import { Typography, Card, Box, CardContent, IconButton, CardMedia } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './spotifyNowPlaying.scss';

const POLL_INTERVAL_MS = 30000;

function getApiUrl() {
  const base = process.env.REACT_APP_NOW_PLAYING_API;
  const search = typeof window !== 'undefined' ? window.location.search : '';
  const forceRecent = search.includes('spotifyRecent=1');

  const appendMode = (url) => {
    if (!forceRecent) return url;
    return url.includes('?') ? `${url}&mode=recent` : `${url}?mode=recent`;
  };
  // Same origin (e.g. Firebase Hosting rewrite to /api/now-playing)
  if (!base) return appendMode('/api/now-playing');
  const normalized = base.replace(/\/$/, '');
  // Full URL (e.g. Firebase emulator: .../nowPlaying)
  if (/now[-_]?playing/i.test(normalized)) return normalized;
  return appendMode(`${normalized}/now-playing`);
}

export default function SpotifyNowPlaying() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const fetchNowPlaying = React.useCallback(async () => {
    const url = getApiUrl();
    try {
      const res = await fetch(url);
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setData({ playing: false });
        setError(true);
        setErrorMessage(json.error || res.statusText);
        return;
      }
      setData(json);
      setError(false);
      setErrorMessage(null);
    } catch (err) {
      setData({ playing: false });
      setError(true);
      setErrorMessage(process.env.NODE_ENV === 'development' ? err.message : null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNowPlaying();
    const id = setInterval(fetchNowPlaying, POLL_INTERVAL_MS);
    return () => clearInterval(id);
  }, [fetchNowPlaying]);

  if (error && (!data || !data.playing)) {
    return null;
  }

  if (!data?.playing) {
    return null;
  }

  const { track, artists, albumArtUrl, trackUrl, isRecent } = data;

  return (
    <div className="spotify-now-playing">
      <div className="spotify-now-playing__art">
        {albumArtUrl && (
          <img
            src={albumArtUrl}
            alt=""
            width={64}
            height={64}
            className="spotify-now-playing__art-img"
          />
        )}
      </div>
      <div className="spotify-now-playing__meta">
        <div className="spotify-now-playing__meta-header">
          <Typography variant="overline" className="spotify-now-playing__label">
            {isRecent ? 'Recently played' : 'Now playing'}
          </Typography>
          <img
            src="/Spotify_logo.png"
            alt="Spotify"
            className="spotify-now-playing__logo"
            width={18}
            height={18}
          />
        </div>
        <Typography
          variant="subtitle1"
          className="spotify-now-playing__track"
          as="a"
          href={trackUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {track}
        </Typography>
        <Typography variant="subtitle" className="spotify-now-playing__artists">
          {artists}
        </Typography>
      </div>
    </div>
  );
}
