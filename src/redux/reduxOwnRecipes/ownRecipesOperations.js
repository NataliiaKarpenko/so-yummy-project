import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://so-yumi.p.goit.global/api';

export const addOwnRecipe = createAsyncThunk(
  'ownRecipes/addOwnRecipe',
  async (ownRecipeData, thunkAPI) => {
    try {
      const response = await axios.post('/own-recipes', ownRecipeData);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getOwnRecipes = createAsyncThunk(
  'ownRecipes/getOwnRecipes',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(
        `/own-recipes?page=${page}&limit=4`,
        page
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getOwnRecipeById = createAsyncThunk(
  'recipes/getOwnRecipeById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/own-recipes/id/${id}`, id);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteOwnRecipeById = createAsyncThunk(
  'ownRecipes/deleteOwnRecipeById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/own-recipes/id/${id}`, id);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
