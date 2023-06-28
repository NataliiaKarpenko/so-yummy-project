import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getCategoriesList } from 'redux/reduxRecipes/recipesOperations';
import CategoriesPageComponent from 'modules/CategoriesPageComponent/CategoriesPageComponent';

const CategoriesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoriesList());
  }, [dispatch]);

  return (
    <div>
      <CategoriesPageComponent />
    </div>
  );
};

export default CategoriesPage;
