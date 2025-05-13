import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import petsReducer from './pets/petsSlice';
import noticesReducer from './notices/noticesSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    pets: petsReducer,
    notices: noticesReducer,
  },
});

export default store;
