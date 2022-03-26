import { CardHeader, Typography } from '@mui/material';
import React from 'react'
import GitHubLogo from '../../GitHubLogo';
import './projectHeader.scss'

export default function ProjectHeader({title, gitHubLink}) {
  return (
    <CardHeader
      className="project-header"
      title={
        <div className="title">
          <Typography variant="card-title">{title}</Typography>
          <GitHubLogo href={gitHubLink} />
        </div>
      }
    />
  );
}
