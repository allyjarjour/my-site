import { Card, CardContent, Typography, CardActions, CardMedia } from '@mui/material';
import React from 'react'
import Logo from '../../Logo';
import ProjectHeader from '../ProjectHeader';

export default function Project({ project, children }) {
  const { description, title, tech, imageSrc, imageAlt } = project;
  return (
    <Card sx={{ maxWidth: 400 }}>
      <ProjectHeader title={title} />
      {children || (
        <CardMedia
          component="img"
          // height="194"
          image={imageSrc}
          alt={imageAlt}
        />
      )}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {tech.map((logo, i) => (
          <Logo key={i} alt={logo.alt} src={logo.src} />
        ))}
      </CardActions>
    </Card>
  );
}


