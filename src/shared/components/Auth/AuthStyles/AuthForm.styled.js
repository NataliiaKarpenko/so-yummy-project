// import { Form } from 'formik';
import styled from 'styled-components';

export const StyledFormContainer = styled.div`
  margin-bottom: 18px;

  background-color: var(--main-background-color);
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 30px;

  @media screen and (max-width: 374px) {
    width: 100%;
    max-width: 335px;
  }

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 500px;
  }

  .FormContainer {
    padding: 32px 28px;

    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) {
      padding: 44px 50px;
    }
  }

  .Title {
    margin-bottom: 18px;
    font-weight: 600;
    font-size: 24px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: var(--primary-font-color);

    @media screen and (min-width: 768px) {
      margin-bottom: 32px;
      font-size: 28px;
      line-height: 1.07;
    }
  }

  .SignupTitle {
    margin-bottom: 18px;

    @media screen and (min-width: 768px) {
      margin-bottom: 32px;
    }
  }

  .SigninTitle {
    margin-bottom: 40px;

    @media screen and (min-width: 768px) {
      margin-bottom: 50px;
    }
  }

  .InputsContainer {
    margin-bottom: 28px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    @media screen and (min-width: 768px) {
      margin-bottom: 50px;
      gap: 24px;
    }
  }
`;
