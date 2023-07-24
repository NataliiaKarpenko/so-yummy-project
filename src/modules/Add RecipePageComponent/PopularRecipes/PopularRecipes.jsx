import { getPopularRecipes } from 'redux/reduxRecipes/recipesOperations';
import { selectPopularRecipes } from 'redux/reduxRecipes/recipesSelectors';
import {
  PopularRecipeContainer,
  PopularRecipeImg,
  PopularRecipeItem,
  PopularRecipeLink,
  PopularRecipeText,
  PopularRecipeTitle,
  PopularRecipesList,
  SectionTitle,
} from './PopularRecipes.styled';
import { useState } from 'react';
import { contractTitleMob } from 'shared/Utils/contractTitle';
import { contractPopularRecipesDescription } from 'shared/Utils/contractDescription';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const PopularRecipes = () => {
  const dispatch = useDispatch();
  const popularRecipes = useSelector(selectPopularRecipes);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    dispatch(getPopularRecipes());
  }, [dispatch]);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth]);

  const getNewPopularRecipes = () => {
    let newPopularRecipes = [];
    if (windowWidth >= 768 && windowWidth < 1440) {
      newPopularRecipes = popularRecipes.slice(0, 2);
    } else {
      newPopularRecipes = popularRecipes.slice(0, 4);
    }
    return newPopularRecipes;
  };

  return (
    <PopularRecipeContainer windowWidth={windowWidth}>
      <SectionTitle>Popular recipes</SectionTitle>
      <PopularRecipesList>
        {getNewPopularRecipes().map(({ id, title, description, preview }) => {
          return (
            <PopularRecipeItem key={id}>
              <PopularRecipeLink to={`/recipe/${id}`}>
                <PopularRecipeImg src={preview} alt={title} />
                <div>
                  <PopularRecipeTitle>
                    {contractTitleMob(title)}
                  </PopularRecipeTitle>
                  <PopularRecipeText>
                    {contractPopularRecipesDescription(description)}
                  </PopularRecipeText>
                </div>
              </PopularRecipeLink>
            </PopularRecipeItem>
          );
        })}
      </PopularRecipesList>
    </PopularRecipeContainer>
  );
};

export default PopularRecipes;
