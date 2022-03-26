import React from 'react'
import { aChange } from '../../data/projects';
import Project from './Project';

export default function AuctionableChange() {
  return (
    <Project project={aChange}>
      <iframe
        height={190}
        width="100%"
        style={{objectFit: 'contain'}}
        src="https://www.youtube.com/embed/b4ar5zmxTfk"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Project>
  );
}
