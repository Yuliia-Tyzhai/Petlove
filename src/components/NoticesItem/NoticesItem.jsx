import React from 'react';
import styles from './NoticesItem.module.css';

const NoticesItem = ({ notice, onDelete }) => {
  return (
    <div className={styles.noticeCard}>
      <img src={notice.imgUrl} alt={notice.title} className={styles.image} />
      <div className={styles.details}>
        <h3>{notice.title}</h3>
        <p>{notice.description}</p>
      </div>
      {onDelete && (
        <button
          onClick={() => onDelete(notice.id)}
          className={styles.deleteBtn}
        >
          🗑
        </button>
      )}
    </div>
  );
};

export default NoticesItem;
