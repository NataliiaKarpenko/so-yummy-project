import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addToShoppingListSuccess,
  removeFromShoppingListSuccess,
} from 'shared/Utils/notifications';

axios.defaults.baseURL = 'https://so-yumi.p.goit.global/api';

export const addToShoppingList = createAsyncThunk(
  'shoppingList/addToShoppingList',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('/users/shopping-list', data);
      addToShoppingListSuccess();

      return response.data.shoppingList;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getShoppingList = createAsyncThunk(
  'shoppingList/getShoppingList',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/users/shopping-list');

      return response.data.shoppingList;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeFromShoppingList = createAsyncThunk(
  'shoppingList/removeFromShoppingList',
  async (data, thunkAPI) => {
    try {
      const response = await axios.patch('/users/shopping-list', data);
      removeFromShoppingListSuccess();

      return response.data.shoppingList;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
