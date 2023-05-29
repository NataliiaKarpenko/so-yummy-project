import { Field } from 'formik';
import styled, { css } from 'styled-components';

export const StyledInputBox = styled.div`
  padding-left: 14px;
  padding-right: 14px;

  display: flex;
  align-items: center;

  border-radius: 6px;
  fill: transparent;
  transition: all var(--transition-dur-func);

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
        stroke: var(--form-hover-state-color);
        border: 1px solid var(--form-hover-state-color);
      }
    `};

  ${props =>
    props.error &&
    css`
      stroke: var(--error-color);
      border: 1px solid var(--error-color);
    `};

  ${props =>
    props.warning &&
    css`
      stroke: var(--warning-color);
      border: 1px solid var(--warning-color);
    `};

  ${props =>
    props.success &&
    css`
      stroke: var(--success-color);
      border: 1px solid var(--success-color);
    `};

  &.EditInfo {
    ${props =>
      props.neutral &&
      css`
        stroke: rgba(0, 0, 0, 0.5);
        border: 1px solid rgba(0, 0, 0, 0.4);

        &:hover,
        &:focus {
            stroke: var(--secondary-font-color);
            border: 1px solid var(--secondary-font-color);
          }
        }
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
    transition: all var(--transition-dur-func);

    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
  }

  &.EnterInfo {
    color: var(--form-hover-state-color);

    &::placeholder {
      color: rgba(250, 250, 250, 0.8);
    }
  }

  &.EditInfo {
    color: var(--secondary-font-color);

    &::placeholder {
      color: rgba(0, 0, 0, 0.8);
    }
  }

  &.Subscribe {
    height: 36px;
    padding-top: 14px;
    padding-bottom: 14px;

    font-size: 10px;
    color: var(--form-hover-state-color);

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
        return 'var(--error-color)';
      case 'warning':
        return 'fill: var(--warning-color)';
      case 'success':
        return 'var(--success-color)';
      default:
        return;
    }
  }};

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
      case 'rgba(250, 250, 250, 0.8)':
        return 'var(--warning-color)';
      case 'warning':
        return 'var(--warning-color)';
      case 'success':
        return 'var(--success-color)';
      case 'error':
        return 'var(--error-color)';
      default:
        return 'rgba(250, 250, 250, 0.8)';
    }
  }};
`;
