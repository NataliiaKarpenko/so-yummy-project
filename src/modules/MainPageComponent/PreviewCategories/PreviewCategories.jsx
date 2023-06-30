import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { StyledContainer } from 'shared/components/Container/Container.styled';
import RecipesItem from 'shared/components/SharedPageComponents/RecipesItem/RecipesItem';
import { getRecipesMainPage } from 'redux/reduxRecipes/recipesOperations';
import Loader from 'shared/components/Loader/Loader';
import { scrollToTop } from 'shared/Utils/scrollToTop';

import {
  StyledPreviewCategories,
  StyledPreviewCategoriesList,
  StyledPreviewCategoriesItem,
  StyledPreviewCategoriesLink,
  StyledPreviewCategoriesTitle,
  StyledPreviewCategoriesBtn,
  StyledOtherCategoriesBtn,
  StyledRecipesList,
} from './PreviewCategories.styled';
import {
  selectLoading,
  selectRecipesMainPage,
} from 'redux/reduxRecipes/recipesSelectors';

const Previewcategories = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const categoriesList = useSelector(selectRecipesMainPage);
  const isLoading = useSelector(selectLoading);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    dispatch(getRecipesMainPage());
  }, [dispatch]);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth]);

  const getDishesArr = dishesArr => {
    let filteredDishesArr = [];
    if (windowWidth < 768) {
      filteredDishesArr = dishesArr.slice(0, 1);
    } else if (windowWidth >= 768 && windowWidth < 1440) {
      filteredDishesArr = dishesArr.slice(0, 2);
    } else {
      filteredDishesArr = dishesArr;
    }
    return filteredDishesArr;
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <StyledPreviewCategories>
          <StyledContainer>
            <StyledPreviewCategoriesList>
              {categoriesList.map(categoryItem => {
                return (
                  <StyledPreviewCategoriesItem key={nanoid()}>
                    <StyledPreviewCategoriesLink
                      onClick={() => scrollToTop()}
                      to={`/categories/${
                        categoryItem[0].charAt(0).toUpperCase() +
                        categoryItem[0].slice(1)
                      }`}
                    >
                      <StyledPreviewCategoriesTitle>
                        {categoryItem[0]}
                      </StyledPreviewCategoriesTitle>
                    </StyledPreviewCategoriesLink>
                    <StyledRecipesList>
                      {getDishesArr(categoryItem[1]).map(
                        ({ title, preview, _id, favorite }, index) => {
                          return (
                            <RecipesItem
                              key={_id}
                              title={title}
                              preview={preview}
                              id={_id}
                              favorite={favorite}
                              index={index}
                            />
                          );
                        }
                      )}
                    </StyledRecipesList>
                    <StyledPreviewCategoriesBtn
                      type="button"
                      onClick={() => {
                        navigate(
                          `/categories/${
                            categoryItem[0].charAt(0).toUpperCase() +
                            categoryItem[0].slice(1)
                          }`
                        );
                        scrollToTop();
                      }}
                    >
                      See all
                    </StyledPreviewCategoriesBtn>
                  </StyledPreviewCategoriesItem>
                );
              })}
            </StyledPreviewCategoriesList>
            <StyledOtherCategoriesBtn
              type="button"
              onClick={() => {
                navigate('/categories/Beef');
                scrollToTop();
              }}
            >
              Other categories
            </StyledOtherCategoriesBtn>
          </StyledContainer>
        </StyledPreviewCategories>
      )}
    </>
  );
};

export default Previewcategories;
