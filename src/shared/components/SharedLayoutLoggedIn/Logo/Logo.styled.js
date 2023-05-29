import styled, { css } from 'styled-components';

export const StyledLogo = styled.svg`
  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }

  fill: ${props => {
    switch (props.status) {
      case 'headerLogo':
        return 'var(--primary-btn-color)';
      case 'footerLogo':
        return 'var(--secondary-background-color)';
      default:
        return;
    }
  }};

  stroke: ${props => {
    switch (props.status) {
      case 'headerLogo':
        return 'var(--primary-font-color)';
      case 'footerLogo':
        return 'var(--primary-btn-color)';
      default:
        return;
    }
  }};

  ${props =>
    props.menuLogo &&
    css`
      &:hover {
        fill: var(--secondary-btn-color);
        stroke: var(--primary-btn-color);
        scale: 1.01;
      }
    `}
`;
