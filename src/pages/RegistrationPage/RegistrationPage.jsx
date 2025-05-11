import React from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import PetBlock from '../../components/PetBlock/PetBlock';
import Title from '../../components/Title/Title';
import styles from './RegistrationPage.module.css';

const RegistrationPage = () => {
  return (
    <div className={styles.registrationPage}>
      <PetBlock
        mobileImg="/src/assets/images/mob/register-mob-img-min.png"
        mobileImg2x="/src/assets/images/mob/register-mob-img@2x-min.png"
        tabletImg="/src/assets/images/tab/register-tab-img-min.png"
        tabletImg2x="/src/assets/images/tab/register-tab-img@2x-min.png"
        desktopImg="/src/assets/images/desk/register-desk-img-min.png"
        desktopImg2x="/src/assets/images/desk/register-desk-img@2x-min.png"
        altText="Registration Pet Image"
        className={styles.registrationPetBlock}
      />
      <div className={styles.formContainer}>
        <Title
          text="Registration"
          paragraph="Thank you for your interest in our platform."
        />

        <RegistrationForm />
      </div>
    </div>
  );
};

export default RegistrationPage;
