import React from 'react';
import { useSelector } from 'react-redux';
import UserBar from '../UserBar/UserBar';
import LogOutBtn from '../LogOutBtn/LogOutBtn';
import styles from './UserNav.module.css';

const UserNav = () => {
  const user = useSelector(state => state.auth.user);

  if (!user) return null;

  return (
    <div className={styles.userNavDesktop}>
      <UserBar user={user} />
      <LogOutBtn />
    </div>
  );
};

export default UserNav;
