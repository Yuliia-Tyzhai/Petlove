import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './BurgerMenu.module.css';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className={styles.menuContainer}>
      <button className={styles.burger} onClick={toggleMenu}>
        <svg className={styles.icon}>
          <use href="/sprite.svg#burger-icon" />
        </svg>
      </button>

      <nav className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        <NavLink to="/news">News</NavLink>
        <NavLink to="/notices">Find pet</NavLink>
        <NavLink to="/friends">Our Friends</NavLink>
      </nav>
    </div>
  );
};

export default BurgerMenu;
