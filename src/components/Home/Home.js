import { Typography } from '@mui/material'
import React from 'react'
import DownArrow from '../DownArrow';
import './home.scss'

export default function Home() {
  return (
    <div className="home" id="home">
      <DownArrow className='top-arrow'/>
      <Typography variant="h1">HELLO!</Typography>
      <Typography variant="body1">
        I'm Ally and I'll be adding some super cool stuff about me
      </Typography>
    </div>
  );
}
