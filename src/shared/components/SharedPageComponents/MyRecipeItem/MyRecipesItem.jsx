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
}) => {
  const location = useLocation();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth]);

  return (
    <FavoriteRecipesItem>
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
