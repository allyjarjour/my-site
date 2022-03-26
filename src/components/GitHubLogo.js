import React from 'react'
import "./Logo/logo.scss"

export default function GitHubLogo({ href, ariaLabel = "See project on GitHub" }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <img
        className="github-logo logo"
        aria-label={ariaLabel}
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        alt="GitHub logo"
      />
    </a>
  );
}
