import styled from 'styled-components';

export const StyledUserInfoDropDown = styled.div`
  &.dropdown-enter {
    transform: scaleY(0);
    opacity: 0;
  }

  &.dropdown-enter-active {
    transform: scaleY(1);

    opacity: 1;
    transition: all ${props => props.theme.transitionDurFunc};
  }
  &.dropdown-exit {
    transform: scaleY(1);
    opacity: 1;
  }

  &.dropdown-exit-active {
    transform: scaleY(0);
    opacity: 0;
    transition: all ${props => props.theme.transitionDurFunc};
  }

  position: absolute;
  top: 50px;
  right: -50%;
  z-index: 990;
  padding: 18px;
  height: 130px;
  width: 161px;

  background: ${props => props.theme.lowerFooter};
  border: 1px solid #8baa36;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media screen and (min-width: 768px) {
    top: 55px;
    width: 177px;
    height: 134px;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 50%;

    width: 10px;
    height: 10px;
    background: ${props => props.theme.lowerFooter};
    transform: translateY(-50%) rotate(45deg);
    z-index: 0;
    border-top: 1px solid ${props => props.theme.globalColors.accentPrimary};
    border-left: 1px solid ${props => props.theme.globalColors.accentPrimary};
  }
`;

export const EditContainer = styled.div`
  margin-bottom: 28px;
  display: flex;
  gap: 35px;
  align-items: center;

  stroke: ${props => props.theme.text.textSecondary};
  fill: none;
  transition: all ${props => props.theme.transitionDurFunc};

  cursor: pointer;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }

  &:hover {
    scale: 1.01;
    stroke: ${props => props.theme.globalColors.accentPrimary};
    fill: ${props => props.theme.globalColors.accentPrimary};
  }

  &:hover p {
    color: ${props => props.theme.globalColors.accentPrimary};
  }
`;

export const StyledText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.6;

  color: ${props => props.theme.text.textSecondary};
  transition: all ${props => props.theme.transitionDurFunc};
`;

export const StyledInfoBtn = styled.button`
  height: 43px;
  width: 125px;
  padding-top: 12px;
  padding-bottom: 12px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  background: ${props => props.theme.globalColors.accentPrimary};
  border: 1px solid transparent;
  border-radius: 24px 44px;

  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;

  color: ${props => props.theme.globalColors.light};
  stroke: ${props => props.theme.globalColors.light};
  transition: all ${props => props.theme.transitionDurFunc};

  @media screen and (min-width: 768px) {
    width: 141px;
  }

  &:hover {
    border: 1px solid ${props => props.theme.button.logoutBorder};
    background-color: ${props => props.theme.button.hover};
    scale: 1.01;
    color: ${props => props.theme.text.logoutHover};
    stroke: ${props => props.theme.text.logoutHover};
  }
`;
