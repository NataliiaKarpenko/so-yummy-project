import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

import { contractTitle, contractTitleMob } from 'shared/Utils/contractTitle';
import { contractDescriptionMob } from 'shared/Utils/contractDescription';
import defaultImg from '../../../images/noImage/noImage.png';
import icons from '../../../sprite.svg';

import {
  Container,
  Description,
  DishImage,
  FavoriteRecipesItem,
  LowerContainer,
  SeeRecipeLink,
  TextBox,
  Time,
  Title,
  TrashBtn,
  TrashIcon,
  UpperContainer,
} from './MyRecipesItem.styled';

const MyRecipesItem = ({
  id,
  title,
  preview,
  description,
  time,
  onHandleDelete,
  index,
}) => {
  const location = useLocation();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [hoveredItems, setHoveredItems] = useState([]);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth]);

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

  return (
    <FavoriteRecipesItem
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={() => handleMouseLeave(index)}
    >
      {preview ? (
        <DishImage src={preview} alt={title} />
      ) : (
        <DishImage src={defaultImg} alt="default" />
      )}
      <Container>
        <UpperContainer>
          <TextBox>
            {isHovered ? (
              <Title>{title}</Title>
            ) : (
              <Title>
                {windowWidth <= 787 && contractTitleMob(title)}
                {windowWidth > 768 && contractTitle(title)}
              </Title>
            )}
            <Description>
              {windowWidth <= 787 && contractDescriptionMob(description)}
              {windowWidth > 768 && contractDescriptionMob(description)}
            </Description>
          </TextBox>
          <TrashBtn
            type="button"
            status={location.pathname}
            onClick={() => onHandleDelete(id)}
          >
            <TrashIcon status={location.pathname}>
              <use href={icons + '#trash'}></use>
            </TrashIcon>
          </TrashBtn>
        </UpperContainer>
        <LowerContainer>
          <Time>{time} min</Time>
          <SeeRecipeLink
            to={`/recipe/${id}`}
            state={{ from: location }}
            status={location.pathname}
          >
            See recipe
          </SeeRecipeLink>
        </LowerContainer>
      </Container>
    </FavoriteRecipesItem>
  );
};

export default MyRecipesItem;
