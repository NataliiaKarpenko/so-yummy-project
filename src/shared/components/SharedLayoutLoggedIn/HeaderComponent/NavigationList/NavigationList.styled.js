import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;

    gap: 30px;
  }
`;

export const StyledNavigationItem = styled.li`
  transition: all var(--transition-dur-func);

  &:hover {
    scale: 1.01;
  }
`;

export const StyledNavLink = styled(NavLink)`
  position: relative;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.6;
  color: var(--secondary-font-color);

  stroke: var(--secondary-font-color);
  fill: none;
  transition: all var(--transition-dur-func);

  color: ${props => (props.active ? 'var(--primary-btn-color)' : '')};

  @media screen and (max-width: 1439px) {
    font-size: 18px;
    line-height: 1;
    letter-spacing: -0.02em;
  }

  &.active {
    position: relative;
    color: var(--primary-btn-color);
    font-weight: 500;
    stroke: var(--primary-btn-color);
  }

  &.active::after {
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
    left: 0;
    bottom: 0;
    background: var(--primary-btn-color);
    transform: scaleX(1);
  }

  &:hover {
    color: var(--primary-btn-color);
    stroke: var(--primary-btn-color);
  }

  &::after {
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
    left: 0;
    bottom: 0;
    background: var(--primary-btn-color);
    transform: ${props => (props.active ? 'scaleX(1)' : 'scaleX(0)')};
    transition: all var(--transition-dur-func);
  }
`;

export const StyledSearchNavLink = styled(StyledNavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  svg {
    @media screen and (min-width: 1440px) {
      width: 24px;
      height: 24px;
    }
  }
`;
