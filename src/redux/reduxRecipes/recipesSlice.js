import { createSlice } from '@reduxjs/toolkit';
import {
  getCategoriesList,
  getFavoriteRecipes,
  getRecipeById,
  getRecipesByIngredientQuery,
  getRecipesByTitleQuery,
  getRecipesMainPage,
  getRecipesbyCategory,
  toggleFavourite,
} from './recipesOperations';

const initialState = {
  recipesMainPage: [],
  categoriesList: [],
  recipesbyCategory: {
    recipesList: [],
    total: 0,
  },
  recipeById: {
    id: '',
    title: '',
    description: '',
    favorite: '',
    time: '',
    ingredients: [],
    instructions: '',
    youtube: '',
    previewImg: '',
  },
  favoriteRecipes: {
    favoriteRecipesList: [],
    total: 0,
  },

  recipesByQuery: {
    recipesByQueryList: [],
    total: 0,
  },
};

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,

  extraReducers: builder =>
    builder

      // GET RECIPES MAIN PAGE

      .addCase(getRecipesMainPage.fulfilled, (state, { payload }) => {
        state.recipesMainPage = Object.entries(payload);
      })

      // GET CATEGORIES LIST

      .addCase(getCategoriesList.fulfilled, (state, { payload }) => {
        state.categoriesList = payload
          .map(item => ({
            id: item._id,
            title: item.title,
          }))
          .sort((a, b) => a.title.localeCompare(b.title));
      })

      // GET RECIPES BY CATEGORY

      .addCase(getRecipesbyCategory.fulfilled, (state, { payload }) => {
        state.recipesbyCategory = {
          recipesList: payload.recipes.map(item => ({
            id: item._id,
            title: item.title,
            preview: item.preview,
            favorite: item.favorite,
          })),
          total: payload.total,
        };
      })

      // GET RECIPE BY ID
      .addCase(getRecipeById.fulfilled, (state, { payload }) => {
        state.recipeById = {
          id: payload._id,
          title: payload.title,
          description: payload.description,
          favorite: payload.favorite,
          time: payload.time,
          instructions: payload.instructions,
          ingredients: payload.ingredients,

          youtube: payload.youtube,
          previewImg: payload.previewImg,
        };
      })

      // GET FAVORITE RECIPES

      .addCase(getFavoriteRecipes.fulfilled, (state, { payload }) => {
        state.favoriteRecipes = {
          favoriteRecipesList: payload.recipes.map(item => ({
            id: item._id,
            title: item.title,
            description: item.description,
            preview: item.preview,
            time: item.time,
            favorite: item.favorite,
          })),
          total: payload.total,
          page: payload.page,
        };
      })

      // TOGGLE FAVORITE RECIPE
      .addCase(toggleFavourite.fulfilled, (state, { payload }) => {
        const index = state.favoriteRecipes.favoriteRecipesList.findIndex(
          recipe => recipe.id === payload._id
        );
        state.favoriteRecipes.favoriteRecipesList[index] = payload;
      })

      // GET RECIPES BY TITLE QUERY
      .addCase(getRecipesByTitleQuery.fulfilled, (state, { payload }) => {
        state.recipesByQuery = {
          recipesByQueryList: payload.recipes.map(item => ({
            id: item._id,
            title: item.title,
            preview: item.preview,
            favorite: item.favorite,
          })),
          total: payload.total,
          page: payload.page,
        };
      })

      // GET RECIPES BY INGREDIENT QUERY
      .addCase(getRecipesByIngredientQuery.fulfilled, (state, { payload }) => {
        state.recipesByQuery = {
          recipesByQueryList: payload.recipes.map(item => ({
            id: item._id,
            title: item.title,
            preview: item.preview,
            favorite: item.favorite,
          })),
          total: payload.total,
          page: payload.page,
        };
      }),
});

export const recipesReducer = recipesSlice.reducer;
