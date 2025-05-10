import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import AuthNav from '../AuthNav/AuthNav';
import UserNav from '../UserNav/UserNav';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { useSelector } from 'react-redux';
import styles from './Header.module.css';

const Header = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <header className={styles.header}>
      <Logo />

      <div className={styles.desktopNav}>
        <Nav />
        {!isAuthenticated ? <AuthNav /> : <UserNav />}
      </div>

      <div className={styles.tabletNav}>
        {!isAuthenticated ? <AuthNav /> : <UserNav />}
        <button className={styles.burger} onClick={toggleMenu}>
          <svg className={styles.icon}>
            <use href="/sprite.svg#burger-icon" />
          </svg>
        </button>
      </div>

      <BurgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;
