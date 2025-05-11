import React from 'react';
import AddPet from '../AddPet/AddPet';
import PetsList from '../PetsList/PetsList';
import styles from './PetsBlock.module.css';

const PetsBlock = ({ pets }) => {
  return (
    <div className={styles.petsBlock}>
      <h2>My Pets</h2>
      <AddPet />
      <PetsList pets={pets} />
    </div>
  );
};

export default PetsBlock;
