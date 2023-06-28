import styled, { css, keyframes } from 'styled-components';

import img1 from '../../../images/pageBackgroundImg/pageBackgroundMobile.png';
import img2 from '../../../images/pageBackgroundImg/pageBackgroundMobile@2x.png';
import img3 from '../../../images/pageBackgroundImg/pageBackgroundMobile.png';
import img4 from '../../../images/pageBackgroundImg/pageBackgroundMobile@2x.png';
import img5 from '../../../images/pageBackgroundImg/pageBackgroundMobile.png';
import img6 from '../../../images/pageBackgroundImg/pageBackgroundMobile@2x.png';

const rotateDecor = keyframes`
from {
  transform: rotate(0deg);
}
to{
  transform: rotate(360deg);
}`;

export const StyledPageBackground = styled.main`
  background-color: var(--primary-font-color);

  background-repeat: no-repeat;
  background-size: 256px 392px;
  background-position: bottom -180px left 0px;
  background-image: url(${img1});

  ${props =>
    props.main &&
    css`
      padding-top: 132px;
      padding-bottom: 100px;

      @media screen and (min-width: 768px) {
        padding-top: 226px;
      }

      @media screen and (min-width: 1440px) {
        padding-top: 118px;
      }
    `}

  ${props =>
    props.page &&
    css`
      padding-top: 114px;
      padding-bottom: 100px;

      @media screen and (min-width: 768px) {
        padding-top: 136px;
        padding-bottom: 150px;
      }

      @media screen and (min-width: 1440px) {
        padding-top: 164px;
      }
    `}

     ${props =>
    props.ingredientsPage &&
    css`
      padding-top: 32px;
      padding-bottom: 100px;

      @media screen and (min-width: 768px) {
        padding-top: 50px;
        padding-bottom: 200px;
      }
    `}

  ${props =>
    !props.page &&
    !props.main &&
    !props.ingredientsPage &&
    css`
      padding-top: 164px;
      padding-bottom: 100px;

      @media screen and (min-width: 768px) {
        padding-bottom: 203px;
      }

      @media screen and (min-width: 1440px) {
        padding-top: 198px;
      }
    `}

  @media screen and (min-device-pixel-ratio: 2) and (max-width: 767px),
    screen and (min-resolution: 192dpi) and (max-width: 767px),
    screen and (min-resolution: 2dppx) and (max-width: 767px) {
    background-image: url(${img2});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${img3});
    background-size: 423px 646px;
    background-position: bottom -280px left 0px;
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 768px),
    screen and (min-resolution: 192dpi) and (min-width: 768px),
    screen and (min-resolution: 2dppx) and (min-width: 768px) {
    background-image: url(${img4});
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${img5});
    background-size: 558px 852px;
    background-position: bottom -400px left 0;
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 1440px),
    screen and (min-resolution: 192dpi) and (min-width: 1440px),
    screen and (min-resolution: 2dppx) and (min-width: 1440px) {
    background-image: url(${img6});
  }
`;

export const StyledBackgroungDecor1 = styled.picture`
  position: absolute;
  top: 76px;
  left: 120px;
  animation: ${rotateDecor} 3s linear infinite;

  @media screen and (min-width: 768px) {
    top: 85px;
    left: 219px;
  }

  @media screen and (min-width: 1440px) {
    top: 117px;
    left: 328px;
  }
`;

export const StyledBackgroungDecor2 = styled.picture`
  position: absolute;
  top: 142px;
  left: 65%;
  animation: ${rotateDecor} 3s linear infinite;

  @media screen and (min-width: 768px) {
    top: 155px;
    left: 65%;
  }

  @media screen and (min-width: 1440px) {
    top: 200px;
    left: 65%;
  }
`;

export const StyledBackgroungDecor3 = styled.picture`
  position: absolute;
  top: 109px;
  right: 16px;
  animation: ${rotateDecor} 3s linear infinite;

  @media screen and (min-width: 768px) {
    top: 98px;
    right: 23px;
  }

  @media screen and (min-width: 1440px) {
    top: 130px;
    right: 172px;
  }
`;
