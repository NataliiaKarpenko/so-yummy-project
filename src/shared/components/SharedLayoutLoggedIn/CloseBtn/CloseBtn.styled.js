import styled from 'styled-components';

export const StyledCloseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: transparent;

  stroke: var(--secondary-btn-color);
  transition: all var(--transition-dur-func);

  .MenuBtn {
    width: 32px;
    height: 32px;

    &:hover {
      stroke: var(--primary-btn-color);
      scale: 1.05;
    }
  }

  .ModalBtn {
    position: absolute;
    top: 18px;
    right: 18px;
    width: 20px;
    height: 20px;

    &:hover {
      stroke: var(--primary-btn-color);
      scale: 1.05;
    }

    @media screen and (min-width: 768px) {
      position: absolute;
      top: 24px;
      right: 24px;
      width: 24px;
      height: 24px;
    }
  }
`;
