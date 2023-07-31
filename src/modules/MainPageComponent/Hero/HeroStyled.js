import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import img1 from '../../../shared/images/mainPageImg/rightSpinach/rightSpinachMob.png';
import img2 from '../../../shared/images/mainPageImg/rightSpinach/rightSpinachMob@2x.png';
import img3 from '../../../shared/images/mainPageImg/rightSpinach/rightSpinachTab.png';
import img4 from '../../../shared/images/mainPageImg/rightSpinach/rightSpinachTab@2x.png';
import img5 from '../../../shared/images/mainPageImg/rightSpinach/rightSpinachDesktop.png';
import img6 from '../../../shared/images/mainPageImg/rightSpinach/rightSpinachDesktop@2x.png';

import img7 from '../../../shared/images/mainPageImg/bG/heroBgMobile.png';
import img8 from '../../../shared/images/mainPageImg/bG/heroBgMobile@2x.png';
import img9 from '../../../shared/images/mainPageImg/bG/heroBgTab.png';
import img10 from '../../../shared/images/mainPageImg/bG/heroBgTab@2x.png';
import img11 from '../../../shared/images/mainPageImg/bG/heroBgDesktop.png';
import img12 from '../../../shared/images/mainPageImg/bG/heroBgDesktop@2x.png';

import img13 from '../../../shared/images/mainPageImg/arrow/arrowTab.png';
import img14 from '../../../shared/images/mainPageImg/arrow/arrowTab@2x.png';
import img15 from '../../../shared/images/mainPageImg/arrow/arrowDesktop.png';
import img16 from '../../../shared/images/mainPageImg/arrow/arrowDesktop@2x.png';

import img17 from '../../../shared/images/mainPageImg/leftSpinach/leftSpinachMobile.png';
import img18 from '../../../shared/images/mainPageImg/leftSpinach/leftSpinachMobile@2x.png';
import img19 from '../../../shared/images/mainPageImg/leftSpinach/leftSpinachTab.png';
import img20 from '../../../shared/images/mainPageImg/leftSpinach/leftSpinachTab@2x.png';
import img21 from '../../../shared/images/mainPageImg/leftSpinach/leftSpinachDesktop.png';
import img22 from '../../../shared/images/mainPageImg/leftSpinach/leftSpinachDesktop@2x.png';

export const StyledHero = styled.section`
  padding-bottom: 83px;

  @media screen and (min-width: 768px) {
    padding-bottom: 168px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 224px;
  }
`;

export const StyledHeroTitle = styled.h1`
  margin-bottom: 14px;

  font-weight: 400;
  font-size: 60px;
  line-height: 1;
  letter-spacing: -0.005em;
  color: ${props => props.theme.text.textSecondary};

  @media screen and (max-width: 767px) {
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    font-size: 72px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 100px;
  }
`;

export const StyledEmphasis = styled.span`
  color: ${props => props.theme.globalColors.accentPrimary};
`;

export const StyledHeroText = styled.p`
  margin-bottom: 364px;

  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: ${props => props.theme.text.textPrimary};

  @media screen and (max-width: 374px) {
    width: 100%;
    max-width: 248px;
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 248px;
  }

  @media screen and (max-width: 767px) {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    padding-left: 6px;
    width: 362px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 50px;
    padding-left: 7px;
    width: 465px;

    font-size: 18px;
    line-height: 1.33;
  }
`;

export const StyledHeroImageContainer = styled.div`
  z-index: 90;
  position: absolute;
  top: 322px;
  right: 27px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    top: 159px;
    right: 0;
  }

  @media screen and (min-width: 1440px) {
    top: 126px;
    right: 184px;
  }
`;

export const StyledHeroImg = styled.picture`
  height: 296px;
  width: 320px;

  @media screen and (min-width: 768px) {
    height: 351px;
    width: 378px;
  }

  @media screen and (min-width: 1440px) {
    height: 539px;
    width: 578px;
  }
`;

export const StyledHeroImgTextBox = styled.div`
  position: absolute;
  z-index: 100;
  top: 113px;
  right: 7px;
  padding: 8px;

  background: ${props => props.theme.backgroundPrimary};
  border-radius: 8px;

  @media screen and (max-width: 374px) {
    width: 100%;
    max-width: 225px;
  }

  @media screen and (min-width: 375px) {
    width: 225px;
  }

  @media screen and (min-width: 768px) {
    top: 213px;
    right: 42px;
    padding: 12px;
    width: 261px;
  }

  @media screen and (min-width: 1440px) {
    top: 336px;
    left: 342px;
    padding: 16px;
    width: 298px;
  }
`;

