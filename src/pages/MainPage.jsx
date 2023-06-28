import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import MainPageComponent from 'modules/MainPageComponent/MainPageComponent';
import { getRecipesMainPage } from 'redux/reduxRecipes/recipesOperations';

const MainPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipesMainPage());
  }, [dispatch]);

  return (
    <div>
      <MainPageComponent />
    </div>
  );
};

export default MainPage;
