import { useDispatch } from 'react-redux';

import { removeFromFavorite } from 'shared/Utils/notifications';
import MyRecipesItem from 'shared/components/SharedPageComponents/MyRecipeItem/MyRecipesItem';
import {
  getFavoriteRecipes,
  toggleFavourite,
} from 'redux/reduxRecipes/recipesOperations';
import { Fragment } from 'react';

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
        ({ id, title, preview, description, time, favorite }, index) => {
          return (
            favorite && (
              <Fragment key={id}>
                <MyRecipesItem
                  id={id}
                  title={title}
                  preview={preview}
                  description={description}
                  time={time}
                  index={index}
                  onHandleDelete={onHandleDelete}
                />
              </Fragment>
            )
          );
        }
      )}
    </ul>
  );
};

export default FavoriteRecipesList;
