import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { RotatingLines } from 'react-loader-spinner';

import { StyledContainer } from 'shared/components/Container/Container.styled';
import Motivation from 'shared/components/SharedPageComponents/Motivations/Motivation';
import motivation1x from '../../../shared/images/motivations/motivationFavorite/motivationFavorite.jpeg';
import motivation2x from '../../../shared/images/motivations/motivationFavorite/motivationFavorite.jpeg';
import icons from '../../../shared/sprite.svg';

import {
  getFavoriteRecipes,
  toggleFavourite,
} from 'redux/reduxRecipes/recipesOperations';

import {
  StyledHeroPageBtn,
  StyledHeroPageInfoContainer,
  StyledRecipePageHero,
  StyledRecipePageText,
  StyledRecipePageTitle,
  StyledTimeContainer,
  StyledTimeSvg,
} from './RecipePageHero.styled';
import {
  addToFavorite,
  notificationError,
  removeFromFavorite,
} from 'shared/Utils/notifications';

const RecipePageHero = ({ id, title, description, favorite, time }) => {
  const [isFavorite, setIsFavorite] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showMotivation, setShowMotivation] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsFavorite(favorite);
  }, [favorite]);

  useEffect(() => {
    if (isFavorite && !favorite) {
      dispatch(getFavoriteRecipes(1)).then(e => {
        if (e.payload.total === 1) {
          setShowMotivation(true);
        }
      });
    }
  }, [dispatch, isFavorite, favorite]);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        setShowMotivation(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [setShowMotivation]);

  useEffect(() => {
    if (showMotivation) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [showMotivation]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      setShowMotivation(false);
    }
  };

  const closeBtnHandler = () => {
    setShowMotivation(false);
  };

  const handleRecipePageBtnToggler = async value => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    try {
      const actionResult = await dispatch(toggleFavourite(value));

      if (actionResult.type === 'recipes/togglefavourite/fulfilled') {
        setIsFavorite(!isFavorite);
        if (!isFavorite) {
          addToFavorite();
        } else {
          removeFromFavorite();
        }
      }
    } catch (e) {
      notificationError();
    }
  };

  const string = isFavorite
    ? 'Remove from favorite recipes'
    : 'Add to favorite recipes';

  return (
    <StyledRecipePageHero>
      {showMotivation && (
        <Motivation
          handleBackdropClick={handleBackdropClick}
          motivation1x={motivation1x}
          motivation2x={motivation2x}
          closeBtnHandler={closeBtnHandler}
        />
      )}
      <StyledContainer>
        <StyledHeroPageInfoContainer>
          <StyledRecipePageTitle>{title}</StyledRecipePageTitle>
          <StyledRecipePageText>{description}</StyledRecipePageText>
        </StyledHeroPageInfoContainer>
        <StyledHeroPageBtn
          type="button"
          onClick={() => handleRecipePageBtnToggler(id)}
        >
          {isLoading && (
            <RotatingLines
              strokeColor="grey"
              strokeWidth="2"
              animationDuration="0.75"
              width="30"
              visible={true}
            />
          )}
          {!isLoading && <span>{string}</span>}
        </StyledHeroPageBtn>
        <StyledTimeContainer>
          <StyledTimeSvg>
            <use href={icons + '#clock'}></use>
          </StyledTimeSvg>
          <p>{time} min</p>
        </StyledTimeContainer>
      </StyledContainer>
    </StyledRecipePageHero>
  );
};

export default RecipePageHero;
