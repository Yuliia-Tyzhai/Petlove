import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import petsReducer from './pets/petsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    pets: petsReducer,
  },
});

export default store;
