import { Typography } from '@mui/material'
import React from 'react'
import DownArrow from '../DownArrow';
import './about.scss';

export default function About() {
  return (
    <div id='about' className='about'>
      <DownArrow />
      <Typography variant="h1">About Me</Typography>
    </div>
  );
}
