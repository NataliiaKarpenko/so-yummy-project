import { createSlice } from '@reduxjs/toolkit';
import { getOwnRecipes } from './ownRecipesOperations';

const initialState = {
  isLoading: false,
  error: null,

  ownRecipes: {
    ownRecipesList: [],
    total: 0,
    page: 1,
  },
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const ownRecipesSlice = createSlice({
  name: 'ownRecipes',
  initialState,

  extraReducers: builder =>
    builder

      .addCase(getOwnRecipes.pending, handlePending)
      .addCase(getOwnRecipes.fulfilled, (state, { payload }) => {
        state.ownRecipes = {
          ownRecipesList: payload.recipes.map(item => ({
            id: item._id,
            title: item.title,
            description: item.description,
            preview: item.preview,
            time: item.time,
          })),
          total: payload.total,
          page: payload.page,
        };

        state.isLoading = false;
        state.error = null;
      })
      .addCase(getOwnRecipes.rejected, handleRejected),
});

export const ownRecipesReducer = ownRecipesSlice.reducer;
