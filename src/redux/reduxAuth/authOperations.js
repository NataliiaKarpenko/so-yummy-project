import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { store } from '../store';
import {
  notificationError,
  loginSuccess,
  loginError,
  updateSuccess,
  subscribeSuccess,
  subscribeError,
  logoutSuccess,
} from 'shared/Utils/notifications';

axios.defaults.baseURL = 'https://so-yumi.p.goit.global/api';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      store.dispatch(refreshUser());
    }

    return Promise.reject(error);
  }
);

export const signup = createAsyncThunk(
  'auth/signup',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', userData);
      if (response.statusText === 'OK') {
        const userInputData = {
          email: userData.email,
          password: userData.password,
        };
        store.dispatch(signin(userInputData));
      }
      return response.data;
    } catch (error) {
      notificationError();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signin = createAsyncThunk(
  'auth/signin',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post('users/login', userData);
      setAuthHeader(response.data.accessToken);
      loginSuccess();
      return response.data;
    } catch (error) {
      loginError(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('users/logout');
    clearAuthHeader();
    logoutSuccess();
  } catch (error) {
    notificationError();
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.accessToken;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    setAuthHeader(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.refreshToken;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    try {
      const { data } = await axios.post('/users/refresh', {
        refreshToken: persistedToken,
      });

      setAuthHeader(data.accessToken);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateCurrentUser = createAsyncThunk(
  'auth/updateCurrentUser',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.put('/users/update', userData);
      updateSuccess();
      return response.data;
    } catch (error) {
      notificationError();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const subscribeUser = createAsyncThunk(
  'auth/subscribe',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post('users/subscribe', userData);
      subscribeSuccess();
      return response.data.subscribeList;
    } catch (error) {
      subscribeError(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
