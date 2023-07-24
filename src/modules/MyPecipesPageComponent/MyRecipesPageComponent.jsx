import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getOwnRecipes } from 'redux/reduxOwnRecipes/ownRecipesOperations';
import { scrollToTop } from 'shared/Utils/scrollToTop';
import MyRecipesList from './MyRecipesList/MyRecipesList';
import PageBackground from 'shared/components/SharedLayoutLoggedIn/PageBackground/PageBackground';
import { StyledContainer } from 'shared/components/Container/Container.styled';
import Title from 'shared/components/SharedPageComponents/Title/Title';
import NoInfoSupplied from 'shared/components/SharedPageComponents/NoInfoSupplied/NoInfoSupplied';
import BasicPagination from 'shared/components/SharedPageComponents/Pagination/Pagination';
import Loader from 'shared/components/Loader/Loader';
import {
  selectLoading,
  selectMyRecipes,
  selectMyRecipesPage,
  selectMyRecipesTotal,
} from 'redux/reduxOwnRecipes/ownRecipesSelectors';

const MyRecipesPageComponent = () => {
  const dispatch = useDispatch();

  const myRecipesList = useSelector(selectMyRecipes);
  const totalMyRecipes = useSelector(selectMyRecipesTotal);
  const currentPage = useSelector(selectMyRecipesPage);
  const [page, setPage] = useState(1);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(getOwnRecipes(page));
  }, [dispatch, page]);

  const totalPages = Math.ceil(totalMyRecipes / 4);

  useEffect(() => {
    if (currentPage > 1 && myRecipesList?.length === 0) {
      setPage(currentPage - 1);
    }
  }, [myRecipesList, page, currentPage]);

  const handlePageChange = value => {
    setPage(value);
    scrollToTop();
  };

  return (
    <div>
      <PageBackground page={true}>
        {isLoading && <Loader />}
        <StyledContainer>
          <Title title="Favorites" />

          {!isLoading && myRecipesList?.length === 0 && currentPage === 1 ? (
            <NoInfoSupplied text="You haven't added a recipe yet..." />
          ) : (
            <MyRecipesList recipesList={myRecipesList} page={page} />
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
    </div>
  );
};

export default MyRecipesPageComponent;
