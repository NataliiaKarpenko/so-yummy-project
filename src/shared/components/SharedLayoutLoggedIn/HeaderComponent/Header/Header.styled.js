import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.div`
  padding-top: 18px;
`;

export const StyledNav = styled.nav`
  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    gap: 187px;
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
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 50px;
  }
`;
