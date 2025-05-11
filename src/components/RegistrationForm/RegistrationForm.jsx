import React from 'react';
import { Link } from 'react-router-dom';
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
      <input
        {...register('name')}
        placeholder="Name"
        className={styles.input}
      />
      {errors.name && <p className={styles.error}>{errors.name.message}</p>}

      <input
        {...register('email')}
        placeholder="Email"
        className={styles.input}
      />
      {errors.email && <p className={styles.error}>{errors.email.message}</p>}

      <input
        {...register('password')}
        type="password"
        placeholder="Password"
        className={styles.input}
      />
      {errors.password && (
        <p className={styles.error}>{errors.password.message}</p>
      )}

      <input
        {...register('password')}
        type="password"
        placeholder="Confirm password"
        className={`${styles.input} ${styles.confirm}`}
      />

      <button type="submit" className={styles.submitBtn}>
        Registration
      </button>

      <p className={styles.loginLink}>
        Already have an account?{' '}
        <span className={styles.login}>
          <Link to="/login">Log in</Link>
        </span>
      </p>
    </form>
  );
};

export default RegistrationForm;
