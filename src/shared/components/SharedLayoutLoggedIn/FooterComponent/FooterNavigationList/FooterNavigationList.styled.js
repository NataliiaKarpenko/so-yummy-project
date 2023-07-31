import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledFooterNavigationItem = styled.li`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  transition: all ${props => props.theme.transitionDurFunc};

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
  color: ${props => props.theme.globalColors.light};
  transition: all ${props => props.theme.transitionDurFunc};

  &:hover {
    color: ${props => props.theme.button.trashMy};
  }

  &.active {
    position: relative;
    color: ${props => props.theme.button.trashMy};
  }

  &.active::after {
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
    left: 0;
    bottom: 0;
    background: ${props => props.theme.button.trashMy};
    transform: scaleX(1);
  }

  &::after {
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
    left: 0;
    bottom: 0;
    background: ${props => props.theme.button.trashMy};
    transform: scaleX(0);
    transition: all ${props => props.theme.transitionDurFunc};
  }
`;

export const StyledFooterIngredientsLink = styled(Link)`
  position: relative;
  color: ${props => props.theme.globalColors.light};
  transition: all ${props => props.theme.transitionDurFunc};

  &:hover {
    color: ${props => props.theme.button.trashMy};
  }

  &.active {
    position: relative;
    color: ${props => props.theme.button.trashMy};
  }

  &.active::after {
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
    left: 0;
    bottom: 0;
    background: ${props => props.theme.button.trashMy};
    transform: scaleX(1);
  }

  &::after {
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
    left: 0;
    bottom: 0;
    background: ${props => props.theme.button.trashMy};
    transform: scaleX(0);
    transition: all ${props => props.theme.transitionDurFunc};
  }
`;
