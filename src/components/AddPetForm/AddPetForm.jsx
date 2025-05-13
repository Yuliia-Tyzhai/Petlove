import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { addPetApi } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import styles from './AddPetForm.module.css';

const schema = yup.object().shape({
  title: yup.string().required('Title is required'),
  name: yup.string().required('Name is required'),
  imgUrl: yup
    .string()
    .matches(
      /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
      'Invalid image URL'
    )
    .required('Image URL is required'),
  species: yup.string().required('Species is required'),
  birthday: yup
    .string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format (YYYY-MM-DD)')
    .required('Birthday is required'),
  sex: yup.string().required('Sex is required'),
});

const AddPetForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async data => {
    try {
      await addPetApi(data, dispatch);
      navigate('/profile');
    } catch (error) {
      alert('Failed to add pet: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <input {...register('title')} placeholder="Title" />
      <p className={styles.error}>{errors.title?.message}</p>

      <input {...register('name')} placeholder="Name" />
      <p className={styles.error}>{errors.name?.message}</p>

      <input {...register('imgUrl')} placeholder="Image URL" />
      <p className={styles.error}>{errors.imgUrl?.message}</p>

      <input {...register('species')} placeholder="Species" />
      <p className={styles.error}>{errors.species?.message}</p>

      <input {...register('birthday')} placeholder="Birthday (YYYY-MM-DD)" />
      <p className={styles.error}>{errors.birthday?.message}</p>

      <label>
        <input type="radio" {...register('sex')} value="male" /> Male
      </label>
      <label>
        <input type="radio" {...register('sex')} value="female" /> Female
      </label>
      <p className={styles.error}>{errors.sex?.message}</p>

      <button type="submit">Submit</button>
      <button type="button" onClick={() => navigate('/profile')}>
        Back
      </button>
    </form>
  );
};

export default AddPetForm;
