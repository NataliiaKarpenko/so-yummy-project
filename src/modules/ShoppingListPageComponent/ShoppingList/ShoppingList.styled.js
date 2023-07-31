import styled from 'styled-components';

export const StyledShoppingList = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const StyledTHead = styled.th`
  padding: 10px;
  background-color: ${props => props.theme.globalColors.accentPrimary};

  font-weight: 600;
  font-size: 12px;
  line-height: 1.5;
  color: ${props => props.theme.globalColors.light};

  @media screen and (min-width: 768px) {
    padding: 20px;
    font-size: 18px;
  }

  @media screen and (min-width: 1440px) {
    padding: 21px 40px;
  }

  &:first-child {
    width: calc(100% / 2);
    text-align: left;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  &:nth-child(2) {
    width: calc(100% / 4);
    text-align: center;
  }

  &:last-child {
    width: calc(100% / 4);
    text-align: right;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

export const StyledRow = styled.tr`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 8px;
    right: 8px;
    height: 1px;
    background-color: ${props => props.theme.input.bottomBorder};

    @media screen and (min-width: 768px) {
      left: 0;
      right: 0;
    }

    @media screen and (min-width: 1440px) {
      left: 40px;
      right: 40px;
    }
  }
`;

export const StyledEmptyRow = styled.tr`
  background-color: transparent;
  height: ${props => (props.headRow ? '32px' : '24px')};

  @media screen and (min-width: 768px) {
    height: ${props => (props.headRow ? '50px' : '44px')};
  }

  &:last-child {
    display: none;
  }
`;

export const StyledRemoveBtn = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: start;
  stroke: ${props => props.theme.text.counterBox};
`;

export const StyledRemoveIcon = styled.svg`
  width: 14px;
  height: 14px;
  transition: all ${props => props.theme.transitionDurFunc};

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }

  &:hover {
    stroke: ${props => props.theme.globalColors.accentPrimary};
    scale: 1.01;
  }
`;

export const StyledDCell = styled.td`
  padding-bottom: 24px;
  vertical-align: top;

  @media screen and (min-width: 768px) {
    padding-bottom: 43px;
  }

  &:first-child {
    @media screen and (max-width: 767px) {
      padding-left: 8px;
    }

    @media screen and (min-width: 768px) {
      width: 10%;
    }

    @media screen and (min-width: 1440px) {
      padding-left: 40px;
      width: 10%;
    }

    img {
      height: 48px;
      width: 48px;

      @media screen and (min-width: 768px) {
        height: 81px;
        width: 81px;
      }
    }
  }

  &:nth-child(2) {
    padding-left: 10px;
    text-align: left;
    font-weight: 500;
    font-size: 10px;
    line-height: 1.2;
    color: ${props => props.theme.text.textRecipeCard};

    @media screen and (min-width: 768px) {
      padding-left: 16px;
      font-size: 16px;
      line-height: 1.5;
    }
  }

  &:nth-child(3) {
    padding-right: 27px;
    padding-left: 27px;

    @media screen and (min-width: 768px) {
      padding-right: 45px;
      padding-left: 68px;
    }

    @media screen and (min-width: 1440px) {
      padding-right: 60px;
      padding-left: 125px;
    }
  }

  span {
    display: inline-block;
    min-width: 37px;
    padding: 4px;
    text-align: center;
    font-weight: 600;
    font-size: 10px;
    line-height: 1.5;
    color: ${props => props.theme.globalColors.light};

    background: ${props => props.theme.globalColors.accentPrimary};
    border-radius: 4px;

    @media screen and (min-width: 768px) {
      min-width: 68px;
      font-size: 18px;
    }

    &:not(:last-child) {
      margin-bottom: 4px;
    }
  }
`;

export const StyledImgContainer = styled.div`
  width: 60px;
  padding: 6px;
  background-color: ${props => props.theme.currentRecipe.background};
  border-radius: 6px;

  @media screen and (min-width: 768px) {
    width: 93px;
    padding: 8px 6px;
  }
`;

export const StyledMeasureContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
