import React from 'react';
import styles from './NewsItem.module.css';

const NewsItem = ({ news }) => {
  return (
    <div className={styles.newsItem}>
      <img src={news.imageUrl} alt={news.title} className={styles.image} />
      <div className={styles.details}>
        <h3>{news.title}</h3>
        <p>{news.description}</p>
        <span>{new Date(news.date).toLocaleDateString()}</span>
        <a href={news.link} target="_blank" rel="noopener noreferrer">
          Read more →
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
