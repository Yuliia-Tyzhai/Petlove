import React, { useState } from 'react';
import ModalEditUser from '../ModalEditUser/ModalEditUser';
import styles from './EditUserBtn.module.css';

const EditUserBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className={styles.editBtn}>
        <svg className={styles.icon}>
          <use href="/sprite.svg#icon-edit"></use>{' '}
        </svg>
      </button>
      {isOpen && <ModalEditUser closeModal={() => setIsOpen(false)} />}
    </>
  );
};

export default EditUserBtn;
