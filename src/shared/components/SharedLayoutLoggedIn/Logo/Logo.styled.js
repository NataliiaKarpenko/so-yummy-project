import styled, { css } from 'styled-components';

export const StyledLogo = styled.svg`
  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }

  fill: ${props => {
    switch (props.status) {
      case 'headerLogo':
        return props.theme.globalColors.accentPrimary;
      case 'footerLogo':
        return '#ebf3d4';
      default:
        return;
    }
  }};

  stroke: ${props => {
    switch (props.status) {
      case 'headerLogo':
        return props.theme.globalColors.light;
      case 'footerLogo':
        return props.theme.globalColors.accentPrimary;
      default:
        return;
    }
  }};

  &:hover {
    fill: ${props => {
      switch (props.status) {
        case 'headerLogo':
          return props.theme.button.hover;
        case 'footerLogo':
          return '#ebf3d4';
        default:
          return;
      }
    }};

    stroke: ${props => {
      switch (props.status) {
        case 'headerLogo':
          return props.theme.text.logoutHover;
        case 'footerLogo':
          return props.theme.globalColors.accentPrimary;
        default:
          return;
      }
    }};
  }

  ${props =>
    props.menuLogo &&
    css`
      &:hover {
        fill: ${props => props.theme.button.hover};
        stroke: props.theme.globalColors.accentPrimary;
        scale: 1.01;
      }
    `}
`;
