import React from 'react';
import styles from './PetsItem.module.css';

const PetsItem = ({ pet, onDelete }) => {
  return (
    <div className={styles.petItem}>
      <img
        src={pet.image || '/default-pet.png'}
        alt={pet.name}
        className={styles.petImage}
      />
      <div className={styles.petInfo}>
        <h3>{pet.name}</h3>
        <p>Type: {pet.type}</p>
        <p>Gender: {pet.gender}</p>
        <p>Birthdate: {pet.birthdate}</p>
      </div>
      <button onClick={() => onDelete(pet.id)} className={styles.deleteBtn}>
        🗑
      </button>
    </div>
  );
};

export default PetsItem;
