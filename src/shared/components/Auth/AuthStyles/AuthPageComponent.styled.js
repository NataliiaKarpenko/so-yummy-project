import styled from 'styled-components';

import img1 from '../../../images/authFormImg/formBackgroundMobile.jpeg';
import img2 from '../../../images/authFormImg/formBackgroundMobile@2x.jpeg';
import img3 from '../../../images/authFormImg/formBackgroundTab.jpeg';
import img4 from '../../../images/authFormImg/formBackgroundTab@2x.jpeg';
import img5 from '../../../images/authFormImg/formBackgroundDesktop.jpeg';
import img6 from '../../../images/authFormImg/formBackgroundDesktop@2x.jpeg';
import img7 from '../../../images/authFormImg/signMobile.png';
import img8 from '../../../images/authFormImg/signMobile@2x.png';
import img9 from '../../../images/authFormImg/signTab.png';
import img10 from '../../../images/authFormImg/signTab@2x.png';
import img11 from '../../../images/authFormImg/signDesktop.png';
import img12 from '../../../images/authFormImg/signDesktop@2x.png';

export const StyledAuthPageContainer = styled.div`
  min-height: 100vh;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;

  background-image: url(${img7}), url(${img1});
  background-size: 285px 250px, 100% 560px;
  background-position: top 85px left 50%, bottom;
  background-repeat: no-repeat;

  @media screen and (min-device-pixel-ratio: 2) and (max-width: 767px),
    screen and (min-resolution: 192dpi) and (max-width: 767px),
    screen and (min-resolution: 2dppx) and (max-width: 767px) {
    background-image: url(${img8}), url(${img2});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${img9}), url(${img3});
    background-size: 409px 359px, 100% 700px;
    background-position: top 100px left 50%, bottom;
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 768px),
    screen and (min-resolution: 192dpi) and (min-width: 768px),
    screen and (min-resolution: 2dppx) and (min-width: 768px) {
    background-image: url(${img10}), url(${img4});
  }

  @media screen and (max-width: 1439px) {
    justify-content: center;
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${img11}), url(${img5});
    background-size: 532px 468px, 100% 350px;
    align-items: center;
    justify-content: end;
    background-position: top 160px left 113px, bottom;
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 1440px),
    screen and (min-resolution: 192dpi) and (min-width: 1440px),
    screen and (min-resolution: 2dppx) and (min-width: 1440px) {
    background-image: url(${img12}), url(${img6});
  }
`;

export const StyledAuthPageContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 767px) {
    justify-content: flex-end;
    padding-top: 305px;
    padding-bottom: ${props => {
      switch (props.status) {
        case 'register':
          return '118px';
        case 'signin':
          return '153px';
        default:
          return;
      }
    }};
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    padding-top: 443px;
    padding-bottom: ${props => {
      switch (props.status) {
        case 'register':
          return '59px';
        case 'signin':
          return '120px';
        default:
          return;
      }
    }};
  }

  @media screen and (min-width: 1440px) {
    padding-top: 122px;
    padding-right: 180px;
    background-size: 100% 325px;
    padding-bottom: ${props => {
      switch (props.status) {
        case 'register':
          return '122px';
        case 'signin':
          return '153px';
        default:
          return;
      }
    }};
  }
`;
