import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import PageBackground from 'shared/components/SharedLayoutLoggedIn/PageBackground/PageBackground';
import CategoriesList from './CategoriesList/CategoriesList';
import { StyledContainer } from 'shared/components/Container/Container.styled';
import Title from 'shared/components/SharedPageComponents/Title/Title';
import RecipesList from '../../shared/components/SharedPageComponents/RecipesList/RecipesList';
import BasicPagination from 'shared/components/SharedPageComponents/Pagination/Pagination';
import { scrollToTop } from 'shared/Utils/scrollToTop';
import { getRecipesbyCategory } from 'redux/reduxRecipes/recipesOperations';
import Loader from 'shared/components/Loader/Loader';
import { notificationError } from 'shared/Utils/notifications';

const CategoriesPageComponent = () => {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [recipesList, setRecipesList] = useState([]);
  const [total, setTotal] = useState(0);

  const totalPages = Math.ceil(total / 8);

  const dispatch = useDispatch();
  const { categoryName } = useParams();

  useEffect(() => {
    const fetchRecipesByCategory = async data => {
      setIsLoading(true);
      try {
        const actionResult = await dispatch(getRecipesbyCategory(data));
        if (actionResult.payload.recipes.length === 0) {
          notificationError();
        }
        setRecipesList(actionResult.payload.recipes);
        setTotal(actionResult.payload.total);
      } catch (e) {
        notificationError();
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipesByCategory({ categoryName, page });
  }, [dispatch, categoryName, page]);

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
        {isLoading ? (
          <Loader />
        ) : (
          <RecipesList page={page} recipesList={recipesList} />
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
  );
};

export default CategoriesPageComponent;
