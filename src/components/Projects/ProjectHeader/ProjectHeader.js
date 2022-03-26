import { CardHeader, Typography } from '@mui/material';
import React from 'react'
import { socialLogos } from "../../../data";
import Anchor from "../../Anchor";
import Logo from '../../Logo';
import './projectHeader.scss'

export default function ProjectHeader({title, gitHubLink}) {
  return (
    <CardHeader
      className="project-header"
      title={
        <div className="title">
          <Typography variant="card-title">{title}</Typography>
          <Anchor href={gitHubLink} ariaLabel="See project on GitHub">
            <Logo data={socialLogos.github} />
          </Anchor>
        </div>
      }
    />
  );
}
