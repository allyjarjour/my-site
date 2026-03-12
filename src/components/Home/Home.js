import { Typography } from "@mui/material";
import React from "react";
import DownArrow from "../DownArrow";
import SpotifyNowPlaying from "../SpotifyNowPlaying";
import "./home.scss";
import { isMobile } from "react-device-detect";

export default function Home() {
	return (
		<section
			className="home"
			id="home"
			style={{
				paddingTop: isMobile ? 0 : 100,
				backgroundImage: "url('./sunset.jpg')",
			}}
		>
			<div className="home__now-playing">
				<SpotifyNowPlaying />
			</div>
			{!isMobile && <DownArrow className="top-arrow" />}
			<Typography variant="h1">Ally Jarjour</Typography>
		</section>
	);
}
