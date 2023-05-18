import { ErrorMessage, Field } from 'formik';
import styled from 'styled-components';

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

  &.EnterInfo {
    stroke: rgba(250, 250, 250, 0.8);

    border: 1px solid rgba(250, 250, 250, 0.3);

    &:hover,
    &:focus {
      stroke: var(--form-hover-state-color);

      border: 1px solid var(--form-hover-state-color);
    }
  }

  &.EditInfo {
    fill: transparent;
    stroke: rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(0, 0, 0, 0.4);
    &:hover,
    &:focus {
      stroke: var(--secondary-font-color);

      border: 1px solid var(--secondary-font-color);
    }
  }

  &.InvalidInput {
    stroke: var(--error-color);

    border: 1px solid var(--error-color);
  }

  &.InsecureInput {
    stroke: var(--warning-color);

    border: 1px solid var(--warning-color);
  }

  &.ValidInput {
    stroke: var(--success-color);

    border: 1px solid var(--success-color);
  }

  .InputIcon {
    margin-right: 8px;

    @media screen and (min-width: 768px) {
      width: 24px;
      height: 24px;
    }
  }

  .EditIcon {
    fill: none;

    @media screen and (min-width: 768px) {
      width: 24px;
      height: 19px;
    }
  }
  .ErrorIcon {
    fill: var(--error-color);

    stroke: transparent;
  }

  .WarningIcon {
    fill: var(--warning-color);
    stroke: #1e1f28;
  }

  .SuccessIcon {
    fill: var(--success-color);
    stroke: transparent;
  }
`;

export const StyledField = styled(Field)`
  width: 100%;
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
    padding-top: 16px;
    padding-bottom: 16px;

    font-size: 18px;
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

  &::placeholder {
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: -0.02em;

    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
  }
`;

export const StyledMessage = styled.p`
  margin-top: 7px;
  margin-bottom: 7px;

  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;

  @media screen and (min-width: 768px) {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 14px;
  }

  color: ${props => {
    switch (props.message) {
      case 'Insecure password. Add at least one digit':
        return 'var(--warning-color)';
      case 'Insecure password. Add at least one letter':
        return 'var(--warning-color)';
      default:
        return 'var(--success-color)';
    }
  }};
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  margin-top: 7px;
  margin-bottom: 7px;

  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: var(--error-color);

  @media screen and (min-width: 768px) {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 14px;
  }
`;

export const StyledPasswordRequirements = styled.p`
  margin-top: 7px;
  margin-bottom: 7px;

  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: rgba(250, 250, 250, 0.8);

  @media screen and (min-width: 768px) {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 14px;
  }
`;
