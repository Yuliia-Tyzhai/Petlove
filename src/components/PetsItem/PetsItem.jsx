import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletePetApi } from '../../services/api';
import styles from './PetsItem.module.css';

const PetsItem = ({ pet }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await deletePetApi(pet.id, dispatch);
    } catch (error) {
      console.error('Failed to delete pet:', error);
    }
  };

  return (
    <div className={`${styles.petCard} ${isDeleting ? styles.fadeOut : ''}`}>
      <img src={pet.image || 'default-image.jpg'} alt={pet.name} />
      <h3>{pet.name}</h3>
      <p>{pet.title || 'No title available'}</p>
      <p>Type: {pet.type}</p>
      <p>Birthday: {pet.birthday}</p>
      <p>Sex: {pet.sex}</p>
      <button onClick={handleDelete} className={styles.deleteBtn}>
        Delete
      </button>
    </div>
  );
};

export default PetsItem;
