import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { updateUser } from '../../services/api';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/authSlice';
import { toast } from 'react-toastify';
import styles from './ModalEditUser.module.css';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      'Invalid email format'
    )
    .required('Email is required'),
  avatar: yup
    .string()
    .matches(
      /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
      'Invalid image URL'
    ),
  phone: yup.string().matches(/^\+38\d{10}$/, 'Invalid phone format'),
});

const ModalEditUser = ({ closeModal }) => {
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
      const updatedUser = await updateUser(data);
      dispatch(setUser(updatedUser));
      toast.success('Profile updated successfully!');
      closeModal();
    } catch (error) {
      const errorMsg = error.response?.data?.message || 'Update failed';
      toast.error(`Error: ${errorMsg}`);
    }
  };

  return (
    <div className={styles.modal}>
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
          {...register('avatar')}
          placeholder="Avatar URL"
          className={styles.input}
        />
        {errors.avatar && (
          <p className={styles.error}>{errors.avatar.message}</p>
        )}

        <input
          {...register('phone')}
          placeholder="Phone (+38XXXXXXXXXX)"
          className={styles.input}
        />
        {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}

        <button type="submit" className={styles.submitBtn}>
          Save Changes
        </button>
        <button type="button" onClick={closeModal} className={styles.cancelBtn}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default ModalEditUser;
