import React from 'react';
import Nav from '../Nav/Nav';
import AuthNav from '../AuthNav/AuthNav';
import UserNav from '../UserNav/UserNav';
import { useSelector } from 'react-redux';
import styles from './BurgerMenu.module.css';

const BurgerMenu = ({ isMenuOpen, toggleMenu }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <nav className={`${styles.burgerMenu} ${isMenuOpen ? styles.open : ''}`}>
      <button className={styles.closeMenu} onClick={toggleMenu}>
        <svg className={styles.closeIcon}>
          <use href="/sprite.svg#close-icon" />
        </svg>
      </button>

      <Nav className={styles.menuNav} />
      {!isAuthenticated ? (
        <AuthNav className={styles.menuAuthNav} />
      ) : (
        <UserNav className={styles.menuUserNav} />
      )}
    </nav>
  );
};

export default BurgerMenu;
