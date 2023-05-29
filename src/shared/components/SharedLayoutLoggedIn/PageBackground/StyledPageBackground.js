import styled, { keyframes } from 'styled-components';

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
  position: relative;
  padding-top: 100px;
  padding-bottom: 100px;
  background-repeat: no-repeat;
  background-size: 256px 392px;
  background-position: bottom -180px left 0px;
  background-image: url(${img1});

  @media screen and (min-device-pixel-ratio: 2) and (max-width: 767px),
    screen and (min-resolution: 192dpi) and (max-width: 767px),
    screen and (min-resolution: 2dppx) and (max-width: 767px) {
    background-image: url(${img2});
  }

  @media screen and (min-width: 768px) {
    padding-bottom: 203px;
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
    padding-top: 138px;
    background-image: url(${img5});
    background-size: 558px 852px;
    background-position: bottom -380px left 0px;
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 1440px),
    screen and (min-resolution: 192dpi) and (min-width: 1440px),
    screen and (min-resolution: 2dppx) and (min-width: 1440px) {
    background-image: url(${img6});
  }
`;

export const StyledBackgroungDecor1 = styled.picture`
  position: absolute;
  top: 12px;
  left: 120px;
  animation: ${rotateDecor} 3s linear infinite;

  @media screen and (min-width: 768px) {
    top: 21px;
    left: 219px;
  }

  @media screen and (min-width: 1440px) {
    top: 56px;
    left: 328px;
  }
`;

export const StyledBackgroungDecor2 = styled.picture`
  position: absolute;
  top: 78px;
  left: 65%;
  animation: ${rotateDecor} 3s linear infinite;

  @media screen and (min-width: 768px) {
    top: 91px;
    left: 65%;
  }

  @media screen and (min-width: 1440px) {
    top: 139px;
    left: 65%;
  }
`;

export const StyledBackgroungDecor3 = styled.picture`
  position: absolute;
  top: 45px;
  right: 16px;
  animation: ${rotateDecor} 3s linear infinite;

  @media screen and (min-width: 768px) {
    top: 34px;
    right: 23px;
  }

  @media screen and (min-width: 1440px) {
    top: 69px;
    right: 172px;
  }
`;
