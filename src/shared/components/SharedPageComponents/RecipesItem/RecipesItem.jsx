import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Motivation from '../Motivations/Motivation';
import icons from '../../../sprite.svg';
import { contractTitle } from 'shared/Utils/contractTitle';
import motivation1x from '../../../images/motivations/motivationFavorite/motivationFavorite.jpeg';
import motivation2x from '../../../images/motivations/motivationFavorite/motivationFavorite.jpeg';

import {
  StyledRecipesItem,
  StyledRecipesImg,
  StyledRecipesTitle,
  StyledLikeBtn,
  StyledLikeIcon,
} from './RecipesItem.styled';

import {
  getFavoriteRecipes,
  toggleFavourite,
} from 'redux/reduxRecipes/recipesOperations';

import {
  addToFavorite,
  notificationError,
  removeFromFavorite,
} from 'shared/Utils/notifications';

const RecipesItem = ({ id, title, preview, index, marginBottom, favorite }) => {
  const [hoveredItems, setHoveredItems] = useState([]);
  const [isFavorite, setIsFavorite] = useState(null);
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

  const handleMouseEnter = value => {
    const newHoveredItems = [...hoveredItems];
    newHoveredItems[value] = true;
    setHoveredItems(newHoveredItems);
  };

  const handleMouseLeave = value => {
    const newHoveredItems = [...hoveredItems];
    newHoveredItems[value] = false;
    setHoveredItems(newHoveredItems);
  };
  const isHovered = hoveredItems[index] || false;

  const handleLikeBtnToggler = async value => {
    try {
      const actionResult = await dispatch(toggleFavourite(value));

      if (actionResult.type === 'recipes/togglefavourite/fulfilled') {
        setIsFavorite(!isFavorite);
        if (!isFavorite) {
          addToFavorite(value);
        } else {
          removeFromFavorite(value);
        }
      }
    } catch (e) {
      notificationError();
    }
  };

  return (
    <StyledRecipesItem
      marginBottom={marginBottom}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={() => handleMouseLeave(index)}
    >
      <StyledLikeBtn type="button" onClick={() => handleLikeBtnToggler(id)}>
        <StyledLikeIcon favorite={isFavorite}>
          <use href={icons + '#heart'}></use>
        </StyledLikeIcon>
      </StyledLikeBtn>
      <NavLink to={`/recipe/${id}`}>
        <StyledRecipesImg src={preview} alt={title} />
        {isHovered ? (
          <StyledRecipesTitle>{title}</StyledRecipesTitle>
        ) : (
          <StyledRecipesTitle>{contractTitle(title)}</StyledRecipesTitle>
        )}
      </NavLink>
      {showMotivation && (
        <Motivation
          handleBackdropClick={handleBackdropClick}
          closeBtnHandler={closeBtnHandler}
          motivation1x={motivation1x}
          motivation2x={motivation2x}
        />
      )}
    </StyledRecipesItem>
  );
};

export default RecipesItem;
