import React from 'react';
import styles from './MyNotices.module.css';

const MyNotices = () => {
  return (
    <div className={styles.notices}>
      <h2>My Notices</h2>
      <p>List of saved and viewed notices will appear here.</p>
    </div>
  );
};

export default MyNotices;
