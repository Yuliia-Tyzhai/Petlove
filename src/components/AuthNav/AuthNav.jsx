import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Імпортуємо useSelector для доступу до Redux-стану
import styles from './AuthNav.module.css';

const AuthNav = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated); // Перевіряємо, чи користувач авторизований

  if (isAuthenticated) return null; // Якщо користувач авторизований, не показуємо AuthNav

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
