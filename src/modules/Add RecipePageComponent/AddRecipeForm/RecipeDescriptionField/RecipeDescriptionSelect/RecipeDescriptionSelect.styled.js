import styled from 'styled-components';

export const DescriptionField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 18px;

  height: 100%;
  transition: all var(--transition-dur-func);

  border-bottom: ${props =>
    props.isError === true
      ? '1px solid var(--error-color)'
      : '1px solid #e0e0e0'};
`;

export const ChosenOptionBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  color: #000;
  font-size: 12px;
  font-weight: 400;
  line-height: 1;
  transition: all var(--transition-dur-func);

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  &:hover svg {
    stroke: var(--primary-btn-color);
    scale: 1.01;
  }
`;

export const SelectIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: none;
  stroke: #000;
  transition: all var(--transition-dur-func);
`;
