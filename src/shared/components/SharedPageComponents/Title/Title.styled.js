import styled from 'styled-components';

export const StyledTitle = styled.h1`
  margin-bottom: 50px;

  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${props => props.theme.text.titlePrimary};

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 100px;

    font-size: 44px;
  }
`;
