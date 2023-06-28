import styled from 'styled-components';

export const StyledNoInfoSupplied = styled.picture`
  margin-left: auto;
  margin-right: auto;
  display: block;
  height: 133px;
  width: 208px;

  @media screen and (min-width: 767px) {
    height: 255px;
    width: 350px;
  }
`;

export const StyledText = styled.p`
  margin-left: auto;
  margin-right: auto;
  margin-top: 24px;
  width: 208px;

  text-align: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: rgba(0, 0, 0, 0.5);

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    width: 350px;
    font-size: 24px;
  }
`;
