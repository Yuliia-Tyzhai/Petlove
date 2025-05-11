import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import Title from '../../components/Title/Title';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <Title text="Login" />
      <LoginForm />
      <p className={styles.registerLink}>
        Don't have an account? <Link to="/register">Sign up</Link>
      </p>
    </div>
  );
};

export default LoginPage;
