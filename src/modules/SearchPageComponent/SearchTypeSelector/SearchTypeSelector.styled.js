import styled from 'styled-components';

export const StyledSearchTypeSelector = styled.div`
  position: relative;
  margin-top: 24px;
  margin-bottom: 50px;

  @media screen and (min-width: 768px) {
    margin-top: 28px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 90px;
  }
`;

export const SelectorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 223px;

  @media screen and (min-width: 768px) {
    width: 265px;
  }

  @media screen and (min-width: 1440px) {
    width: 310px;
  }
`;

export const CriteriaBox = styled.p`
  color: #001833;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: -0.24px;

  @media screen and (min-width: 678px) {
    font-size: 14px;
  }
`;

export const SelectorBox = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 14px;
  width: 146px;
  background-color: var(--default-background-color);
  border-radius: 6px;

  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.24px;
  color: rgba(0, 0, 0, 0.5);

  @media screen and (min-width: 678px) {
    width: 175px;
    padding: 10px 14px;
    font-size: 14px;
    letter-spacing: -0.28px;
  }

  @media screen and (min-width: 1440px) {
    width: 198px;
    padding: 14px 14px;
  }

  &:hover svg {
    stroke: var(--primary-btn-color);
    scale: 1.01;
  }
`;

export const Icon = styled.svg`
  width: 14px;
  height: 14px;
  fill: none;
  stroke: rgba(0, 0, 0, 0.5);
  transition: all var(--transition-dur-func);

  @media screen and (min-width: 678px) {
    width: 20px;
    height: 20px;
  }
`;

export const SelectorList = styled.ul`
  &.dropdown-enter {
    transform: translateY(-100%);
    z-index: -11;
  }

  &.dropdown-enter-active {
    transform: translateY(0);
    transition: all var(--transition-dur-func);
  }
  &.dropdown-exit {
    transform: translateY(0);
  }

  &.dropdown-exit-active {
    transform: translateY(-100%);
    transition: all var(--transition-dur-func);
  }

  position: absolute;
  width: 146px;
  right: 0;
  bottom: -62px;
  z-index: 10;

  padding-top: 8px;
  padding-bottom: 10px;
  background-color: var(--primary-font-color);
  border-radius: 0px 0px 6px 6px;

  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.24px;

  @media screen and (min-width: 678px) {
    bottom: -77px;
    width: 175px;
    padding-top: 10px;
    padding-bottom: 14px;

    font-size: 14px;
    letter-spacing: -0.28px;
  }

  @media screen and (min-width: 1440px) {
    bottom: -80px;
    width: 198px;
    padding-top: 14px;
    padding-bottom: 14px;
    font-size: 14px;
    letter-spacing: -0.28px;
  }
`;

export const SelectorItem = styled.li`
  padding-left: 14px;
  color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: all var(--transition-dur-func);

  &:not(:last-child) {
    margin-bottom: 8px;

    @media screen and (min-width: 768px) {
      margin-bottom: 10px;
    }
  }

  &.active {
    color: var(--primary-btn-color);
  }

  &.hovered {
    background-color: var(--secondary-background-color);
  }
`;
