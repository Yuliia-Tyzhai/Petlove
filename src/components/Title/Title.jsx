import React from 'react';
import styles from './Title.module.css';

const Title = ({ text, paragraph }) => {
  return (
    <div>
      <h1 className={styles.title}>{text}</h1>
      <p className={styles.paragraph}>{paragraph}</p>
    </div>
  );
};

export default Title;
