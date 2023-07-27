import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import {
  getRecipesByIngredientQuery,
  getRecipesByTitleQuery,
} from 'redux/reduxRecipes/recipesOperations';
import {
  selectLoading,
  selectRecipesByQuery,
  selectTotalRecipesByQuery,
} from 'redux/reduxRecipes/recipesSelectors';
import RecipesList from 'shared/components/SharedPageComponents/RecipesList/RecipesList';
import { StyledContainer } from 'shared/components/Container/Container.styled';
import PageBackground from 'shared/components/SharedLayoutLoggedIn/PageBackground/PageBackground';
import SearchForm from 'shared/components/SharedPageComponents/SearchForm/SearchForm';
import Title from 'shared/components/SharedPageComponents/Title/Title';
import SearchTypeSelector from './SearchTypeSelector/SearchTypeSelector';
import BasicPagination from 'shared/components/SharedPageComponents/Pagination/Pagination';
import { scrollToTop } from 'shared/Utils/scrollToTop';
import { SearchBar } from './SearchPageComponent.styled';
import NoInfoSupplied from 'shared/components/SharedPageComponents/NoInfoSupplied/NoInfoSupplied';
import Loader from 'shared/components/Loader/Loader';

const SearchPageComponent = () => {
  const selectorTypesValues = ['title', 'ingredients'];
  const recipesByQuery = useSelector(selectRecipesByQuery);
  const totalByQuery = useSelector(selectTotalRecipesByQuery);
  const isLoading = useSelector(selectLoading);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const type = searchParams.get('type') ?? 'title';

  const [page, setPage] = useState(1);
  const [selectorType, setSelectorType] = useState('title');
  const [hovered, setHovered] = useState(selectorType);
  const [recipesList, setRecipesList] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const limit = windowWidth >= 1440 ? 12 : 6;
  const totalPages = Math.ceil(totalByQuery / limit);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth]);

  const dispatch = useDispatch();

  useEffect(() => {
    setSelectorType(type);
    setHovered(type);
  }, [type]);

  useEffect(() => {
    if (query) {
      if (selectorType === 'title') {
        dispatch(getRecipesByTitleQuery({ query, page, limit }));
      } else if (selectorType === 'ingredients') {
        dispatch(getRecipesByIngredientQuery({ query, page, limit }));
      }
    }
  }, [query, page, limit, selectorType, dispatch]);

  useEffect(() => {
    if (selectorType && query) {
      setRecipesList(recipesByQuery);
    }
  }, [recipesByQuery, selectorType, query]);

  const handleSubmit = value => {
    searchParams.set('query', value);
    setSearchParams(searchParams);
    setPage(1);
  };

  const handleSelectorType = label => {
    setSelectorType(label);

    searchParams.set('type', label);
    if (query) {
      searchParams.set('query', query);
    } else {
      searchParams.delete('query');
    }

    setSearchParams(searchParams);
    setPage(1);
  };

  const handlePageChange = value => {
    setPage(value);
    scrollToTop();
  };

  return (
    <PageBackground page={true}>
      {isLoading && <Loader />}

      <StyledContainer>
        <Title title="Search" />
        <SearchBar>
          <SearchForm searchQuery={query} handleSubmit={handleSubmit} />

          <SearchTypeSelector
            selectorType={selectorType}
            selectorTypesValues={selectorTypesValues}
            handleSelectorType={handleSelectorType}
            hovered={hovered}
            setHovered={setHovered}
          />
          {!isLoading && <RecipesList recipesList={recipesList} />}
          {!recipesList.length && (
            <NoInfoSupplied
              text={
                !query
                  ? 'Enter a query, please'
                  : 'Oops, there are no recipes matching your query...'
              }
            />
          )}
        </SearchBar>

        {totalPages > 1 && query && (
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

export default SearchPageComponent;
