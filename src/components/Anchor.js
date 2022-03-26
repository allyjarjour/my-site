import React from 'react'

export default function Anchor({ href, ariaLabel, children }) {
  return (
    <a aria-label={ariaLabel} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}
