import { Field } from 'formik';
import styled, { css } from 'styled-components';

export const StyledInputBox = styled.div`
  padding-left: 14px;
  padding-right: 14px;

  display: flex;
  align-items: center;

  border-radius: 6px;
  fill: transparent;
  transition: all ${props => props.theme.transitionDurFunc};

  @media screen and (min-width: 768px) {
    padding-left: 18px;
    padding-right: 18px;
  }

  ${props =>
    props.neutral &&
    css`
      stroke: rgba(250, 250, 250, 0.8);
      border: 1px solid rgba(250, 250, 250, 0.3);

      &:hover,
      &:focus {
        stroke: ${props => props.theme.globalColors.inputHover};
        border: 1px solid ${props => props.theme.globalColors.inputHover};
      }
    `};

  ${props =>
    props.error &&
    css`
      stroke: ${props => props.theme.globalColors.error};
      border: 1px solid ${props => props.theme.globalColors.error};
    `};

  ${props =>
    props.warning &&
    css`
      stroke: #f6c23e;
      border: 1px solid #f6c23e;
    `};

  ${props =>
    props.success &&
    css`
      stroke: #3cbc81;
      border: 1px solid #3cbc81;
    `};

  &.EditInfo {
    ${props =>
      props.neutral &&
      css`
        stroke: ${props => props.theme.input.editInfoIcon};
        border: 1px solid ${props => props.theme.input.editInfoBorder};

        &:hover,
        &:focus {
            stroke: ${props => props.theme.text.textSecondary};
            border: 1px solid ${props => props.theme.text.textSecondary};
          }
        }
      `};
  }
  &.Subscribe {
    ${props =>
      props.success &&
      css`
        stroke: green;
        border: 1px solid green;
      `};
  }
`;

export const StyledField = styled(Field)`
  width: 100%;
  height: 43px;
  padding-right: 0;
  padding-left: 0;
  padding-top: 12px;
  padding-bottom: 12px;

  background-color: transparent;
  border: none;
  outline: none;

  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;

  @media screen and (min-width: 768px) {
    height: 57px;
    padding-top: 16px;
    padding-bottom: 16px;
    font-size: 18px;
  }

  &::placeholder {
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    transition: all ${props => props.theme.transitionDurFunc};

    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
  }

  &.EnterInfo {
    color: ${props => props.theme.globalColors.inputHover};

    &::placeholder {
      color: rgba(250, 250, 250, 0.8);
    }
  }

  &.EditInfo {
    color: ${props => props.theme.text.textSecondary};

    &::placeholder {
      color: ${props => props.theme.text.editInfoPlaceholder};
    }
  }

  &.Subscribe {
    height: 36px;
    padding-top: 14px;
    padding-bottom: 14px;

    font-size: 10px;
    color: #fff;

    @media screen and (min-width: 768px) {
      height: 48px;
      padding-top: 17px;
      padding-bottom: 17px;
      font-size: 14px;
    }

    @media screen and (min-width: 767px) and (max-width: 1439px) {
      width: 169px;
    }

    @media screen and (min-width: 1440px) {
      height: 57px;
      padding-top: 22px;
      padding-bottom: 22px;
      font-size: 18px;
    }

    &::placeholder {
      color: rgba(250, 250, 250, 0.8);
      font-size: 10px;

      @media screen and (min-width: 768px) {
        font-size: 14px;
      }

      @media screen and (min-width: 1440px) {
        font-size: 18px;
      }
    }
  }
`;

export const StyledInputIcon = styled.svg`
  margin-right: 8px;
  width: 18px;
  height: 18px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const StyledInfoIcon = styled.svg`
  width: 18px;
  height: 18px;
  stroke: transparent;
  fill: ${props => {
    switch (props.status) {
      case 'error':
        return props.theme.globalColors.error;
      case 'warning':
        return '#f6c23e';
      case 'success':
        return '#3cbc81';
      default:
        return;
    }
  }};

  ${props =>
    props.status === 'success' &&
    props.className === 'Subscribe' &&
    css`
      stroke: green;
      fill: green;
    `};

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const StyledMessage = styled.p`
  margin-top: 7px;

  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;

  @media screen and (min-width: 768px) {
    margin-top: 10px;
    font-size: 14px;
  }

  color: ${props => {
    switch (props.status) {
      case 'warning':
        return '#f6c23e';
      case 'success':
        return '#3cbc81';
      case 'error':
        return props.theme.globalColors.error;
      default:
        return 'rgba(250, 250, 250, 0.8)';
    }
  }};

  ${props =>
    props.status === 'success' &&
    props.className === 'Subscribe' &&
    css`
      color: green;
    `};
`;
