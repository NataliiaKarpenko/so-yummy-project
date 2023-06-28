import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  padding-top: 18px;
`;

export const StyledNav = styled.nav`
  @media screen and (min-width: 1440px) {
    width: 801px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 226px;
  }
`;

export const StyledHeaderLogoContainer = styled(NavLink)`
  transition: all var(--transition-dur-func);

  &:hover {
    scale: 1.01;
  }

  &:hover svg {
    fill: var(--secondary-btn-color);
  }
`;

export const StyledHeaderBox = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 50px;
  }
`;
