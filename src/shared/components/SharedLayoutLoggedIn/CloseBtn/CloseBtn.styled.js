import styled, { css } from 'styled-components';

export const StyledCloseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: transparent;

  stroke: ${props => props.theme.text.textSecondary};
  transition: all ${props => props.theme.transitionDurFunc};

  &:hover {
    stroke: ${props => props.theme.globalColors.accentPrimary};
    scale: 1.01;
  }

  ${props =>
    props.menuBtn &&
    css`
      width: 32px;
      height: 32px;
    `}

  ${props =>
    props.modalCloseBtn &&
    css`
      position: absolute;
      top: 18px;
      right: 18px;
      width: 20px;
      height: 20px;

      @media screen and (min-width: 768px) {
        top: 24px;
        right: 24px;
        width: 24px;
        height: 24px;
      }
    `}

    ${props =>
    props.motivationBtn &&
    css`
      position: absolute;
      top: 128px;
      left: 50%;
      transform: translate(-50%);
      width: 40px;
      height: 40px;
      background-color: ${props => props.theme.globalColors.accentPrimary};
      border-radius: 50%;

      @media screen and (min-width: 768px) {
        top: 180px;
        width: 48px;
        height: 48px;
      }

      svg {
        width: 24px;
        height: 24px;
        stroke: ${props => props.theme.globalColors.light};

        @media screen and (min-width: 768px) {
          width: 28px;
          height: 28px;
        }
      }
    `}

     ${props =>
    props.deleteDishPhotoBtn &&
    css`
      position: absolute;
      top: -13px;
      right: -13px;
      width: 30px;
      height: 30px;

      background-color: ${props => props.theme.globalColors.accentPrimary};
      border-radius: 50%;

      @media screen and (min-width: 768px) {
        top: -18px;
        right: -18px;
        width: 40px;
        height: 40px;
      }

      svg {
        stroke: ${props => props.theme.globalColors.light};
        width: 20px;
        height: 20px;

        @media screen and (min-width: 768px) {
          width: 24px;
          height: 24px;
        }
      }
    `}

    ${props =>
    props.ingredientFieldBtn &&
    css`
      width: 18px;
      height: 18px;
      margin-left: auto;

      svg {
        width: 18px;
        height: 18px;
      }
    `}
`;
