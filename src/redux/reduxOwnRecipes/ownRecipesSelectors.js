export const selectMyRecipes = state =>
  state.ownRecipes.ownRecipes.ownRecipesList;
export const selectMyRecipesTotal = state => state.ownRecipes.ownRecipes.total;
export const selectMyRecipesPage = state => state.ownRecipes.ownRecipes.page;
export const selectLoading = state => state.ownRecipes.isLoading;
