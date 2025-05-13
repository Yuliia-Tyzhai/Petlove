import React from 'react';
import PetBlock from '../../components/PetBlock/PetBlock';
import AddPetForm from '../../components/AddPetForm/AddPetForm';
import styles from './AddPetPage.module.css';

const AddPetPage = () => {
  return (
    <div className={styles.addPetPage}>
      <PetBlock />
      <AddPetForm />
    </div>
  );
};

export default AddPetPage;
