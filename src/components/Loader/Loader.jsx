import React, { useState, useEffect } from 'react';
import styles from './Loader.module.css';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let currentProgress = 0; //
    const interval = setInterval(() => {
      if (currentProgress < 100) {
        currentProgress += 1;
        setProgress(currentProgress);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsLoaded(true);
          if (onComplete) onComplete();
        }, 500);
      }
    }, 5);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`${styles.loaderContainer} ${isLoaded ? styles.hidden : ''}`}
    >
      <div className={styles.progressCircle}>
        <span>{progress}%</span>
      </div>
      {isLoaded && <h2>Petlove</h2>}
    </div>
  );
};

export default Loader;
