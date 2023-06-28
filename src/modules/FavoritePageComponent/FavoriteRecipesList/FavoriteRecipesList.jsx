import { useDispatch } from 'react-redux';

import icons from '../../../shared/sprite.svg';
import {
  Container,
  Description,
  DishImage,
  FavoriteRecipesItem,
  LowerContainer,
  SeeRecipeBtn,
  TextBox,
  Time,
  Title,
  TrashBtn,
  TrashIcon,
  UpperContainer,
} from './FavoriteRecipesList.styled';
import defaultImg from '../../../shared/images/noImage/noImage.png';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getFavoriteRecipes,
  toggleFavourite,
} from 'redux/reduxRecipes/recipesOperations';
import { contractTitle, contractTitleMob } from 'shared/Utils/contractTitle';
import {
  contractDescription,
  contractDescriptionMob,
} from 'shared/Utils/contractDescription';
import { removeFromFavorite } from 'shared/Utils/notifications';

const FavoriteRecipesList = ({ favoriteRecipes, page }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth]);

  const onHandleDelete = id => {
    dispatch(toggleFavourite(id)).then(() => {
      removeFromFavorite();
      dispatch(getFavoriteRecipes(page));
    });
  };

  return (
    <ul>
      {favoriteRecipes.map(
        ({ id, title, preview, description, time, favorite }) => {
          return (
            favorite && (
              <FavoriteRecipesItem key={id}>
                {preview ? (
                  <DishImage src={preview} alt={title} />
                ) : (
                  <DishImage src={defaultImg} alt="default" />
                )}
                <Container>
                  <UpperContainer>
                    <TextBox>
                      <Title>
                        {windowWidth <= 787 && contractTitleMob(title)}
                        {windowWidth > 768 && contractTitle(title)}
                      </Title>
                      <Description>
                        {windowWidth <= 787 &&
                          contractDescriptionMob(description)}
                        {windowWidth > 768 && contractDescription(description)}
                      </Description>
                    </TextBox>
                    <TrashBtn type="button" onClick={() => onHandleDelete(id)}>
                      <TrashIcon>
                        <use href={icons + '#trash'}></use>
                      </TrashIcon>
                    </TrashBtn>
                  </UpperContainer>
                  <LowerContainer>
                    <Time>{time} min</Time>
                    <SeeRecipeBtn
                      type="button"
                      onClick={() => navigate(`/recipe/${id}`)}
                    >
                      See recipe
                    </SeeRecipeBtn>
                  </LowerContainer>
                </Container>
              </FavoriteRecipesItem>
            )
          );
        }
      )}
    </ul>
  );
};

export default FavoriteRecipesList;
