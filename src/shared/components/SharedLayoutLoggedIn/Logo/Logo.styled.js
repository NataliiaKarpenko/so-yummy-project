import styled from 'styled-components';

export const StyledLogo = styled.svg`
  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
    transition: all var(--transition-dur-func);
  }

  &:hover {
    scale: 1.05;
    transform: scale 1.05;
  }

  &.HeaderLogo {
    fill: var(--primary-btn-color);
    stroke: var(--primary-font-color);

    &:hover {
      fill: var(--secondary-btn-color);
    }
  }
`;
