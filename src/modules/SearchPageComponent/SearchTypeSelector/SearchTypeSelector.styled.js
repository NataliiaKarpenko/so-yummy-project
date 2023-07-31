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
  color: ${props => props.theme.text.titlePrimary};
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
  background-color: ${props => props.theme.select.inputBackground};
  border-radius: 6px;
  border: 1px solid ${props => props.theme.select.outline};

  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.24px;
  color: ${props => props.theme.text.dropDown};

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
    stroke: ${props => props.theme.globalColors.accentPrimary};
    scale: 1.01;
  }
`;

export const Icon = styled.svg`
  width: 14px;
  height: 14px;
  fill: none;
  stroke: ${props => props.theme.text.dropDown};
  transition: all ${props => props.theme.transitionDurFunc};

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
    transition: all ${props => props.theme.transitionDurFunc};
  }
  &.dropdown-exit {
    transform: translateY(0);
  }

  &.dropdown-exit-active {
    transform: translateY(-100%);
    transition: all ${props => props.theme.transitionDurFunc};
  }

  position: absolute;
  width: 146px;
  right: 0;
  bottom: -62px;
  z-index: 10;

  padding-top: 8px;
  padding-bottom: 10px;
  background-color: ${props => props.theme.select.dropDownBackground};
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
  color: ${props => props.theme.text.inputPlaceholderAddRecipe};
  cursor: pointer;
  transition: all ${props => props.theme.transitionDurFunc};

  &:not(:last-child) {
    margin-bottom: 8px;

    @media screen and (min-width: 768px) {
      margin-bottom: 10px;
    }
  }

  &.active {
    color: ${props => props.theme.text.dropDownActive};
  }

  &.hovered {
    background-color: ${props => props.theme.select.hovered};
  }
`;
