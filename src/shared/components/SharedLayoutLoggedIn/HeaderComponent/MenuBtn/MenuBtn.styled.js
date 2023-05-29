import styled from 'styled-components';

export const StyledMenuBtn = styled.button`
  border: none;
  background-color: transparent;

  stroke: var(--secondary-btn-color);
  transition: all var(--transition-dur-func);

  svg {
    @media screen and (min-width: 768px) {
      width: 32px;
      height: 32px;
    }
  }

  &:hover {
    stroke: var(--primary-btn-color);
    scale: 1.01;
  }
`;
