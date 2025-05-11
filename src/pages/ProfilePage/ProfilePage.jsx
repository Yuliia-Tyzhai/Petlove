import React from 'react';
import UserCard from '../../components/UserCard/UserCard';
import MyNotices from '../../components/MyNotices/MyNotices';
import styles from './ProfilePage.module.css';

const ProfilePage = () => {
  return (
    <div className={styles.profilePage}>
      <UserCard />
      <MyNotices />
    </div>
  );
};

export default ProfilePage;
