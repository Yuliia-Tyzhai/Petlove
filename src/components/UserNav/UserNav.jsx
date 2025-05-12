import React from 'react';
import UserBar from '../UserBar/UserBar';
import LogOutBtn from '../LogOutBtn/LogOutBtn';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import styles from './UserNav.module.css';
import { useSelector } from 'react-redux'; // ✅ Імпортуємо useSelector

const UserNav = () => {
  const user = useSelector(state => state.auth.user); // ✅ Отримуємо дані користувача з Redux

  if (!user) return null;

  return (
    <>
      <div className={styles.userNavDesktop}>
        <UserBar user={user} />
        <LogOutBtn />
      </div>

      <BurgerMenu>
        <UserBar user={user} />
        <LogOutBtn />
      </BurgerMenu>
    </>
  );
};

export default UserNav;
