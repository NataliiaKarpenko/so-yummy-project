import styled from 'styled-components';

export const StyledSubmitButton = styled.button`
  padding-top: 12px;
  padding-bottom: 12px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.globalColors.accentPrimary};
  border-radius: 6px;
  border: 1px solid transparent;

  font-family: inherit;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.12;
  color: ${props => props.theme.globalColors.light};
  transition: all ${props => props.theme.transitionDurFunc};

  @media screen and (min-width: 768px) {
    height: 59px;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  &:hover {
    scale: 1.01;
    color: ${props => props.theme.globalColors.personalDataText};
  }
`;

export const StyledSubscribeBtn = styled(StyledSubmitButton)`
  height: 38px;
  font-size: 14px;
  line-height: 1.14;
  padding-top: 11px;
  padding-bottom: 11px;
  background: ${props => props.theme.button.trashMy};

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    height: 50px;
    padding-top: 16px;
    padding-bottom: 16px;
    font-size: 16px;
    line-height: 1.12;
    flex-grow: 1;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 16px;
    height: 59px;
    padding-top: 21px;
    padding-bottom: 21px;
    font-size: 16px;
  }
  &:hover {
    background-color: ${props => props.theme.button.hoverReverse};
  }
`;

export const StyledUserInfoModalBtn = styled(StyledSubmitButton)`
  @media screen and (max-width: 767px) {
    margin-top: 24px;
    padding-top: 14px;
    padding-bottom: 14px;

    font-size: 14px;
    line-height: 1.29;
  }

  &:hover {
    border: 1px solid ${props => props.theme.button.logoutBorder};
    background-color: ${props => props.theme.button.hover};
    scale: 1.01;
    color: ${props => props.theme.text.logoutHover};
  }

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    padding-top: 18px;
    padding-bottom: 18px;
    height: 59px;
  }
`;
