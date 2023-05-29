import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledSocialNetworks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;

  @media screen and (min-width: 768px) {
    gap: 18px;
  }
`;

export const StyledSocialNetworksLink = styled(NavLink)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all var(--transition-dur-func);

  fill: var(--primary-btn-color);

  &:hover {
    scale: 1.01;
    fill: var(--secondary-background-color);
  }
`;
