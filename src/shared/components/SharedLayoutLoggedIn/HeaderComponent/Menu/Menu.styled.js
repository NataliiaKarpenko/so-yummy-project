import styled from 'styled-components';

import img1 from '../../../../images/burgerMenuImg/burgerMenuMobile.png';
import img2 from '../../../../images/burgerMenuImg/burgerMenuMobile@2x.png';
import img3 from '../../../../images/burgerMenuImg/burgerMenuTab.png';
import img4 from '../../../../images/burgerMenuImg/burgerMenuTab@2x.png';

export const StyledMenu = styled.div`
  &.menu-enter {
    transform: translateY(-100%);
  }

  &.menu-enter-active {
    transform: translateY(0);
    transition: all ${props => props.theme.transitionDurFunc};
  }
  &.menu-exit {
    transform: translateY(0);
  }

  &.menu-exit-active {
    transform: translateY(-100%);
    transition: all ${props => props.theme.transitionDurFunc};
  }

  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;

  height: 100vh;
  height: -moz-available;
  height: -webkit-fill-available;
  height: fill-available;
  width: 100%;

  background-color: ${props => props.theme.button.trashFavorite};
  background-image: url(${img1});
  background-size: 312px 334px;
  background-position: bottom right;
  background-repeat: no-repeat;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 16px;
  padding-right: 16px;
  overflow-y: scroll;

  display: flex;
  gap: 32px;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-device-pixel-ratio: 2) and (max-width: 767px),
    screen and (min-resolution: 192dpi) and (max-width: 767px),
    screen and (min-resolution: 2dppx) and (max-width: 767px) {
    background-image: url(${img2});
  }

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 32px;
    gap: 40px;

    background-image: url(${img3});
    background-size: 582px 496px;
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 768px),
    screen and (min-resolution: 192dpi) and (min-width: 768px),
    screen and (min-resolution: 2dppx) and (min-width: 768px) {
    background-image: url(${img4});
  }
`;

export const StyledMenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
