import React from 'react';
import NewsItem from '../NewsItem/NewsItem';
import styles from './NewsList.module.css';

const NewsList = ({ news }) => {
  return (
    <div className={styles.newsList}>
      {news.length > 0 ? (
        news.map(item => <NewsItem key={item.id} news={item} />)
      ) : (
        <p>No news.</p>
      )}
    </div>
  );
};

export default NewsList;
