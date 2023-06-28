import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import {
  getRecipesByIngredientQuery,
  getRecipesByTitleQuery,
} from 'redux/reduxRecipes/recipesOperations';
import {
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

const SearchPageComponent = () => {
  const selectorTypes = { title: 'title', ingredients: 'ingredients' };
  const selectorTypesValues = Object.values(selectorTypes);
  const recipesByQuery = useSelector(selectRecipesByQuery);
  const totalByQuery = useSelector(selectTotalRecipesByQuery);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const type = searchParams.get('type') ?? 'title';

  const [page, setPage] = useState(1);
  const [selectorType, setSelectorType] = useState(type);
  const [searchQuery, setSearchQuery] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const limit = windowWidth >= 1440 ? 12 : 6;

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (query) {
      setSearchQuery(query);
    }
  }, [query]);

  useEffect(() => {
    if (query && selectorType === 'ingredients') {
      dispatch(getRecipesByIngredientQuery({ query, page, limit }));
    } else if (query && selectorType === 'title') {
      dispatch(getRecipesByTitleQuery({ query, page, limit }));
    }
  }, [query, page, limit, selectorType, dispatch]);

  useEffect(() => {
    setSelectorType(type);
    if (searchQuery) {
      searchParams.set('query', searchQuery);
    } else {
      searchParams.delete('query');
    }

    setSearchParams(searchParams);
  }, [type, searchParams, setSearchParams, searchQuery, query]);

  const handleSubmit = value => {
    searchParams.set('type', selectorType);
    searchParams.set('query', value);
    setSearchParams(searchParams);
    setPage(1);
  };

  const handleSelectorType = label => {
    setSelectorType(label);
    searchParams.set('type', label);
    searchParams.set('query', searchQuery);
    setSearchParams(searchParams);
    setPage(1);
  };

  const handlePageChange = value => {
    setPage(value);
    scrollToTop();
  };

  return (
    <PageBackground page={true}>
      <StyledContainer>
        <Title title="Search" />
        <SearchBar>
          <SearchForm searchQuery={query} handleSubmit={handleSubmit} />

          <SearchTypeSelector
            selectorType={selectorType}
            selectorTypesValues={selectorTypesValues}
            handleSelectorType={handleSelectorType}
          />
          {recipesByQuery.length === 0 && (
            <NoInfoSupplied
              text={
                !query
                  ? 'Enter a query, please'
                  : 'Oops, there are no recipes matching your query...'
              }
            />
          )}
        </SearchBar>
        {query && <RecipesList recipesList={recipesByQuery} />}
        {totalByQuery > 1 && query && (
          <BasicPagination
            page={page}
            totalPages={totalByQuery}
            onChange={handlePageChange}
          />
        )}
      </StyledContainer>
    </PageBackground>
  );
};

export default SearchPageComponent;
