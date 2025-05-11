import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../services/api';
import styles from './LogOutBtn.module.css';

const LogOutBtn = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <button onClick={handleLogout} className={styles.logoutBtn}>
      Log Out
    </button>
  );
};

export default LogOutBtn;
