/**
 * Vercel serverless function: GET /api/now-playing
 * Returns current Spotify playback or { playing: false }.
 * Requires: SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN
 */

const TOKEN_URL = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_URL =
	"https://api.spotify.com/v1/me/player/currently-playing";
const RECENTLY_PLAYED_URL =
	"https://api.spotify.com/v1/me/player/recently-played?limit=1";

async function getAccessToken() {
	const clientId = process.env.SPOTIFY_CLIENT_ID;
	const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
	const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

	if (!clientId || !clientSecret || !refreshToken) {
		throw new Error("Missing Spotify env vars");
	}

	const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
	const res = await fetch(TOKEN_URL, {
		method: "POST",
		headers: {
			Authorization: `Basic ${basic}`,
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: new URLSearchParams({
			grant_type: "refresh_token",
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

async function getRecentlyPlayed(accessToken) {
	const res = await fetch(RECENTLY_PLAYED_URL, {
		headers: { Authorization: `Bearer ${accessToken}` },
	});

	if (!res.ok) {
		throw new Error(`Spotify recent API error: ${res.status}`);
	}

	return res.json();
}

function formatTrack(item, isRecent = false) {
	if (!item) return null;
	const artists = item.artists.map((a) => a.name).join(", ");
	const albumArt = item.album?.images?.[0]?.url || null;
	const trackUrl = item.external_urls?.spotify || null;
	return {
		track: item.name,
		artists,
		albumArtUrl: albumArt,
		trackUrl,
		isRecent,
	};
}

export default async function handler(req, res) {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Cache-Control", "s-maxage=30, stale-while-revalidate=60");

	if (req.method !== "GET") {
		res.status(405).json({ error: "Method not allowed" });
		return;
	}

	try {
		const mode = req.query?.mode;

		const accessToken = await getAccessToken();
		let payload = null;

		if (mode === "recent") {
			const recent = await getRecentlyPlayed(accessToken);
			const recentItem = recent?.items?.[0]?.track;
			if (recentItem) {
				payload = formatTrack(recentItem, true);
			}
		} else {
			const nowPlaying = await getNowPlaying(accessToken);

			if (nowPlaying?.item) {
				payload = formatTrack(nowPlaying.item, false);
			}

			if (!payload) {
				const recent = await getRecentlyPlayed(accessToken);
				const recentItem = recent?.items?.[0]?.track;
				if (recentItem) {
					payload = formatTrack(recentItem, true);
				}
			}
		}

		if (!payload) {
			res.status(200).json({ playing: false });
			return;
		}

		res.status(200).json({ playing: true, ...payload });
	} catch (err) {
		console.error("now-playing error:", err.message);
		res.status(500).json({
			playing: false,
			error: process.env.NODE_ENV === "development" ? err.message : undefined,
		});
	}
}
