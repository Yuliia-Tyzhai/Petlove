import { createSlice } from '@reduxjs/toolkit';

const noticesSlice = createSlice({
  name: 'notices',
  initialState: {
    favorites: [],
    viewed: [],
  },
  reducers: {
    setNotices: (state, action) => {
      state.favorites = action.payload.favorites;
      state.viewed = action.payload.viewed;
    },
    addFavoriteNotice: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavoriteNotice: (state, action) => {
      state.favorites = state.favorites.filter(
        notice => notice.id !== action.payload
      );
    },
  },
});

export const { setNotices, addFavoriteNotice, removeFavoriteNotice } =
  noticesSlice.actions;
export default noticesSlice.reducer;
