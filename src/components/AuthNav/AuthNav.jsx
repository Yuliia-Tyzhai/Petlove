import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <nav className={styles.authNav}>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? `${styles.active} ${styles.login}` : styles.login
        }
      >
        log in
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive
            ? `${styles.active} ${styles.registration}`
            : styles.registration
        }
      >
        registration
      </NavLink>
    </nav>
  );
};

export default AuthNav;
