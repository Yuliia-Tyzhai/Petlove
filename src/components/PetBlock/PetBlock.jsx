import React from 'react';
import styles from './PetBlock.module.css';

const PetBlock = ({
  mobileImg,
  tabletImg,
  desktopImg,
  altText = 'Pet Image',
}) => {
  return (
    <picture>
      <source srcSet={desktopImg} media="(min-width: 1280px)" />
      <source srcSet={tabletImg} media="(min-width: 768px)" />
      <img src={mobileImg} alt={altText} />
    </picture>
  );
};

export default PetBlock;
