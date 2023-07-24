import { createSlice } from '@reduxjs/toolkit';
import {
  getCategoriesList,
  getFavoriteRecipes,
  getIngredientsList,
  getPopularRecipes,
  getRecipeById,
  getRecipesByIngredientQuery,
  getRecipesByTitleQuery,
  getRecipesMainPage,
  toggleFavourite,
} from './recipesOperations';
import { getOwnRecipeById } from 'redux/reduxOwnRecipes/ownRecipesOperations';

const initialState = {
  isLoading: false,
  error: null,

  recipesMainPage: [],
  categoriesList: [],
  popularRecipesList: [],

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
    page: 0,
  },

  recipesByQuery: {
    recipesByQueryList: [],
    total: 0,
  },

  ingredientsList: [],
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,

  extraReducers: builder =>
    builder

      // // GET RECIPES MAIN PAGE

      .addCase(getRecipesMainPage.pending, handlePending)
      .addCase(getRecipesMainPage.fulfilled, (state, { payload }) => {
        state.recipesMainPage = Object.entries(payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getRecipesMainPage.rejected, handleRejected)

      // GET CATEGORIES LIST

      .addCase(getCategoriesList.fulfilled, (state, { payload }) => {
        state.categoriesList = payload
          .map(item => ({
            id: item._id,
            title: item.title,
          }))
          .sort((a, b) => a.title.localeCompare(b.title));
      })

      // GET RECIPE BY ID

      .addCase(getRecipeById.pending, handlePending)
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
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getRecipeById.rejected, handleRejected)

      // GET OWN RECIPE BY ID

      .addCase(getOwnRecipeById.pending, handlePending)
      .addCase(getOwnRecipeById.fulfilled, (state, { payload }) => {
        state.recipeById = {
          id: payload._id,
          title: payload.title,
          description: payload.description,
          time: payload.time,
          instructions: payload.instructions,
          ingredients: payload.ingredients,
          previewImg: payload.preview,
        };
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getOwnRecipeById.rejected, handleRejected)

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
        state.isLoading = false;
        state.error = null;
      })

      // GET RECIPES BY TITLE QUERY

      .addCase(getRecipesByTitleQuery.pending, handlePending)
      .addCase(getRecipesByTitleQuery.fulfilled, (state, { payload }) => {
        state.recipesByQuery = {
          recipesByQueryList: payload.recipes.map(item => ({
            _id: item._id,
            title: item.title,
            preview: item.preview,
            favorite: item.favorite,
          })),
          total: payload.total,
          page: payload.page,
        };
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getRecipesByTitleQuery.rejected, handleRejected)

      // GET RECIPES BY INGREDIENT QUERY

      .addCase(getRecipesByIngredientQuery.pending, handlePending)
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
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getRecipesByIngredientQuery.rejected, handleRejected)

      // GET INGREDIENTS LIST

      .addCase(getIngredientsList.fulfilled, (state, { payload }) => {
        state.ingredientsList = payload
          .map(item => ({
            id: item._id,
            title: item.ttl,
          }))
          .sort((a, b) => a.title.localeCompare(b.title));
      })

      // GET POPULAR RECIPES

      .addCase(getPopularRecipes.fulfilled, (state, { payload }) => {
        state.popularRecipesList = payload
          .map(item => ({
            id: item._id,
            title: item.title,
            description: item.description,
            preview: item.preview,
          }))
          .sort((a, b) => a.title.localeCompare(b.title));
      }),
});

export const recipesReducer = recipesSlice.reducer;
