import { createSlice } from '@reduxjs/toolkit';
import {
  addToShoppingList,
  getShoppingList,
  removeFromShoppingList,
} from './shoppingListOperations';

const initialState = {
  shoppingList: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
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

      // GET SHOPPING-LIST
      .addCase(getShoppingList.pending, handlePending)
      .addCase(getShoppingList.fulfilled, (state, { payload }) => {
        state.shoppingList = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getShoppingList.rejected, handleRejected)

      // REMOVE FROM SHOPPING-LIST

      .addCase(removeFromShoppingList.fulfilled, (state, { payload }) => {
        state.shoppingList = payload;
      }),
});

export const shoppingListReducer = shoppingListSlice.reducer;
