import { Typography} from '@mui/material'
import React from 'react'
import projects from '../../data';
import DownArrow from '../DownArrow';
import AuctionableChange from './AuctionableChange';
import Project from './Project';
import './projects.scss'

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <DownArrow />
      <div className='inner-container'>
        <Typography variant="h1">Projects</Typography>
        <div className='cards-container'>
          <AuctionableChange />
          {projects.map((p, i) => <Project project={p} key={i}/>)}
        </div>
      </div>
    </section>
  );
}