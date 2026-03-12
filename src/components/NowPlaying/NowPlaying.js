import { Typography } from "@mui/material";
import React from "react";
import SpotifyNowPlaying from "../SpotifyNowPlaying";
import "./nowPlaying.scss";

export default function NowPlaying() {
	return (
		<section id="now-playing" className="now-playing">
			<Typography variant="h1" className="now-playing__title">
				What I&apos;m listening to
			</Typography>
			<div className="now-playing__widget">
				<SpotifyNowPlaying />
			</div>
		</section>
	);
}
