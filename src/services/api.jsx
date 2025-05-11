import axios from 'axios';

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

export const loginUser = async userData => {
  try {
    const response = await API.post('/users/signin', userData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Login failed';
  }
};

export const getCurrentUser = async token => {
  try {
    const response = await API.get('/users/current', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to fetch user data';
  }
};

export const logoutUser = async token => {
  try {
    await API.post('/users/signout', null, {
      headers: { Authorization: `Bearer ${token}` },
    });
    localStorage.removeItem('token');
  } catch (error) {
    throw error.response?.data?.message || 'Logout failed';
  }
};
