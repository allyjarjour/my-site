import { CardHeader, Typography } from '@mui/material';
import React from 'react'
import './projectHeader.scss'

export default function ProjectHeader({title}) {
  return (
    <CardHeader
      className="project-header"
      title={
        <div className="title">
          <Typography variant="card-title">{title}</Typography>
          <img
            className="logo"
            aria-label="See project on GitHub"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub logo"
          />
        </div>
      }
    />
  );
}
