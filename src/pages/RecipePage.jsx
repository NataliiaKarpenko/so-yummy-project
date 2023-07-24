import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

import RecipePageComponent from 'modules/RecipePageComponent/RecipePageComponent';
import { getRecipeById } from 'redux/reduxRecipes/recipesOperations';
import { getShoppingList } from 'redux/reduxShoppingList/shoppingListOperations';
import { getOwnRecipeById } from 'redux/reduxOwnRecipes/ownRecipesOperations';

const RecipePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const prevPage = location?.state?.from.pathname;

  useEffect(() => {
    dispatch(getShoppingList());
    if (prevPage === '/my') {
      dispatch(getOwnRecipeById(id));
    } else {
      dispatch(getRecipeById(id));
    }
  }, [dispatch, id, prevPage]);

  return (
    <div>
      <RecipePageComponent prevPage={prevPage === '/my'} />
    </div>
  );
};

export default RecipePage;
