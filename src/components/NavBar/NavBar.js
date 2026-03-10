import React, { useState } from "react";
import "./navBar.scss";

const navItems = [
  { href: "#home", title: "Home" },
  { href: "#about", title: "About" },
  { href: "#tools", title: "Tools" },
  { href: "#projects", title: "Projects" },
  { href: "#contact", title: "Contact" },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`nav-bar ${menuOpen ? "nav-bar--open" : ""}`}>
      <a href="#home" className="nav-bar__logo" aria-label="Home">
        <span className="nav-bar__logo-img" role="img" aria-hidden="true" />
      </a>
      <button
        type="button"
        className="nav-bar__hamburger"
        onClick={() => setMenuOpen((open) => !open)}
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        <span className="nav-bar__hamburger-line" />
        <span className="nav-bar__hamburger-line" />
        <span className="nav-bar__hamburger-line" />
      </button>
      <div className="nav-bar__links">
        {navItems.map((item) => (
          <a
            className="nav-link"
            href={item.href}
            key={item.href}
            onClick={closeMenu}
          >
            {item.title}
          </a>
        ))}
      </div>
    </nav>
  );
}
