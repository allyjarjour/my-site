import { Typography } from '@mui/material'
import React from 'react'
import DownArrow from '../DownArrow';
import './home.scss'
import { isMobile } from "react-device-detect";

export default function Home() {
  return (
    <section
      className="home"
      id="home"
      style={{ paddingTop: isMobile ? 0 : 100 }}
    >
      {!isMobile && <DownArrow className="top-arrow" />}
      <Typography variant="h1">Welcome</Typography>
      <div className="inner-container">
        <img className='home-photo' src="./Cannon_Beach.jpg" alt="Boulders at Cannon Beach, Oregon"/>
        <Typography variant="body1">I'm Ally, a software developer by trade and an explorer by heart. Thanks for visiting my site.</Typography>
      </div>
    </section>
  );
}
