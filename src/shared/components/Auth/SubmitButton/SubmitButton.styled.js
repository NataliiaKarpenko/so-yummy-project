import styled from 'styled-components';

export const StyledSubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-btn-color);
  border-radius: 6px;
  border: none;

  font-family: inherit;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.12;
  color: var(--primary-font-color);
  transition: all var(--transition-dur-func);

  &.AuthFormBtn {
    padding-top: 20px;
    padding-bottom: 20px;

    &:hover {
      scale: 1.01;
      color: var(--secondary-btn-color);
    }
  }

  &.UserInfoModalBtn {
    @media screen and (max-width: 767px) {
      margin-top: 24px;
      padding-top: 14px;
      padding-bottom: 14px;

      font-size: 14px;
      line-height: 1.29;
    }

    @media screen and (min-width: 768px) {
      margin-top: 32px;
      padding-top: 18px;
      padding-bottom: 18px;
      height: 59px;
    }

    &:hover {
      scale: 1.01;
      background-color: var(--secondary-btn-color);
    }
  }
`;
