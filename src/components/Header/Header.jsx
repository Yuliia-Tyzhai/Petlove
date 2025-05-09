import React from 'react';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import AuthNav from '../AuthNav/AuthNav';
import UserNav from '../UserNav/UserNav';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { useSelector } from 'react-redux';
import styles from './Header.module.css';

const Header = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <header className={styles.header}>
      <Logo />
      <Nav />
      {isAuthenticated ? <UserNav /> : <AuthNav />}
      <BurgerMenu />
    </header>
  );
};

export default Header;
