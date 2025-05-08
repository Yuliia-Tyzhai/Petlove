import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        to="/news"
        className={({ isActive }) => (isActive ? styles.active : '')}
      >
        News
      </NavLink>
      <NavLink
        to="/notices"
        className={({ isActive }) => (isActive ? styles.active : '')}
      >
        Notices
      </NavLink>
      <NavLink
        to="/friends"
        className={({ isActive }) => (isActive ? styles.active : '')}
      >
        Our Friends
      </NavLink>
    </nav>
  );
};

export default Nav;
