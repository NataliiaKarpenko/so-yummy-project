import { createSlice } from '@reduxjs/toolkit';
import {
  signup,
  signin,
  logout,
  // refreshUser,
  // getCurrentUser,
  updateCurrentUser,
  // subscribeUser,
} from './authOperations';

const initialState = {
  user: { name: null, email: null, avatarURL: null },
  accessToken: null,
  refreshToken: null,
  isLoggedIn: false,
  isRefreshing: false,
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

      .addCase(updateCurrentUser.fulfilled, (state, { payload }) => {
        // state.user.name = payload.name;
        // state.user.avatarURL = payload.avatarURL;
        // state.isLoggedIn = true;
        state.user = payload;
      }),

  // REFRESH USER

  // .addCase(refreshUser.pending, state => {
  //   state.isRefreshing = true;
  // })
  // .addCase(refreshUser.fulfilled, (state, { payload }) => {
  //   state.user = payload.user;
  //   state.token = payload.token;
  //   state.isLoggedIn = true;
  //   state.isRefreshing = false;
  // })
  // .addCase(refreshUser.rejected, state => {
  //   state.isRefreshing = false;
  // })

  // GET CURRENT USER

  // .addCase(getCurrentUser.fullfilled, (state, { payload }) => {
  //   state.user = payload.user;
  //   state.isLoggedIn = true;
  // })

  // UPDATE CURRENT USER
});

export const userReducer = userSlice.reducer;
