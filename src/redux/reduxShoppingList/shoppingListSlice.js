import { createSlice } from '@reduxjs/toolkit';
import {
  addToShoppingList,
  getShoppingList,
  removeFromShoppingList,
} from './shoppingListOperations';

const initialState = {
  shoppingList: [],
};

export const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState,

  extraReducers: builder =>
    builder

      // ADD TO SHOPPING-LIST

      .addCase(addToShoppingList.fulfilled, (state, { payload }) => {
        state.shoppingList = payload;
      })

      .addCase(getShoppingList.fulfilled, (state, { payload }) => {
        state.shoppingList = payload;
      })

      // REMOVE FROM SHOPPING-LIST

      .addCase(removeFromShoppingList.fulfilled, (state, { payload }) => {
        state.shoppingList = payload;
      }),

  // GET RECIPES BY CATEGORY

  // .addCase(getRecipesbyCategory.fulfilled, (state, { payload }) => {
  //   state.recipesbyCategory = {
  //     recipesList: payload.recipes.map(item => ({
  //       id: item._id,
  //       title: item.title,
  //       preview: item.preview,
  //       favorite: item.favorite,
  //     })),
  //     total: payload.total,
  //   };
  // })

  // GET RECIPE BY ID
  // .addCase(getRecipeById.fulfilled, (state, { payload }) => {
  //   state.recipeById = {
  //     id: payload._id,
  //     title: payload.title,
  //     description: payload.description,
  //     favorite: payload.favorite,
  //     time: payload.time,
  //     ingredients: payload.ingredients,
  //     youtube: payload.youtube,
  //     previewImg: payload.previewImg,
  //   };
  // }),
});

export const shoppingListReducer = shoppingListSlice.reducer;
