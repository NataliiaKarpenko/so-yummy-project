import styled from 'styled-components';

export const DescriptionField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 18px;

  height: 100%;
  transition: all ${props => props.theme.transitionDurFunc};

  border-bottom: ${props =>
    props.isError === true
      ? `1px solid ${props.theme.globalColors.error}`
      : `1px solid ${props.theme.input.bottomBorder}`};
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.28px;
    color: ${props => props.theme.text.inputPlaceholderAddRecipe};

    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }
`;

export const ChosenOptionBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  color: ${prop => prop.theme.text.input};
  font-size: 12px;
  font-weight: 400;
  line-height: 1;
  transition: all ${props => props.theme.transitionDurFunc};

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  &:hover svg {
    stroke: ${props => props.theme.globalColors.accentPrimary};
    scale: 1.01;
  }
`;

export const SelectIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: none;
  stroke: ${prop => prop.theme.text.input};
  transition: all ${props => props.theme.transitionDurFunc};
  cursor: pointer;
`;
