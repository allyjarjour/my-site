import { Typography } from '@mui/material'
import React from 'react'
import DownArrow from '../DownArrow';
import './home.scss'
import { isMobile } from "react-device-detect";

export default function Home() {
  return (
    <section className="home" id="home" style={{paddingTop: isMobile ? 0 : 100}}>
      {!isMobile && <DownArrow className="top-arrow" />}
      <Typography variant="h1">HELLO!</Typography>
      <Typography variant="body1">
        I'm Ally and I'll be adding some super cool stuff about me
      </Typography>
    </section>
  );
}
