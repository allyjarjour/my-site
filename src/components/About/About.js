import { Typography } from '@mui/material'
import React from 'react'
import './about.scss';

const summary = `I'm Ally, a frontend software engineer based in beautiful St. Augustine, FL — the nation's oldest city. After living in Spain, Colorado, and South Carolina, my partner and I now call a little beach bungalow home, where we share our days with Rosa, our rambunctious labradoodle.
When I'm not at my desk, you'll find me hunting down the next travel destination, experimenting with new recipes in the kitchen, sewing, or finding any excuse to get outside and stay active.`

export default function About() {
  return (
    <section id='about' className='about'>
      <Typography variant="h1">About Me</Typography>
      <div className='inner-container'>
        <img className='profile-pic' src='./me_in_macon.jpg' alt='Head shot of Ally Jarjour at the beach.' />
        <Typography variant='body1' className='about-summary'>
          {summary}</Typography>
      </div>
    </section>
  );
}
