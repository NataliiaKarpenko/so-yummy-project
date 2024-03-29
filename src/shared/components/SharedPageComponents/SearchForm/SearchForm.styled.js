import { ErrorMessage, Field, Form } from 'formik';
import styled, { css } from 'styled-components';

export const StyledSearchForm = styled(Form)`
  @media screen and (max-width: 374px) {
    width: 100%;
    max-width: 295px;
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 295px;
  }

  @media screen and (max-width: 767px) {
    margin-right: auto;
    margin-left: auto;
  }

  @media screen and (min-width: 768px) {
    width: 369px;
  }

  @media screen and (min-width: 1440px) {
    width: 510px;
  }
`;

export const StyledFieldBox = styled.div`
  position: relative;

  height: 52px;
  display: flex;

  @media screen and (min-width: 768px) {
    height: 59px;
  }

  @media screen and (min-width: 1440px) {
    height: 71px;
  }
`;

export const StyledField = styled(Field)`
  width: 100%;
  padding-top: 17px;
  padding-bottom: 17px;
  padding-left: 32px;
  padding-right: 113px;
  outline: none;
  border-radius: 24px 44px;
  border: 1px solid;
  box-shadow: 0px 4px 97px rgba(34, 37, 42, 0.03);
  background-color: ${props => props.theme.input.background};
  transition: all ${props => props.theme.transitionDurFunc};

  ${props =>
    props.neutral &&
    css`
      border-color: ${props => props.theme.input.outline};

      &:hover,
      &:focus {
        border-color: ${props => props.theme.input.hover};
      }
    `};

  ${props =>
    props.error &&
    css`
      border-color: ${props => props.theme.globalColors.error};
    `};

  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${props => props.theme.text.textPrimary};

  @media screen and (min-width: 768px) {
    padding-top: 18px;
    padding-bottom: 18px;
    padding-left: 38px;
    padding-right: 161px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 23px;
    padding-bottom: 23px;
    padding-left: 48px;
  }

  &::placeholder {
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: ${props => props.theme.text.inputPlaceholderSearch};

    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  margin-top: 7px;
  padding-left: 40px;

  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;

  @media screen and (min-width: 768px) {
    margin-top: 10px;
    font-size: 14px;
  }
  color: ${props => props.theme.globalColors.error};
`;
