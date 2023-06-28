import styled from 'styled-components';

export const StyledIngredientsList = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const StyledTHead = styled.th`
  padding: 12px 14px;
  background-color: var(--primary-btn-color);

  font-weight: 600;
  font-size: 10px;
  line-height: 1.5;
  letter-spacing: 0.03em;
  color: var(--primary-font-color);

  @media screen and (min-width: 768px) {
    padding: 21px 32px;

    font-size: 18px;
  }

  @media screen and (min-width: 1440px) {
    padding: 24px 40px;
  }

  &:first-child {
    width: calc(100% / 2);
    text-align: left;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    /* margin-top: 20px; */
  }

  &:nth-child(2) {
    width: calc(100% / 4);
    text-align: center;
  }

  &:last-child {
    width: calc(100% / 4);
    text-align: center;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    /* width: 80px; */
  }
`;

export const StyledEmptyRow = styled.tr`
  background-color: transparent;
  height: ${props => (props.headRow ? '24px' : '16px')};

  @media screen and (min-width: 768px) {
    height: ${props => (props.headRow ? '32px' : '24px')};
  }

  @media screen and (min-width: 1440px) {
    height: ${props => (props.headRow ? '50px' : '24px')};
  }

  &:last-child {
    display: none;
  }
`;

export const StyledDCell = styled.td`
  height: 86px;
  padding: 14px;

  background-color: var(--secondary-background-color);

  @media screen and (min-width: 768px) {
    height: 178px;
    padding: 33px 40px;
  }

  @media screen and (min-width: 1440px) {
    height: 180px;
    padding: 26px;
  }

  &:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;

    img {
      height: 57px;
      width: 57px;
      object-fit: contain;

      @media screen and (min-width: 768px) {
        height: 112px;
        width: 112px;
      }

      @media screen and (min-width: 1440px) {
        height: 128px;
        width: 128px;
      }
    }
  }

  &:nth-child(2) {
    text-align: left;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.24px;
    color: #3e4462;

    @media screen and (min-width: 768px) {
      font-size: 24px;
      line-height: 1;
    }
  }

  &:nth-child(3) {
    text-align: right;
  }

  span {
    display: inline-block;

    padding: 4px;
    text-align: right;
    font-weight: 600;
    font-size: 10px;
    line-height: 1.5;
    color: var(--primary-font-color);

    background: #8baa36;
    border-radius: 4px;

    @media screen and (min-width: 768px) {
      padding: 4px 8px;
      font-size: 18px;
    }
  }

  &:last-child {
    text-align: center;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;
