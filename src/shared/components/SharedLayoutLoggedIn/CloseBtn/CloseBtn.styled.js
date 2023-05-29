import styled, { css } from 'styled-components';

export const StyledCloseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: transparent;

  stroke: var(--secondary-btn-color);
  transition: all var(--transition-dur-func);

  &:hover {
    stroke: var(--primary-btn-color);
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
        position: absolute;
        top: 24px;
        right: 24px;
        width: 24px;
        height: 24px;
      }
    `}
`;
