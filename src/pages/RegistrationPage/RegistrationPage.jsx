import React from 'react';
import { Link } from 'react-router-dom';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import PetBlock from '../../components/PetBlock/PetBlock';
import Title from '../../components/Title/Title';
import styles from './RegistrationPage.module.css';

const RegistrationPage = () => {
  return (
    <div className={styles.registrationPage}>
      <PetBlock />
      <Title text="Registration" />

      <RegistrationForm />
      <p className={styles.loginLink}>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
};

export default RegistrationPage;
