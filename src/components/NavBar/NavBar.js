import { Link } from '@mui/material';
import React from 'react'
import './navBar.scss';

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <a className="nav-link" href="#home">
        Home
      </a>
      <a className="nav-link" href="#about">
        About
      </a>
      <a className="nav-link" href="#tools">
        Tools
      </a>
      <a className="nav-link" href="#projects">
        Projects
      </a>
      <a className="nav-link" href="#contact">
        Contact
      </a>
    </nav>
  );
}
