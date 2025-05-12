import React from 'react';
import Nav from '../Nav/Nav';
import AuthNav from '../AuthNav/AuthNav';
import UserNav from '../UserNav/UserNav';
import { useSelector, useDispatch } from 'react-redux';

import styles from './BurgerMenu.module.css';
import LogOutBtn from '../LogOutBtn/LogOutBtn';

const BurgerMenu = ({ isMenuOpen, toggleMenu }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <nav className={`${styles.burgerMenu} ${isMenuOpen ? styles.open : ''}`}>
      <button className={styles.closeMenu} onClick={toggleMenu}>
        <svg className={styles.closeIcon}>
          <use href="/sprite.svg#close-icon" />
        </svg>
      </button>

      <div className={styles.menuContent}>
        <Nav className={styles.menuNav} />
        {!isAuthenticated ? (
          <AuthNav className={styles.menuAuthNav} />
        ) : (
          <div className={styles.userSection}>
            <UserNav className={styles.menuUserNav} />
            <LogOutBtn />
          </div>
        )}
      </div>
    </nav>
  );
};

export default BurgerMenu;
