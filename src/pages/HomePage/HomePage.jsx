import React from 'react';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.HomePageContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.mainTitle}>
          Take good <span className={styles.titlePart}>care</span> of your small
          pets
        </h1>
        <p className={styles.mainText}>
          Choosing a pet for your home is a choice that is meant to enrich your
          life with immeasurable joy and tenderness.
        </p>
      </div>

      <picture>
        <source
          srcSet="/src/assets/images/mob/hero-mob-img-min.png, 
                  /src/assets/images/mob/hero-mob-img@2x-min.png 2x"
          media="(max-width: 767px)"
        />
        <source
          srcSet="/src/assets/images/tab/hero-tab-img-min.png, 
                  /src/assets/images/tab/hero-tab-img@2x-min.png 2x"
          media="(min-width: 768px)"
        />
        <source
          srcSet="/src/assets/images/desk/hero-desk-img-min.png, 
                  /src/assets/images/desk/hero-desk-img@2x-min.png 2x"
          media="(min-width: 1280px)"
        />
        <img
          className={styles.mainImage}
          src="/src/assets/images/default/hero-default-img-min.png"
          srcSet="/src/assets/images/default/hero-default-img@2x-min.png 2x"
          alt="Cute small pet"
        />
      </picture>
    </div>
  );
};

export default HomePage;
