import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = ({ className }) => {
  return (
    <nav className={`${styles.nav} ${className}`}>
      <NavLink
        to="/news"
        className={({ isActive }) =>
          isActive ? `${styles.active} ${styles.news}` : styles.news
        }
      >
        News
      </NavLink>
      <NavLink
        to="/notices"
        className={({ isActive }) =>
          isActive ? `${styles.active} ${styles.notices}` : styles.notices
        }
      >
        Find pet
      </NavLink>
      <NavLink
        to="/friends"
        className={({ isActive }) =>
          isActive ? `${styles.active} ${styles.friends}` : styles.friends
        }
      >
        Our Friends
      </NavLink>
    </nav>
  );
};

export default Nav;
