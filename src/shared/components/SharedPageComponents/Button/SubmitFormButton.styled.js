import styled, { css } from 'styled-components';

export const StyledSearchBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.button.background};
  border: none;
  border-radius: 24px 44px;

  font-weight: 400;
  line-height: 1.5;
  color: ${props => props.theme.globalColors.light};

  transition: all ${props => props.theme.transitionDurFunc};

  ${props =>
    props.searchForm &&
    css`
      position: absolute;
      top: 0;
      right: -2px;
      height: 52px;
      padding: 16px 32px;
      font-size: 14px;

      @media screen and (min-width: 768px) {
        padding: 18px 45px;
        height: 59px;
        font-size: 16px;
      }

      @media screen and (min-width: 1440px) {
        padding: 23px 55px;
        height: 71px;
      }
    `}

  ${props =>
    props.addForm &&
    css`
      padding: 12px 48px;
      height: 46px;
      font-size: 16px;

      @media screen and (min-width: 1440px) {
        padding: 14px 64px;
        height: 52px;
      }
    `}

  

  &:hover {
    scale: 1.01;
    background-color: ${props => props.theme.button.hoverReverse};
    color: ${props => props.theme.text.hover};
  }
`;
