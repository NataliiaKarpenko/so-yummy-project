import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import RecipePageComponent from 'modules/RecipePageComponent/RecipePageComponent';
import { getRecipeById } from 'redux/reduxRecipes/recipesOperations';
import { getShoppingList } from 'redux/reduxShoppingList/shoppingListOperations';

const RecipePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShoppingList());

    dispatch(getRecipeById(id));
  }, [dispatch, id]);

  return (
    <div>
      <RecipePageComponent />
    </div>
  );
};

export default RecipePage;
