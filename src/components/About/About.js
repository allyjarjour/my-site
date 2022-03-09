import { Typography } from '@mui/material'
import React from 'react'
import DownArrow from '../DownArrow';
import './about.scss';

export default function About() {
  return (
    <section id='about' className='about'>
      <DownArrow />
      <div className='inner-container'>
        <img className='profile-pic' src='./profile_pic.jpg' alt='Head shot of Ally Jarjour at the beach.'/>
        <Typography variant="h1">About Me</Typography>
      </div>
    </section>
  );
}
