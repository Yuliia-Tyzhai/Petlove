import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

const AuthNav = ({ setIsRegistrationOpen }) => {
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
      <button
        className={styles.registration}
        onClick={() => setIsRegistrationOpen(true)}
      >
        registration
      </button>
    </nav>
  );
};

export default AuthNav;
