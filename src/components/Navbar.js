import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'Home' },
  { path: 'calculator', text: 'Calculator' },
  { path: 'quote', text: 'Quote' },
];
function Navbar() {
  return (
    <nav className="nav">
      <h2 id="logo">math magicians</h2>
      <ul className="linksContainer">
        {links.map((link) => (
          <li key={link.text}>
            <NavLink
              to={link.path}
              className={({ isActive }) => (isActive ? 'active' : 'normal')}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
