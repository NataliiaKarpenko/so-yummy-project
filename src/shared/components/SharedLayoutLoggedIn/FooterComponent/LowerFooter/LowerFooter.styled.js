import styled from 'styled-components';

import img1 from '../../../../images/lowerFooterImg/lowerFooterMobile.png';
import img2 from '../../../../images/lowerFooterImg/lowerFooterMobile@2x.png';
import img3 from '../../../../images/lowerFooterImg/lowerFooterTab.png';
import img4 from '../../../../images/lowerFooterImg/lowerFooterTab@2x.png';
import img5 from '../../../../images/lowerFooterImg/lowerFooterDesktop.png';
import img6 from '../../../../images/lowerFooterImg/lowerFooterDesktop@2x.png';

export const StyledLowerFooter = styled.footer`
  padding-top: 28px;
  padding-bottom: 28px;
  background-image: url(${img1});
  background-size: 170px, 146px, cover;
  background-position: bottom 0 right 0;
  background-repeat: no-repeat;

  @media screen and (min-device-pixel-ratio: 2) and (max-width: 767px),
    screen and (min-resolution: 192dpi) and (max-width: 767px),
    screen and (min-resolution: 2dppx) and (max-width: 767px) {
    background-image: url(${img2});
  }

  @media screen and (min-width: 768px) {
    padding-top: 32px;
    padding-bottom: 32px;
    background-image: url(${img3});
    background-size: 290px, 313px, cover;
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 768px),
    screen and (min-resolution: 192dpi) and (min-width: 768px),
    screen and (min-resolution: 2dppx) and (min-width: 768px) {
    background-image: url(${img4});
  }

  @media screen and (min-width: 1440px) {
    padding-top: 50px;
    padding-bottom: 50px;
    background-image: url(${img5});
    background-size: 438px, 474px, cover;
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 1440px),
    screen and (min-resolution: 192dpi) and (min-width: 1440px),
    screen and (min-resolution: 2dppx) and (min-width: 1440px) {
    background-image: url(${img6});
  }
`;

export const StyledLowerFooterText = styled.div`
  font-weight: 400;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.01em;
  color: var(--secondary-btn-color);
  opacity: 0.5;

  @media screen and (min-width: 768px) {
    font-weight: 500;
    font-size: 14px;
  }
`;
