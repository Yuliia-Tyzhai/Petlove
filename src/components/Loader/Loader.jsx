import React, { useState, useEffect } from 'react';
import styles from './Loader.module.css';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev < 100 ? prev + 1 : 100));
      if (progress === 100) {
        setTimeout(() => {
          setIsLoaded(true);
          if (onComplete) onComplete();
        }, 500);
      }
    }, 5);
    return () => clearInterval(interval);
  }, [progress, onComplete]);

  return (
    <div
      className={`${styles.loaderContainer} ${isLoaded ? styles.hidden : ''}`}
    >
      <div className={styles.progressCircle}>
        <span>{progress}%</span>
      </div>
      {isLoaded && (
        <img src="/src/assets/logo.png" alt="Logo" className={styles.logo} />
      )}
    </div>
  );
};

export default Loader;
