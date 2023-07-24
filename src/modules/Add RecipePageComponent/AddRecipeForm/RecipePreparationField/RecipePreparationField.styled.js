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
  color: #3e4462;
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
  background-color: rgba(217, 217, 217, 0.157);
  border: none;
  resize: none;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  color: rgba(0, 0, 0, 1);

  @media screen and (min-width: 768px) {
    width: 505px;
    height: 224px;
    padding: 16px 23px;

    font-size: 18px;
    letter-spacing: -0.36px;
  }

  &:focus {
    outline: 1px solid rgba(51, 51, 51, 0.3);
  }

  &::placeholder {
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.28px;
    color: rgba(0, 0, 0, 0.5);

    @media screen and (min-width: 768px) {
      font-size: 18px;
      letter-spacing: -0.36px;
    }
  }

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent; /* color of the tracking area */
  }

  &::-webkit-scrollbar-thumb {
    height: 93px;
    background-color: #e7e5e5;
    border-radius: 12px;
  }
`;

export const ErrorContainer = styled(ErrorMessage)`
  position: absolute;
  left: 0;
  bottom: -14px;

  color: var(--error-color);
  font-size: 12px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.24px;
`;
