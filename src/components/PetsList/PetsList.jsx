import React from 'react';
import PetsItem from '../PetsItem/PetsItem';
import styles from './PetsList.module.css';

const PetsList = ({ pets }) => {
  if (!pets || pets.length === 0) return <p>No pets yet.</p>;

  return (
    <div className={styles.petsList}>
      {pets.map(pet => (
        <PetsItem key={pet.id} pet={pet} />
      ))}
    </div>
  );
};

export default PetsList;
