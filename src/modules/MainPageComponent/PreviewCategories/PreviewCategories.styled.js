import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledPreviewCategories = styled.section`
  padding-top: 64px;

  @media screen and (min-width: 768px) {
    padding-top: 72px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 100px;
  }
`;

export const StyledPreviewCategoriesList = styled.ul`
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 14px;
  }
`;

export const StyledPreviewCategoriesItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 32px;

    @media screen and (min-width: 768px) {
      margin-bottom: 50px;
    }

    @media screen and (min-width: 1440px) {
      margin-bottom: 100px;
    }
  }
`;

export const StyledPreviewCategoriesLink = styled(NavLink)`
  display: inline-block;
  margin-bottom: 32px;

  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: #001833;
  text-transform: capitalize;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 50px;
  }
`;

export const StyledPreviewCategoriesTitle = styled.h1`
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: #001833;
  text-transform: capitalize;
  transition: all var(--transition-dur-func);

  @media screen and (min-width: 768px) {
    font-size: 44px;
  }

  &:hover {
    color: var(--primary-btn-color);
    transform: scale(1.01);
  }
`;

export const StyledRecipesList = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    column-gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    gap: 14px;
    flex-basis: calc((100% - 42px) / 4);
  }
`;

export const StyledPreviewCategoriesBtn = styled.button`
  margin-top: 24px;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 24px;

  border: none;
  border-radius: 6px;
  background-color: var(--primary-btn-color);

  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: var(--primary-font-color);

  transition: all var(--transition-dur-func);

  &:hover {
    scale: 1.01;
    background-color: var(--secondary-btn-color);
  }

  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 50px;
  }
`;

export const StyledOtherCategoriesBtn = styled.button`
  margin-right: auto;
  margin-left: auto;
  width: 195px;
  height: 46px;

  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--primary-btn-color);
  border-radius: 24px 44px;
  background-color: transparent;

  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
  color: var(--secondary-btn-color);

  transition: all var(--transition-dur-func);

  &:hover {
    color: var(--primary-font-color);
    border: 2px solid transparent;
    background-color: var(--primary-btn-color);
    scale: 1.01;
  }

  @media screen and (min-width: 768px) {
    width: 239px;
    height: 61px;

    font-size: 16px;
  }
`;
