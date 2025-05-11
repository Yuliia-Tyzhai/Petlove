import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AddPet.module.css';

const AddPet = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate('/add-pet')} className={styles.addPetBtn}>
      Add Pet
    </button>
  );
};

export default AddPet;
