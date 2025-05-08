import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <Link to="/home" className={styles.logo}>
      <span className={styles.text}>pet</span>
      <svg className={styles.heart}>
        <use href="/sprite.svg#icon-heart-circle" />
      </svg>
      <span className={styles.text}>love</span>
    </Link>
  );
};

export default Logo;
