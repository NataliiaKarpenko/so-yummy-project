import { ErrorMessage, Field } from 'formik';
import styled from 'styled-components';

export const RecipeIngredientsContainer = styled.div`
  width: 100%;

  @media screen and (min-width: 1440px) {
    width: 609px;
  }
`;

export const CounterContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const CounterContainerTitle = styled.p`
  color: ${props => props.theme.text.textRecipeCard};
  font-weight: 600;
  font-size: 24px;
  font-style: normal;
  line-height: 1;
  letter-spacing: -0.48px;

  @media screen and (min-width: 768px) {
    letter-spacing: -0.24px;
  }
`;

export const CounterBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px 14px;
  gap: 14px;
  width: 92px;
  height: 28px;
  border-radius: 18px;
  border: 1px solid ${props => props.theme.counterBox};

  @media screen and (min-width: 768px) {
    padding: 8px 15px;
    gap: 20px;
    width: 110px;
    height: 32px;
  }
`;

export const CounterBtn = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  transition: all ${props => props.theme.transitionDurFunc};

  stroke: ${props =>
    props.disabled ? props.theme.text.disabled : props.theme.counterBox};

  &:hover {
    scale: 1.01;
    stroke: ${props =>
      props.disabled ? '' : props.theme.globalColors.accentPrimary};
  }

  cursor: ${props => (props.disabled ? 'inherit' : 'pointer')};
`;

export const CounterIcon = styled.svg`
  width: 14px;
  height: 14px;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

export const CounterBtnText = styled.span`
  color: ${props => props.theme.text.counterBox};
  font-family: Inter;
  font-size: 14px;
  line-height: 1.29;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const IngredientItemContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 14px;
  height: 53px;

  &:not(:last-child) {
    margin-bottom: 18px;
  }

  @media screen and (min-width: 768px) {
    gap: 32px;
    height: 59px;

    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
`;

export const SelectContainer = styled.div`
  position: relative;
  width: 194px;
  height: 100%;

  background-color: ${props => props.theme.select.inputBackground};
  border-radius: 6px;
  border: 1px solid ${props => props.theme.select.outline};

  @media screen and (min-width: 768px) {
    width: 398px;
  }
`;

export const ErrorContainer = styled(ErrorMessage)`
  position: absolute;
  left: 16px;
  bottom: -16px;

  color: ${props => props.theme.globalColors.error};
  font-size: 12px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.24px;
`;

export const ErrorMessageOnSubmit = styled.div`
  position: absolute;
  left: 0;
  bottom: -12px;

  color: ${props => props.theme.globalColors.error};
  font-size: 12px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.24px;
`;

export const AmountField = styled(Field)`
  width: 100%;
  height: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  border: none;
  outline: none;
  background-color: transparent;

  text-align: end;
  color: ${props => props.theme.text.textPrimary};
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    letter-spacing: -0.36px;
  }
`;

export const AmountItemContainer = styled.div`
  position: relative;
  padding-right: 12px;
  display: flex;

  align-items: center;

  gap: 2px;
  width: 90px;
  height: 100%;
  background-color: ${props => props.theme.select.inputBackground};
  border-radius: 6px;
  border: 1px solid ${props => props.theme.select.outline};

  @media screen and (min-width: 768px) {
    width: 110px;
  }
`;
