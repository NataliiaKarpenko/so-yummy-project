export const selectLoading = state => state.recipes.isLoading;

export const selectRecipesMainPage = state => state.recipes.recipesMainPage;
export const selectCategories = state => state.recipes.categoriesList;
// export const selectRecipesList = state => state.recipes.recipesList;
// export const selectTotalRecipesByCategory = state =>
//   state.recipes.recipesbyCategory.total;
export const selectRecipeById = state => state.recipes.recipeById;
export const selectFavoriteRecipes = state =>
  state.recipes.favoriteRecipes.favoriteRecipesList;
export const selectTotalFavoriteRecipes = state =>
  state.recipes.favoriteRecipes.total;
export const selectFavoriteRecipesPage = state =>
  state.recipes.favoriteRecipes.page;
export const selectRecipesByQuery = state =>
  state.recipes.recipesByQuery.recipesByQueryList;
export const selectTotalRecipesByQuery = state =>
  state.recipes.recipesByQuery.total;
