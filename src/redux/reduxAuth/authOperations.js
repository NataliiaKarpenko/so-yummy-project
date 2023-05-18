import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { store } from '../store';

axios.defaults.baseURL = 'https://so-yumi.p.goit.global/api';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

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
      console.log(response.data.accessToken);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const response = await axios.post('users/logout');
    clearAuthHeader();
    console.log(response);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.user.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch the user');
    }
    try {
      setAuthHeader(persistedToken);
      const response = await axios('/users/refresh');
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'user/getCurrentUser',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.get('users/current', userData);
      return response;
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
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const updateUser = createAsyncThunk(
//   'user/updateUser',
//   async (formData, thunkAPI) => {
//     try {
//       const response = await UserAPI.update(formData);

//       return response;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const subscribeUser = createAsyncThunk(
  'user/subscribe',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post('users/subscribe', userData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
