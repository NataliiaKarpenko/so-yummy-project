import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledCategoriesList = styled.ul`
  padding: 10px;
  display: flex;
  gap: 28px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
    padding: 10px 11px;
    gap: 55px;
  }

  li {
    flex-shrink: 0;
  }
`;

export const ContainerWrapper = styled.div`
  padding-left: 19px;
  padding-bottom: 22px;

  border-bottom: 1px solid #e0e0e0;

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
    padding-bottom: 18px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  color: #e0e0e0;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    color: #bdbdbd;
  }

  &:hover {
    color: var(--primary-btn-color);
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
    transition: all var(--transition-dur-func);

    @media screen and (min-width: 768px) {
      bottom: -29px;
    }
  }

  &.active {
    position: relative;
    color: var(--primary-btn-color);

    &::after {
      background-color: var(--primary-btn-color);
      transform: scaleX(1);
    }
  }
`;
