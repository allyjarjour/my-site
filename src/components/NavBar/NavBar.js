import React from "react";
import "./navBar.scss";

const navItems = [
  {
    href: "#home",
    title: "Home",
  },
  {
    href: "#about",
    title: "About",
  },
  {
    href: "#tools",
    title: "Tools",
  },
  {
    href: "#projects",
    title: "Projects",
  },
  {
    href: "#contact",
    title: "Contact",
  },
];

export default function NavBar() {
  return (
    <nav className="nav-bar">
      {navItems.map((item) => (
        <a className="nav-link" href={item.href} key={item.href}>
          {item.title}
        </a>
      ))}
    </nav>
  );
}
