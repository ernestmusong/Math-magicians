import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const links = [
  { path: '/', text: 'Home' },
  { path: 'calculator', text: 'Calculator' },
  { path: 'quotes', text: 'Quotes' },
];
function Navbar() {
  return (
    <nav className={styles.nav}>
      <h2 id={styles.logo}>math magicians</h2>
      <ul className={styles.linksContainer}>
        {links.map((link) => (
          <li key={link.text}>
            <NavLink
              to={link.path}
              className={({ isActive }) => (isActive ? styles.active : styles.normal)}
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
