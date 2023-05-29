import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledFooterNavigationItem = styled.li`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  transition: all var(--transition-dur-func);

  &:not(:last-child) {
    margin-bottom: 14px;

    @media screen and (min-width: 768px) {
      margin-bottom: 20px;
    }

    @media screen and (min-width: 1440px) {
      margin-bottom: 24px;
    }
  }

  &:hover {
    scale: 1.01;
  }
`;

export const StyledFooterNavigationLink = styled(NavLink)`
  position: relative;
  color: var(--primary-font-color);
  transition: all var(--transition-dur-func);

  &:hover {
    color: var(--primary-btn-color);
  }

  &.active {
    position: relative;
    color: var(--primary-btn-color);
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

  &::after {
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
    left: 0;
    bottom: 0;
    background: var(--primary-btn-color);
    transform: scaleX(0);
    transition: all var(--transition-dur-func);
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;
