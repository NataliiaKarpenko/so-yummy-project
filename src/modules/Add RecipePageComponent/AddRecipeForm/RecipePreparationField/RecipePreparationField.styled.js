import { ErrorMessage, Field } from 'formik';
import styled from 'styled-components';

export const PreparationFieldContainer = styled.div`
  position: relative;
  margin-top: 44px;
  margin-bottom: 18px;

  @media screen and (min-width: 768px) {
    margin-top: 100px;
    margin-bottom: 32px;
  }
`;

export const PreparationTitle = styled.p`
  margin-bottom: 24px;
  color: ${props => props.theme.text.textRecipeCard};
  font-weight: 600;
  font-size: 24px;
  font-style: normal;
  line-height: 1;
  letter-spacing: -0.48px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    letter-spacing: -0.24px;
  }
`;

export const TextArea = styled(Field)`
  width: 343px;
  height: 154px;
  padding: 10px 16px;
  background-color: ${props => props.theme.select.inputBackground};
  border: 1px solid ${props => props.theme.select.outline};
  resize: none;
  border-radius: 6px;
  outline: none;

  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  color: ${props => props.theme.text.textBright};

  @media screen and (min-width: 768px) {
    width: 505px;
    height: 224px;
    padding: 16px 23px;

    font-size: 18px;
    letter-spacing: -0.36px;
  }

  &:focus {
    border: 1px solid ${props => props.theme.input.focus};
  }

  &::placeholder {
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.28px;
    color: ${props => props.theme.text.inputPlaceholderAddRecipe};

    @media screen and (min-width: 768px) {
      font-size: 18px;
      letter-spacing: -0.36px;
    }
  }
`;

export const ErrorContainer = styled(ErrorMessage)`
  position: absolute;
  left: 0;
  bottom: -14px;

  color: ${props => props.theme.globalColors.error};
  font-size: 12px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.24px;
`;
