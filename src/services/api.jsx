import axios from 'axios';
import { setAuth, logout } from '../redux/authSlice';

const API = axios.create({
  baseURL: 'https://petlove.b.goit.study/api',
  headers: { 'Content-Type': 'application/json' },
});

export const registerUser = async userData => {
  try {
    return await API.post('/users/signup', userData);
  } catch (error) {
    throw error.response?.data?.message || 'Registration failed';
  }
};

export const loginUser = async (userData, dispatch) => {
  try {
    const response = await API.post('/users/signin', userData);
    localStorage.setItem('token', response.data.token);
    dispatch(setAuth({ user: response.data.user, isAuthenticated: true }));
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Login failed';
  }
};

export const getCurrentUser = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No token found');

    const response = await API.get('/users/current', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to fetch user data';
  }
};

export const updateUser = async (userData, dispatch) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('No token found');

    const response = await API.patch('/users/current/edit', userData, {
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch(setAuth({ user: response.data, isAuthenticated: true }));
  } catch (error) {
    throw error.response?.data?.message || 'Update failed';
  }
};

export const logoutUser = async dispatch => {
  try {
    const token = localStorage.getItem('token');
    if (!token) return;

    await API.post(
      '/users/signout',
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
        responseType: 'text',
      }
    );

    localStorage.removeItem('token');
    dispatch(logout());
  } catch (error) {
    console.error('Logout error:', error);
    throw error.response?.data?.message || 'Logout failed';
  }
};

export const addPet = async petData => {
  try {
    const token = localStorage.getItem('token');
    const response = await API.post('/users/current/pets/add', petData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to add pet';
  }
};

export const deletePet = async petId => {
  try {
    const token = localStorage.getItem('token');
    await API.delete(`/users/current/pets/remove/${petId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    throw error.response?.data?.message || 'Failed to delete pet';
  }
};
