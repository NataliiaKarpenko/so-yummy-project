import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { removeFromMyRecipes } from 'shared/Utils/notifications';
import MyRecipesItem from 'shared/components/SharedPageComponents/MyRecipeItem/MyRecipesItem';
import {
  deleteOwnRecipeById,
  getOwnRecipes,
} from 'redux/reduxOwnRecipes/ownRecipesOperations';
import { Fragment } from 'react';

const MyRecipesList = ({ recipesList, page }) => {
  const dispatch = useDispatch();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth]);

  const onHandleDelete = id => {
    dispatch(deleteOwnRecipeById(id)).then(() => {
      removeFromMyRecipes();
      dispatch(getOwnRecipes(page));
    });
  };

  return (
    <ul>
      {recipesList?.map(({ id, title, preview, description, time }) => {
        return (
          <Fragment key={id}>
            <MyRecipesItem
              id={id}
              title={title}
              preview={preview}
              description={description}
              time={time}
              onHandleDelete={onHandleDelete}
            />
          </Fragment>
        );
      })}
    </ul>
  );
};

export default MyRecipesList;
