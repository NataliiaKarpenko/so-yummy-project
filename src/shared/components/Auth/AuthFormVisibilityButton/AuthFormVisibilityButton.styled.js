import styled from 'styled-components';

export const StyledAuthFormVisibilityBtnContainer = styled.div`
  margin-top: 7px;
  display: flex;
  align-items: center;
  gap: 8px;

  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: rgba(250, 250, 250, 0.8);

  @media screen and (min-width: 768px) {
    margin-top: 10px;
    font-size: 14px;
  }
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  border: none;
  fill: rgba(250, 250, 250, 0.8);

  transition: all var(--transition-dur-func);

  &:hover {
    scale: 1.01;
    fill: var(--form-hover-state-color);
  }
`;
