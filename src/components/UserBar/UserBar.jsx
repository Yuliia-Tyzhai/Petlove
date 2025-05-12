import React from 'react';
import styles from './UserBar.module.css';

const UserBar = ({ user }) => {
  if (!user) return null;

  return (
    <div className={styles.userBar}>
      <img
        src={user.avatar || '/default-avatar.png'}
        alt="User Avatar"
        className={styles.avatar}
      />
      <span>{user.name}</span>
    </div>
  );
};

export default UserBar;
