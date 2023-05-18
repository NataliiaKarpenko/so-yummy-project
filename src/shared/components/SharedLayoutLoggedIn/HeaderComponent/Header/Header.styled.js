import styled from 'styled-components';

export const StyledHeader = styled.div`
  padding-top: 18px;

  @media screen and (min-width: 1440px) {
    nav {
      display: flex;
      align-items: center;
      gap: 187px;
      margin-right: 226px;
    }
  }

  .HeaderBox {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 24px;

    @media screen and (min-width: 768px) {
      gap: 50px;
    }
  }
`;
