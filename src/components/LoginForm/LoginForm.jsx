import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { loginUser } from '../../services/api';
import { setAuth } from '../../redux/auth/authSlice';
import styles from './LoginForm.module.css';

const schema = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      'Invalid email format'
    ),
  password: yup
    .string()
    .required('Password is required')
    .min(7, 'Password must be at least 7 characters'),
});

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async data => {
    try {
      const response = await loginUser(data, dispatch);
      dispatch(setAuth({ user: response.user, isAuthenticated: true }));
      toast.success('Login successful!');
      navigate('/profile');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('email')}
        type="email"
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

      <button type="submit" className={styles.button}>
        Log in
      </button>
    </form>
  );
};

export default LoginForm;
