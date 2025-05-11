import React, { useState, useEffect } from 'react';
import { getCurrentUser } from '../../services/api';
import EditUserBtn from '../EditUserBtn/EditUserBtn';
import PetsBlock from '../PetsBlock/PetsBlock';
import LogOutBtn from '../LogOutBtn/LogOutBtn';
import styles from './UserCard.module.css';

const UserCard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getCurrentUser();
        setUser(userData);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };
    fetchUser();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className={styles.userCard}>
      <div className={styles.userBlock}>
        <img
          src={user.avatar || '/default-avatar.png'}
          alt="User Avatar"
          className={styles.avatar}
        />
        <div>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone || 'Not provided'}</p>
        </div>
        <EditUserBtn />
      </div>
      <PetsBlock pets={user.pets} />
      <LogOutBtn />
    </div>
  );
};

export default UserCard;
