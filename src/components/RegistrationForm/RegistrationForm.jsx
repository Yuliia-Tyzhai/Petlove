import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './RegistrationForm.module.css';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      'Invalid email format'
    )
    .required('Email is required'),
  password: yup
    .string()
    .min(7, 'Password must be at least 7 characters')
    .required('Password is required'),
});

const RegistrationForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <input {...register('name')} placeholder="Name" />
      {errors.name && <p className={styles.error}>{errors.name.message}</p>}

      <input {...register('email')} placeholder="Email" />
      {errors.email && <p className={styles.error}>{errors.email.message}</p>}

      <input {...register('password')} type="password" placeholder="Password" />
      {errors.password && (
        <p className={styles.error}>{errors.password.message}</p>
      )}

      <button type="submit" className={styles.submitBtn}>
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
