import styled from 'styled-components';

export const StyledContainer = styled.div`
  padding-left: 16px;
  padding-right: 16px;

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 100px;
    padding-right: 100px;
  }

  &.HeaderContainer {
    display: flex;
    align-items: center;
  }
`;
