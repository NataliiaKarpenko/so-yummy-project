import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FavoriteRecipesItem = styled.li`
  max-height: 152px;
  padding: 9px 14px;
  display: flex;
  gap: 14px;
  cursor: default;

  border-radius: 8px;
  background-color: ${props => props.theme.recipeCard};

  @media screen and (min-width: 768px) {
    max-height: 288px;
    padding: 28px 24px;
    gap: 24px;
  }

  @media screen and (min-width: 1440px) {
    max-height: 404px;
    padding: 40px;
    gap: 40px;
  }

  &:not(:last-child) {
    margin-bottom: 18px;

    @media screen and (min-width: 768px) {
      margin-bottom: 40px;
    }

    @media screen and (min-width: 1440px) {
      margin-bottom: 50px;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const UpperContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const TextBox = styled.div`
  width: 100%;
`;

export const DishImage = styled.img`
  width: 124px;
  height: 124px;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 228px;
    height: 232px;
  }

  @media screen and (min-width: 1440px) {
    width: 318px;
    height: 324px;
  }
`;

export const Title = styled.p`
  margin-bottom: 14px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.24px;
  color: ${props => props.theme.text.textPrimary};

  @media screen and (min-width: 768px) {
    margin-bottom: 28px;
    font-size: 24px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 50px;
  }
`;

export const Description = styled.p`
  max-width: 153px;
  text-align: justify;

  font-size: 8px;
  line-height: 1.25;
  letter-spacing: -0.16px;
  color: ${props => props.theme.text.myRecipes};

  @media screen and (min-width: 768px) {
    max-width: 298px;
    font-size: 14px;
    line-height: 1.28;
    letter-spacing: -0.28px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 679px;
    font-size: 18px;
    line-height: 1.38;
    letter-spacing: -0.36px;
  }
`;

export const TrashBtn = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 4px;
  transition: all ${props => props.theme.transitionDurFunc};

  background: ${props => {
    switch (props.status) {
      case '/my':
        return props.theme.button.trashMy;

      case '/favorite':
        return props.theme.button.trashFavorite;

      default:
        return;
    }
  }};

  @media screen and (min-width: 768px) {
    width: 38px;
    height: 38px;
  }

  @media screen and (min-width: 1440px) {
    width: 44px;
    height: 44px;
  }

  &:hover {
    scale: 1.01;
    svg {
      stroke: ${props => {
        switch (props.status) {
          case '/my':
            return props.theme.button.background;

          case '/favorite':
            return props.theme.globalColors.accentPrimary;

          default:
            return;
        }
      }};

      scale: 1.01;
    }
  }
`;

export const TrashIcon = styled.svg`
  width: 14px;
  height: 14px;
  fill: transparent;
  transition: all ${props => props.theme.transitionDurFunc};

  stroke: ${props => {
    switch (props.status) {
      case '/my':
        return props.theme.globalColors.light;

      case '/favorite':
        return props.theme.text.textSecondary;

      default:
        return;
    }
  }};

  @media screen and (min-width: 768px) {
    width: 22px;
    height: 22px;
  }

  @media screen and (min-width: 1440px) {
    width: 24px;
    height: 24px;
  }
`;

export const LowerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

export const Time = styled.p`
  color: ${props => props.theme.text.textRecipeCard};
  font-size: 10px;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: -0.24px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.44;
  }
`;

export const SeeRecipeLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 87px;
  height: 27px;

  font-size: 10px;
  color: ${props => props.theme.globalColors.light};

  border: none;
  border-radius: 24px 44px;
  transition: all ${props => props.theme.transitionDurFunc};

  background-color: ${props => {
    switch (props.status) {
      case '/my':
        return props.theme.globalColors.accentPrimary;

      case '/favorite':
        return props.theme.button.background;

      default:
        return;
    }
  }};

  &:hover {
    scale: 1.01;
    color: ${props => props.theme.text.hover};

    background-color: ${props => {
      switch (props.status) {
        case '/my':
          return props.theme.button.hover;

        case '/favorite':
          return props.theme.button.hoverReverse;

        default:
          return;
      }
    }};
  }

  @media screen and (min-width: 768px) {
    width: 138px;
    height: 45px;
    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
    width: 160px;
    height: 54px;
    font-size: 16px;
  }
`;
