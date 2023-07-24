import { useDispatch } from 'react-redux';

import { removeFromFavorite } from 'shared/Utils/notifications';
import MyRecipesItem from 'shared/components/SharedPageComponents/MyRecipeItem/MyRecipesItem';
import {
  getFavoriteRecipes,
  toggleFavourite,
} from 'redux/reduxRecipes/recipesOperations';

const FavoriteRecipesList = ({ recipesList, page }) => {
  const dispatch = useDispatch();

  const onHandleDelete = id => {
    dispatch(toggleFavourite(id)).then(() => {
      removeFromFavorite();
      dispatch(getFavoriteRecipes(page));
    });
  };

  return (
    <ul>
      {recipesList.map(
        ({ id, title, preview, description, time, favorite }) => {
          return (
            favorite && (
              <MyRecipesItem
                id={id}
                title={title}
                preview={preview}
                description={description}
                time={time}
                onHandleDelete={onHandleDelete}
              />
            )
          );
        }
      )}
    </ul>
  );
};

export default FavoriteRecipesList;