export const StyledHeroImageText = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.24px;
  color: ${props => props.theme.text.textRecipeCard};

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
  }

  @media screen and (min-width: 1440px) {
    line-height: 1.43;
  }
`;

export const StyledLink = styled(NavLink)`
  margin-top: 4px;
  display: flex;

  justify-content: flex-end;
  align-items: center;
  gap: 4px;

  font-weight: 400;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.2px;
  color: ${props => props.theme.text.textRecipeCard};

  transition: all ${props => props.theme.transitionDurFunc};

  svg {
    width: 18px;
    height: 18px;
    stroke: ${props => props.theme.text.textRecipeCard};
  }

  &:hover {
    scale: 1.01;
    color: ${props => props.theme.globalColors.accentPrimary};
  }

  &:hover svg {
    stroke: ${props => props.theme.globalColors.accentPrimary};
  }
`;

export const StyledBg = styled.div`
  position: absolute;
  top: 150px;
  right: 0;
  width: 354px;
  height: 700px;

  background-image: url(${img1}), url(${img7});
  background-size: cover, contain;
  background-position: top -60px right 0, top 0 right 0;
  background-repeat: no-repeat;

  @media screen and (min-device-pixel-ratio: 2) and (max-width: 767px),
    screen and (min-resolution: 192dpi) and (max-width: 767px),
    screen and (min-resolution: 2dppx) and (max-width: 767px) {
    background-image: url(${img2}), url(${img8});
  }

  @media screen and (min-width: 768px) {
    top: 0;
    width: 460px;
    height: 650px;
    background-image: url(${img3}), url(${img9});
    background-position: top 0 right 0, top 0 right 0;
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 768px),
    screen and (min-resolution: 192dpi) and (min-width: 768px),
    screen and (min-resolution: 2dppx) and (min-width: 768px) {
    background-image: url(${img4}), url(${img10});
  }

  @media screen and (min-width: 1440px) {
    width: 730px;
    height: 800px;
    background-image: url(${img5}), url(${img11});
    background-position: top 0 right 0, top 0 right 0;
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 1440px),
    screen and (min-resolution: 192dpi) and (min-width: 1440px),
    screen and (min-resolution: 2dppx) and (min-width: 1440px) {
    background-image: url(${img6}), url(${img12});
  }
`;

export const StyledArrow = styled.div`
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 455px;
    right: 63px;

    width: 180px;
    height: 100px;

    background-image: url(${img13});
    background-size: cover;
    background-position: top 0 right 0;
    background-repeat: no-repeat;
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 768px),
    screen and (min-resolution: 192dpi) and (min-width: 768px),
    screen and (min-resolution: 2dppx) and (min-width: 768px) {
    background-image: url(${img14});
  }

  @media screen and (min-width: 1440px) {
    top: 540px;
    right: 170px;
    width: 190px;
    height: 148px;

    background-image: url(${img15});
    background-size: cover;
    background-position: top 0 right 0;
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 1440px),
    screen and (min-resolution: 192dpi) and (min-width: 1440px),
    screen and (min-resolution: 2dppx) and (min-width: 1440px) {
    background-image: url(${img16});
  }
`;

export const StyledLeftSpinach = styled.div`
  position: absolute;
  top: 48px;
  left: 0;
  width: 171px;
  height: 184px;

  background-image: url(${img17});
  background-size: contain;
  background-position: top 0 left 0;
  background-repeat: no-repeat;

  @media screen and (min-device-pixel-ratio: 2) and (max-width: 767px),
    screen and (min-resolution: 192dpi) and (max-width: 767px),
    screen and (min-resolution: 2dppx) and (max-width: 767px) {
    background-image: url(${img18});
  }

  @media screen and (min-width: 768px) {
    top: 0;
    z-index: -1;
    width: 292px;
    height: 315px;
    background-image: url(${img19});
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 768px),
    screen and (min-resolution: 192dpi) and (min-width: 768px),
    screen and (min-resolution: 2dppx) and (min-width: 768px) {
    background-image: url(${img20});
  }

  @media screen and (min-width: 1440px) {
    width: 438px;
    height: 474px;
    background-image: url(${img21});
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 1440px),
    screen and (min-resolution: 192dpi) and (min-width: 1440px),
    screen and (min-resolution: 2dppx) and (min-width: 1440px) {
    background-image: url(${img22});
  }
`;
