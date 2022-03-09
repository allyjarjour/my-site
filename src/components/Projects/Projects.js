import { Typography} from '@mui/material'
import React from 'react'
import projects from '../../data/projects';
import DownArrow from '../DownArrow';
import AuctionableChange from './AuctionableChange';
import Project from './Project';
import './projects.scss'

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <DownArrow />
      <Typography variant="h1">Projects</Typography>
      <AuctionableChange />
      {projects.map((p, i) => <Project project={p} key={i}/>)}
    </section>
  );
}