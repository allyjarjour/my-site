import { Typography } from '@mui/material';
import React from 'react'
import './tools.scss'
import DownArrow from './../DownArrow';

export default function Tools() {
  return (
    <section id='tools' className='tools'>
      <DownArrow />
      <Typography variant="h1">Tools & Technology</Typography>
    </section>
  );
}
