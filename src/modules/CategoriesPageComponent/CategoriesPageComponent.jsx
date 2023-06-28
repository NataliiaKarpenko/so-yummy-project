import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PageBackground from 'shared/components/SharedLayoutLoggedIn/PageBackground/PageBackground';
import CategoriesList from './CategoriesList/CategoriesList';
import { StyledContainer } from 'shared/components/Container/Container.styled';
import Title from 'shared/components/SharedPageComponents/Title/Title';
import RecipesList from '../../shared/components/SharedPageComponents/RecipesList/RecipesList';
import BasicPagination from 'shared/components/SharedPageComponents/Pagination/Pagination';
import {
  selectRecipesByCategory,
  selectTotalRecipesByCategory,
} from 'redux/reduxRecipes/recipesSelectors';
import { scrollToTop } from 'shared/Utils/scrollToTop';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getRecipesbyCategory } from 'redux/reduxRecipes/recipesOperations';

const CategoriesPageComponent = () => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const recipesByCategoryList = useSelector(selectRecipesByCategory);

  const { categoryName } = useParams();
  useEffect(() => {
    dispatch(getRecipesbyCategory({ categoryName, page }));
  }, [dispatch, categoryName, page]);

  const totalRecipesByCategory = useSelector(selectTotalRecipesByCategory);
  const totalPages = Math.ceil(totalRecipesByCategory / 8);

  const handlePageChange = value => {
    setPage(value);
    scrollToTop();
  };

  const handleLinkClick = () => {
    setPage(1);
    scrollToTop();
  };

  return (
    <PageBackground page={true}>
      <StyledContainer>
        <Title title="Categories" />
        <CategoriesList handleLinkClick={handleLinkClick} />

        <RecipesList page={page} recipesList={recipesByCategoryList} />
        {totalPages > 1 && (
          <BasicPagination
            page={page}
            totalPages={totalPages}
            onChange={handlePageChange}
          />
        )}
      </StyledContainer>
    </PageBackground>
  );
};

export default CategoriesPageComponent;
