import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeNoticeFromFavorites } from '../../services/api';
import NoticesItem from '../NoticesItem/NoticesItem';
import Title from '../Title/Title';
import styles from './MyNotices.module.css';

const MyNotices = () => {
  const [activeTab, setActiveTab] = useState('favorites');
  const dispatch = useDispatch();

  const favorites = useSelector(state => state.notices.favorites);
  const viewed = useSelector(state => state.notices.viewed);

  const handleTabChange = tab => {
    setActiveTab(tab);
  };

  const handleDelete = async noticeId => {
    try {
      await removeNoticeFromFavorites(noticeId, dispatch);
    } catch (error) {
      console.error('Failed to delete notice:', error);
    }
  };

  return (
    <div className={styles.noticesContainer}>
      <Title />
      <div className={styles.tabs}>
        <button
          className={activeTab === 'favorites' ? styles.activeTab : ''}
          onClick={() => handleTabChange('favorites')}
        >
          My favorites pets
        </button>
        <button
          className={activeTab === 'viewed' ? styles.activeTab : ''}
          onClick={() => handleTabChange('viewed')}
        >
          Viewed
        </button>
      </div>

      <div className={styles.noticesList}>
        {activeTab === 'favorites'
          ? favorites.map(notice => (
              <NoticesItem key={notice.id} notice={notice}>
                <button
                  className={styles.deleteBtn}
                  onClick={() => handleDelete(notice.id)}
                >
                  🗑
                </button>
              </NoticesItem>
            ))
          : viewed.map(notice => (
              <NoticesItem key={notice.id} notice={notice} />
            ))}
      </div>
    </div>
  );
};

export default MyNotices;
