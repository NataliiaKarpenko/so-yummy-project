import { StyledContainer } from 'shared/components/Container/Container.styled';
import styled from 'styled-components';

export const StyledPageNotFoundContainer = styled(StyledContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 14px;
`;

export const StyledImage = styled.picture`
  height: 170px;
  width: 260px;

  @media screen and (min-width: 768px) {
    height: 327px;
    width: 499px;
  }

  @media screen and (min-width: 1440px) {
    height: 331px;
    width: 499px;
  }
`;

export const StyledTextContainer = styled.div`
  text-align: center;
  color: #000000;

  @media screen and (max-width: 767px) {
    width: 100%;
    max-width: 206px;
  }
`;

export const StyledFocusText = styled.p`
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.11;
  letter-spacing: -0.02em;
  color: ${props => props.theme.text.textBright};

  @media screen and (min-width: 768px) {
    margin-bottom: 14px;
    font-size: 24px;
    line-height: 1;
  }
`;

export const StyledText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: ${props => props.theme.text.dropDown};

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;
