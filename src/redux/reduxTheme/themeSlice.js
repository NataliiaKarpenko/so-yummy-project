import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  type: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.type = state.type === 'light' ? 'dark' : 'light';
    },
  },
});

export const themeReducer = themeSlice.reducer;
export const { toggleTheme } = themeSlice.actions;
