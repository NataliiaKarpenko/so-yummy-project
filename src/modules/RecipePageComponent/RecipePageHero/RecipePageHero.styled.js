import styled from 'styled-components';

import img1 from '../../../shared/images/recipePage/recipePageMobile.jpeg';
import img2 from '../../../shared/images/recipePage/recipePageMobile@2x.jpeg';
import img3 from '../../../shared/images/recipePage/recipePageTab.jpeg';
import img4 from '../../../shared/images/recipePage/recipePageTab@2x.jpeg';
import img5 from '../../../shared/images/recipePage/recipePageDesktop.jpeg';
import img6 from '../../../shared/images/recipePage/recipePageDesktop@2x.jpeg';

export const StyledRecipePageHero = styled.section`
  margin-right: auto;
  margin-left: auto;
  padding-top: 144px;
  padding-bottom: 90px;
  text-align: center;
  max-width: 2731px;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${img1});

  @media screen and (min-device-pixel-ratio: 2) and (max-width: 767px),
    screen and (min-resolution: 192dpi) and (max-width: 767px),
    screen and (min-resolution: 2dppx) and (max-width: 767px) {
    background-image: url(${img2});
  }

  @media screen and (min-width: 768px) {
    padding-top: 136px;
    padding-bottom: 32px;
    background-image: url(${img3});
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 768px),
    screen and (min-resolution: 192dpi) and (min-width: 768px),
    screen and (min-resolution: 2dppx) and (min-width: 768px) {
    background-image: url(${img4});
  }

  @media screen and (min-width: 1440px) {
    padding-top: 154px;
    background-image: url(${img5});
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 1440px),
    screen and (min-resolution: 192dpi) and (min-width: 1440px),
    screen and (min-resolution: 2dppx) and (min-width: 1440px) {
    background-image: url(${img6});
  }
`;

export const StyledHeroPageInfoContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;

  @media screen and (max-width: 374px) {
    width: 100%;
    max-width: 299px;
  }

  @media screen and (min-width: 375px) {
    width: 299px;
  }

  @media screen and (min-width: 768px) {
    width: 506px;
  }

  @media screen and (min-width: 1440px) {
    width: 656px;
    margin-bottom: 30px;
  }
`;

export const StyledRecipePageTitle = styled.h1`
  margin-bottom: 18px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: var(--primary-btn-color);

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    font-size: 44px;
  }
`;

export const StyledRecipePageText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: var(--secondary-font-color);

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const StyledHeroPageBtn = styled.button`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 42px;

  width: 180px;
  height: 35px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid var(--primary-btn-color);
  border-radius: 24px 44px;
  background-color: transparent;

  font-weight: 400;
  font-size: 10px;
  line-height: 1.5;
  color: var(--secondary-btn-color);
  transition: all var(--transition-dur-func);

  &:hover {
    color: var(--primary-font-color);
    border: 1px solid transparent;
    background-color: var(--primary-btn-color);
    scale: 1.01;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 60px;

    width: 300px;
    height: 59px;

    font-size: 16px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 48px;
  }
`;

export const StyledTimeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  font-weight: 500;
  font-size: 10px;
  line-height: 1.4;
  letter-spacing: -0.24px;
  color: var(--secondary-font-color);

  @media screen and (min-width: 768px) {
    gap: 8px;

    font-size: 14px;
    line-height: 1.43;
  }
`;

export const StyledTimeSvg = styled.svg`
  width: 14px;
  height: 14px;

  fill: transparent;
  stroke: var(--secondary-font-color);

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
