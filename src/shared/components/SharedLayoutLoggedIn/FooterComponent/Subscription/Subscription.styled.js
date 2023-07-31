import { Form } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (max-width: 374px) {
    width: 100%;
    max-width: 204px;
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 204px;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    flex-direction: row;
    width: 458px;
    gap: 12px;
  }

  @media screen and (max-width: 1439px) {
    margin-right: auto;
    margin-left: auto;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    width: 339px;
  }
`;

export const StyledTitle = styled.p`
  @media screen and (max-width: 1439px) {
    display: none;
  }

  margin-bottom: 14px;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;

  color: ${props => props.theme.globalColors.light};
`;

export const StyledLabel = styled.label`
  @media screen and (max-width: 1439px) {
    display: none;
  }

  margin-bottom: 28px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;

  color: ${props => props.theme.globalColors.light};
`;
