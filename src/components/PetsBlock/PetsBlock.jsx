import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPets } from '../../redux/pets/petsSelectors';
import AddPet from '../AddPet/AddPet';
import PetsList from '../PetsList/PetsList';
import styles from './PetsBlock.module.css';

const PetsBlock = () => {
  const dispatch = useDispatch();
  const pets = useSelector(selectPets);

  return (
    <div className={styles.petsBlock}>
      <h2>My Pets</h2>
      <AddPet dispatch={dispatch} />
      <PetsList pets={pets} />
    </div>
  );
};

export default PetsBlock;
