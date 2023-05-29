import { createSlice } from '@reduxjs/toolkit';
import {
  signup,
  signin,
  logout,
  refreshUser,
  getCurrentUser,
  updateCurrentUser,
  subscribeUser,
} from './authOperations';

const initialState = {
  user: { name: null, email: null, avatarURL: null },
  accessToken: null,
  refreshToken: null,
  isLoggedIn: false,
  isRefreshing: true,
  SubscribtionList: [],
};

export const userSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder =>
    builder

      // SIGN UP

      .addCase(signup.fulfilled, (state, { payload }) => {
        state.user = payload.user;
      })

      // LOG IN

      .addCase(signin.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.isLoggedIn = true;
      })

      // LOG OUT

      .addCase(logout.fulfilled, state => {
        state.user = {
          name: null,
          email: null,
          avatarURL: null,
        };
        state.accessToken = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
      })

      // UPDATE CURRENT USER

      .addCase(updateCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
      })

      // GET CURRENT USER

      .addCase(getCurrentUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(getCurrentUser.rejected, state => {
        state.isRefreshing = false;
      })

      // REFRESH USER

      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })

      // SUBSCRIBE USER

      .addCase(subscribeUser.fulfilled, (state, { payload }) => {
        state.SubscribtionList = payload;
      }),
});

export const userReducer = userSlice.reducer;
