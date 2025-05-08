import React from 'react';
import { Link } from 'react-router-dom';
import styles from './UserNav.module.css';

const UserNav = () => {
  return (
    <nav className={styles.userNav}>
      <Link to="/profile">Profile</Link>
      <button className={styles.logoutBtn}>Log Out</button>
    </nav>
  );
};

export default UserNav;
