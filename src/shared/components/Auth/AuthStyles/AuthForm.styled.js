import { Form } from 'formik';
import styled from 'styled-components';

export const StyledFormContainer = styled.div`
  margin-bottom: 18px;

  background-color: #2a2c36;
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
`;

export const StyledForm = styled(Form)`
  padding: 32px 28px;

  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    padding: 44px 50px;
  }
`;

export const StyledTitle = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: ${props => props.theme.globalColors.light};
  margin-bottom: ${props => {
    switch (props.status) {
      case 'signup':
        return '18px';
      case 'signin':
        return '40px';
      default:
        return;
    }
  }};

  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 1.07;

    margin-bottom: ${props => {
      switch (props.status) {
        case 'signup':
          return '32px';
        case 'signin':
          return '50px';
        default:
          return;
      }
    }};
  }
`;

export const StyledInputsContainer = styled.div`
  margin-bottom: 28px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
    gap: 24px;
  }
`;
