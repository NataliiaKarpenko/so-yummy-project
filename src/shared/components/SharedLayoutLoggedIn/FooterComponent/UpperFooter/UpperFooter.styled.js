import styled from 'styled-components';

export const StyledUpperFooter = styled.footer`
  padding-top: 28px;
  padding-bottom: 18px;

  background-color: var(--secondary-btn-color);

  @media screen and (max-width: 767px) {
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    padding-top: 50px;
    padding-bottom: 24px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 64px;
    padding-bottom: 50px;
  }
`;

export const FooterInfoBox = styled.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 32px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    justify-content: space-between;
    margin-bottom: 72px;
  }

  @media screen and (min-width: 1440px) {
    gap: 159px;
  }
`;

export const FooterInfoContainer = styled.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 44px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 38px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 41px;
    display: flex;
    justify-content: space-between;
  }
`;
