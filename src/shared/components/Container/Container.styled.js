import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;

  @media screen and (max-width: 374px) {
    width: 100%;
    max-width: 374px;
  }

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;

export const StyledHeaderContainer = styled(StyledContainer)`
  display: flex;
  align-items: center;
`;

export const StyledLowerFooterContainer = styled(StyledContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }
`;

export const StyledPageNotFoundContainer = styled(StyledContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 14px;
`;
