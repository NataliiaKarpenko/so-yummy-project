import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledCategoriesList = styled.ul`
  padding: 10px;
  display: flex;
  gap: 28px;

  @media screen and (min-width: 768px) {
    padding: 10px 11px;
    gap: 55px;
  }

  li {
    flex-shrink: 0;
  }
`;

export const ContainerWrapper = styled.div`
  margin-bottom: 32px;
  padding-left: 19px;
  padding-bottom: 22px;

  border-bottom: 1px solid ${props => props.theme.categoriesBottom};

  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: thin; /* For Firefox */
  -ms-overflow-style: none; /*For Internet Explorer and Edge */
  &::-webkit-scrollbar {
    height: 0;
    width: 0;
    background-color: transparent;
  }

  ${StyledCategoriesList}:hover & {
    transform: translateX(-50%);
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
    padding-bottom: 18px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  color: ${props => props.theme.text.categoryLinks};

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  &:hover {
    color: ${props => props.theme.globalColors.accentPrimary};
    scale: 1.01;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -34px;
    width: 100%;
    height: 2px;
    transform: scaleX(0);
    transition: all ${props => props.theme.transitionDurFunc};

    @media screen and (min-width: 768px) {
      bottom: -29px;
    }
  }

  &.active {
    position: relative;
    color: ${props => props.theme.globalColors.accentPrimary};

    &::after {
      background-color: ${props => props.theme.globalColors.accentPrimary};
      transform: scaleX(1);
    }
  }
`;
