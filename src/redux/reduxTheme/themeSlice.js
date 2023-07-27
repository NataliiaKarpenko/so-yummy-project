// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   type: 'light',
// };

// export const themeSlice = createSlice({
//   name: 'theme',
//   initialState,
//   reducers: {
//     toggleTheme: state => {
//       state.type = state.type === 'light' ? 'dark' : 'light';
//     },
//   },
// });

// export const themeReducer = themeSlice.reducer;
// export const { toggleTheme } = themeSlice.actions;

import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
  value: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.value = state.value === 'light' ? 'dark' : 'light';
    },
  },
});

const persistConfig = {
  key: 'theme',
  storage,
  whitelist: ['value'],
};

export const themeReducer = persistReducer(persistConfig, themeSlice.reducer);

export const { toggleTheme } = themeSlice.actions;
