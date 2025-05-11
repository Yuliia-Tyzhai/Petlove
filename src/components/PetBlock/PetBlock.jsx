import React from 'react';
import styles from './PetBlock.module.css';

const PetBlock = ({
  mobileImg,
  tabletImg,
  desktopImg,
  mobileImg2x,
  tabletImg2x,
  desktopImg2x,
  altText = 'Pet Image',
  className = styles.petBlock,
}) => {
  return (
    <picture className={className}>
      <source
        srcSet={`${desktopImg}, ${desktopImg2x} 2x`}
        media="(min-width: 1280px)"
      />
      <source
        srcSet={`${tabletImg}, ${tabletImg2x} 2x`}
        media="(min-width: 768px)"
      />
      <img src={mobileImg} srcSet={`${mobileImg2x} 2x`} alt={altText} />
    </picture>
  );
};

export default PetBlock;
