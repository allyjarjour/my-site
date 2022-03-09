import { Typography } from '@mui/material'
import React from 'react'
import DownArrow from '../DownArrow';
import './contact.scss'

export default function Contact() {
  return (
    <section id='contact' className='contact'>
      <DownArrow />
      <Typography variant="h1">Contact</Typography>
    </section>
  );
}
