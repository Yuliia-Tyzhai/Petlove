import axios from 'axios';
import { setAuth, logout } from '../redux/auth/authSlice';
import { setPets, addPet, updatePet, deletePet } from '../redux/pets/petsSlice';
import {
  setNotices,
  addFavoriteNotice,
  removeFavoriteNotice,
} from '../redux/notices/noticesSlice';
import { setNews } from '../redux/news/newsSlice';

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

export const addPetApi = async (petData, dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const response = await API.post('/users/current/pets/add', petData, {
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch(addPet(response.data));
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to add pet';
  }
};

export const updatePetApi = async (petId, updatedData, dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const response = await API.patch(
      `/users/current/pets/${petId}`,
      updatedData,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    dispatch(updatePet(response.data));
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Failed to update pet';
  }
};

export const deletePetApi = async (petId, dispatch) => {
  try {
    const token = localStorage.getItem('token');
    await API.delete(`/users/current/pets/remove/${petId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch(deletePet(petId));
  } catch (error) {
    throw error.response?.data?.message || 'Failed to delete pet';
  }
};

export const fetchNotices = async dispatch => {
  try {
    const response = await API.get('/notices');
    dispatch(setNotices(response.data));
  } catch (error) {
    throw error.response?.data?.message || 'Failed to fetch notices';
  }
};

export const addNoticeToFavorites = async (notice, dispatch) => {
  try {
    await API.post('/notices/favorites', notice);
    dispatch(addFavoriteNotice(notice));
  } catch (error) {
    throw error.response?.data?.message || 'Failed to add favorite notice';
  }
};

export const removeNoticeFromFavorites = async (noticeId, dispatch) => {
  try {
    await API.delete(`/notices/favorites/remove/${noticeId}`);
    dispatch(removeFavoriteNotice(noticeId));
  } catch (error) {
    throw error.response?.data?.message || 'Failed to remove favorite notice';
  }
};

export const fetchNews = async (searchQuery, page, dispatch) => {
  try {
    const response = await API.get('/news', {
      params: { query: searchQuery, page, limit: 10 },
    });

    dispatch(setNews(response.data.results));
  } catch (error) {
    throw error.response?.data?.message || 'Failed to fetch news';
  }
};
