import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import { StyledContainer } from 'shared/components/Container/Container.styled';
import PageBackground from 'shared/components/SharedLayoutLoggedIn/PageBackground/PageBackground';
import Title from 'shared/components/SharedPageComponents/Title/Title';
import FavoriteRecipesList from './FavoriteRecipesList/FavoriteRecipesList';
import NoInfoSupplied from 'shared/components/SharedPageComponents/NoInfoSupplied/NoInfoSupplied';
import { scrollToTop } from 'shared/Utils/scrollToTop';
import BasicPagination from 'shared/components/SharedPageComponents/Pagination/Pagination';
import { getFavoriteRecipes } from 'redux/reduxRecipes/recipesOperations';

import {
  selectFavoriteRecipes,
  selectFavoriteRecipesPage,
  selectTotalFavoriteRecipes,
} from 'redux/reduxRecipes/recipesSelectors';

const FavoritePageComponent = () => {
  const favoriteRecipes = useSelector(selectFavoriteRecipes);
  const totalFavoriteRecipes = useSelector(selectTotalFavoriteRecipes);
  const currentPage = useSelector(selectFavoriteRecipesPage);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const totalPages = Math.ceil(totalFavoriteRecipes / 4);

  useEffect(() => {
    if (currentPage > 1 && favoriteRecipes.length === 0) {
      setPage(currentPage - 1);
    }
  }, [favoriteRecipes, page, currentPage]);

  useEffect(() => {
    dispatch(getFavoriteRecipes(page));
  }, [dispatch, page]);

  const handlePageChange = value => {
    setPage(value);
    scrollToTop();
  };

  return (
    <>
      <PageBackground page={true}>
        <StyledContainer>
          <Title title="Favorites" />

          {favoriteRecipes.length === 0 && currentPage === 1 ? (
            <NoInfoSupplied text="You haven't added a recipe to your favorites  yet..." />
          ) : (
            <FavoriteRecipesList recipesList={favoriteRecipes} page={page} />
          )}
          {totalPages > 1 && (
            <BasicPagination
              page={page}
              totalPages={totalPages}
              onChange={handlePageChange}
            />
          )}
        </StyledContainer>
      </PageBackground>
    </>
  );
};

export default FavoritePageComponent;
