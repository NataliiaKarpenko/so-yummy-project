import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PopularRecipeContainer = styled.div`
  @media screen and (max-width: 767px) {
    margin-top: 72px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-top: 100px;
  }
`;

export const PopularRecipesList = styled.ul`
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    display: flex;
    gap: 32px;
    flex-basis: calc((100% -32px) / 2);
  }
`;
export const SectionTitle = styled.h2`
  margin-bottom: 32px;
  font-size: 24px;
  font-weight: 600;
  line-height: 1; /* 100% */
  letter-spacing: -0.24px;
  color: ${props => props.theme.text.textRecipeCard};

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const PopularRecipeImg = styled.img`
  width: 104px;
  height: 85px;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 102px;
  }

  @media screen and (min-width: 1440px) {
    width: 97px;
  }
`;

export const PopularRecipeItem = styled.li`
  border-bottom: 1px solid
    ${props => props.theme.globalColors.popularRecipesBorder};
  padding-right: 14px;
  transition: all ${props => props.theme.transitionDurFunc};

  &:not(:last-child) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    &:not(:last-child) {
      margin-bottom: 0px;
    }
  }

  &:hover {
    box-shadow: 4px 4px 3px -3px #000000;
    scale: 1.01;
  }
`;

export const PopularRecipeLink = styled(Link)`
  display: flex;
  gap: 12px;
  padding-bottom: 13px;

  @media screen and (max-width: 1440px) {
    gap: 11px;
    padding-bottom: 20px;
  }
`;

export const PopularRecipeTitle = styled.h3`
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.24px;
  color: ${props => props.theme.text.textRecipeCard};
`;

export const PopularRecipeText = styled.h3`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: -0.24px;
  color: ${props => props.theme.text.popularRecipes};
`;
