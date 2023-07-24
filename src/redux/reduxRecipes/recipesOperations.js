import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://so-yumi.p.goit.global/api';

export const getRecipesMainPage = createAsyncThunk(
  'recipes/getRecipesMainPage',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/recipes/main-page');

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCategoriesList = createAsyncThunk(
  'recipes/getCategoriesList',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/recipes/category/list');

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getRecipesbyCategory = createAsyncThunk(
  'recipes/getRecipesbyCategory',
  async ({ categoryName, page }, thunkAPI) => {
    try {
      const response = await axios.get(
        `/recipes/category/${categoryName}?page=${page}&limit=8&sort=popular`
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getRecipeById = createAsyncThunk(
  'recipes/getRecipeById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/recipes/id/${id}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const toggleFavourite = createAsyncThunk(
  'recipes/togglefavourite',
  async (id, thunkAPI) => {
    try {
      const response = await axios.patch(`/recipes/favorite/${id}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getFavoriteRecipes = createAsyncThunk(
  'recipes/getFavoriteRecipes',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(
        `/recipes/favorite?page=${page}&limit=4&sort=popular`,
        page
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getRecipesByTitleQuery = createAsyncThunk(
  'recipes/getRecipesByTitleQuery',
  async ({ query, page, limit }, thunkAPI) => {
    try {
      const response = await axios.get(
        `/recipes/title/${query}?page=${page}&limit=${limit}&sort=popular`
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getRecipesByIngredientQuery = createAsyncThunk(
  'recipes/getRecipesByIngredientQuery',
  async ({ query, page, limit }, thunkAPI) => {
    try {
      const response = await axios.get(
        `/recipes/ingredient/${query}?page=${page}&limit=${limit}&sort=popular`
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getIngredientsList = createAsyncThunk(
  'recipes/getIngredientsList',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/recipes/ingredients');

      return response.data.ingredients;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getPopularRecipes = createAsyncThunk(
  'recipes/getPopularRecipes',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/recipes?sort=popular`');

      return response.data.recipes;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
