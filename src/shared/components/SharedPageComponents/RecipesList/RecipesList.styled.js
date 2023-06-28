import styled from 'styled-components';

export const StyledRecipesList = styled.ul`
  width: 100%;

  @media screen and (min-width: 768px) {
    display: flex;
    column-gap: 32px;
    row-gap: 32px;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1440px) {
    column-gap: 14px;
    row-gap: 100px;
  }
`;
