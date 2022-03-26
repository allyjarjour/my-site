import { Typography } from '@mui/material'
import React from 'react'
import DownArrow from '../DownArrow';
import './about.scss';

export default function About() {
  return (
    <section id='about' className='about'>
      <DownArrow />
      <Typography variant="h1">About Me</Typography>
      <div className='inner-container'>
        <img className='profile-pic' src='./profile_pic.jpg' alt='Head shot of Ally Jarjour at the beach.'/>
        <Typography variant='body1' className='about-summary'>I'm a Frontend Developer currently residing in Charleston, South Carolina.
          Before pivoting to software development in 2019, I worked in public relations and marketing in the
          outdoor industry. When I'm not behind the computer, I'm usually on my bike, in the water or venturing
          to the mountains. </Typography>
      </div>
    </section>
  );
}
