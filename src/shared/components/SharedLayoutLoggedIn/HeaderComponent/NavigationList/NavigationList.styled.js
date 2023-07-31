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
  transition: all ${props => props.theme.transitionDurFunc};

  &:hover {
    scale: 1.01;
  }
`;

export const StyledNavLink = styled(NavLink)`
  position: relative;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.6;
  color: ${props =>
    props.main
      ? props.theme.globalColors.personalDataText
      : props.recipe === true
      ? props.theme.globalColors.personalDataText
      : props.theme.text.textSecondary};

  stroke: ${props =>
    props.main
      ? props.theme.globalColors.personalDataText
      : props.recipe === true
      ? props.theme.globalColors.personalDataText
      : props.theme.text.textSecondary};
  fill: none;
  transition: all ${props => props.theme.transitionDurFunc};

  color: ${props =>
    props.active ? props.theme.globalColors.accentPrimary : ''};

  @media screen and (max-width: 1439px) {
    font-size: 18px;
    line-height: 1;
    letter-spacing: -0.02em;
  }

  &.active {
    position: relative;
    color: ${props => props.theme.globalColors.accentPrimary};
    font-weight: 500;
    stroke: ${props => props.theme.globalColors.accentPrimary};
  }

  &.active::after {
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
    left: 0;
    bottom: 0;
    background: ${props => props.theme.globalColors.accentPrimary};
    transform: scaleX(1);
  }

  &:hover {
    color: ${props => props.theme.globalColors.accentPrimary};
    stroke: ${props => props.theme.globalColors.accentPrimary};
  }

  &::after {
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
    left: 0;
    bottom: 0;
    background: ${props => props.theme.globalColors.accentPrimary};
    transform: ${props => (props.active ? 'scaleX(1)' : 'scaleX(0)')};
    transition: all ${props => props.theme.transitionDurFunc};
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
