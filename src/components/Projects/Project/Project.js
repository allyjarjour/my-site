import { Card, CardContent, Typography, CardActions, CardMedia } from '@mui/material';
import React from 'react'
import Logo from '../../Logo';
import ProjectHeader from '../ProjectHeader';
import './project.scss'

export default function Project({ project, children }) {
  const { description, title, tech, imageSrc, imageAlt, gitHubLink } = project;
  return (
    <Card className="project">
      <ProjectHeader title={title} gitHubLink={gitHubLink} />
      {children || (
        <CardMedia
          sx={{objectFit: 'contain'}}
          component="img"
          height="190"
          image={imageSrc}
          alt={imageAlt}
        />
      )}
      <CardContent>
        <Typography variant="body2">
          {description}
        </Typography>
      </CardContent>
      <CardActions className='project-tech'>
        {tech.map((logo, i) => (
          <Logo key={i} data={logo} />
        ))}
      </CardActions>
    </Card>
  );
}


