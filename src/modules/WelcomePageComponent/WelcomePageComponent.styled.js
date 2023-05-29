import styled from 'styled-components';

import img1 from '../../shared/images/welcomePageImg/welcomeBackgroundMobile.jpeg';
import img2 from '../../shared/images/welcomePageImg/welcomeBackgroundMobile@2x.jpeg';
import img3 from '../../shared/images/welcomePageImg/welcomeBackgroundTab.jpeg';
import img4 from '../../shared/images/welcomePageImg/welcomeBackgroundTab@2x.jpeg';
import img5 from '../../shared/images/welcomePageImg/welcomeBackgroundDesktop.jpeg';
import img6 from '../../shared/images/welcomePageImg/welcomeBackgroundDesktop@2x.jpeg';

export const StyledWelcomePageContainer = styled.section`
  height: 100vh;
  padding-right: 35px;
  padding-left: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 58.58%,
      rgba(0, 0, 0, 0.345172) 78.98%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(${img1});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (min-device-pixel-ratio: 2) and (max-width: 767px),
    screen and (min-resolution: 192dpi) and (max-width: 767px),
    screen and (min-resolution: 2dppx) and (max-width: 767px) {
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 58.58%,
        rgba(0, 0, 0, 0.345172) 78.98%,
        rgba(0, 0, 0, 0) 100%
      ),
      url(${img2});
  }

  @media screen and (min-width: 768px) {
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 58.58%,
        rgba(0, 0, 0, 0.345172) 78.98%,
        rgba(0, 0, 0, 0) 100%
      ),
      url(${img3});
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 768px),
    screen and (min-resolution: 192dpi) and (min-width: 768px),
    screen and (min-resolution: 2dppx) and (min-width: 768px) {
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 58.58%,
        rgba(0, 0, 0, 0.345172) 78.98%,
        rgba(0, 0, 0, 0) 100%
      ),
      url(${img4});
  }

  @media screen and (min-width: 1440px) {
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 58.58%,
        rgba(0, 0, 0, 0.345172) 78.98%,
        rgba(0, 0, 0, 0) 100%
      ),
      url(${img5});
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 1440px),
    screen and (min-resolution: 192dpi) and (min-width: 1440px),
    screen and (min-resolution: 2dppx) and (min-width: 1440px) {
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 58.58%,
        rgba(0, 0, 0, 0.345172) 78.98%,
        rgba(0, 0, 0, 0) 100%
      ),
      url(${img6});
  }
`;

export const StyledHeroContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 374px) {
    width: 100%;
    max-width: 305px;
  }

  @media screen and (min-width: 375px) {
    width: 305px;
  }

  @media screen and (min-width: 768px) {
    width: 500px;
  }

  @media screen and (min-width: 768px) {
    width: 544px;
  }
`;

export const StyledLogoImg = styled.picture`
  height: 54px;
  width: 54px;

  @media screen and (min-width: 768px) {
    height: 68px;
    width: 68px;
  }
`;

export const StyledHeroTitle = styled.h1`
  margin-top: 28px;
  margin-bottom: 14px;
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: var(--primary-font-color);

  @media screen and (min-width: 768px) {
    margin-top: 44px;
    font-size: 28px;
  }
`;

export const StyledHeroText = styled.p`
  margin-bottom: 44px;
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: var(--primary-font-color);

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const StyledHeroBtnContainer = styled.div`
  display: flex;
  gap: 12px;

  @media screen and (min-width: 768px) {
    gap: 18px;
  }
`;

export const StyledHeroBtn = styled.button`
  height: 45px;
  padding: 12px 24px;
  border-radius: 24px 44px;

  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  color: var(--primary-font-color);
  transition: all var(--transition-dur-func);

  @media screen and (min-width: 768px) {
    height: 67px;
    padding: 22px 55px;
    font-size: 16px;
  }
`;

export const StyledSigninBtn = styled(StyledHeroBtn)`
  border: 2px solid var(--primary-font-color);
  background-color: transparent;

  &:hover {
    border: 2px solid var(--primary-btn-color);
    color: var(--primary-btn-color);
  }
`;

export const StyledSignupBtn = styled(StyledHeroBtn)`
  border: 2px solid transparent;
  background-color: var(--primary-btn-color);

  &:hover {
    background-color: var(--secondary-btn-color);
  }
`;
