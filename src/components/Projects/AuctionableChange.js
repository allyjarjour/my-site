import React from 'react'
import { aChange } from '../../data/projects';
import Project from './Project';

export default function AuctionableChange() {
  return (
    <Project project={aChange}>
      <iframe
        width="400"
        height="250"
        src="https://www.youtube.com/embed/b4ar5zmxTfk"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Project>
  );
}
