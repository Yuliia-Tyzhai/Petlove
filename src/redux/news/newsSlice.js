import { createSlice } from '@reduxjs/toolkit';

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: [],
    searchQuery: '',
    page: 1,
  },
  reducers: {
    setNews: (state, action) => {
      state.articles = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setNews, setSearchQuery, setPage } = newsSlice.actions;
export default newsSlice.reducer;
