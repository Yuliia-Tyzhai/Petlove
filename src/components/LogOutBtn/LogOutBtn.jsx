import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../services/api';
import ModalApproveAction from '../ModalApproveAction/ModalApproveAction';
import styles from './LogOutBtn.module.css';

const LogOutBtn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await logoutUser(dispatch);
      localStorage.removeItem('token');
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className={styles.logoutContainer}>
      <button onClick={() => setIsModalOpen(true)} className={styles.logoutBtn}>
        Log Out
      </button>

      {isModalOpen && (
        <ModalApproveAction
          message="Are you sure you want to log out?"
          onCancel={() => setIsModalOpen(false)}
          onApprove={handleLogout}
        />
      )}
    </div>
  );
};

export default LogOutBtn;
