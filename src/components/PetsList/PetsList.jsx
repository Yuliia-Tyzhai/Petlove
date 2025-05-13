import React from 'react';
import { useSelector } from 'react-redux';
import { selectPets } from '../../redux/pets/petsSelectors';
import PetsItem from '../PetsItem/PetsItem';
import styles from './PetsList.module.css';

const PetsList = () => {
  const pets = useSelector(selectPets);

  return (
    <div className={styles.petsList}>
      {pets.length > 0 ? (
        pets.map(pet => <PetsItem key={pet.id} pet={pet} />)
      ) : (
        <p>No pets found</p>
      )}
    </div>
  );
};

export default PetsList;
