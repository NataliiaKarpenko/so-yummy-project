import styled from 'styled-components';

export const StyledPaginationContainer = styled.div`
  .MuiPagination-root {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 768px) {
      margin-top: 50px;
    }
  }

  .MuiPagination-ul {
    padding: 12px 28px;
    display: inline-flex;
    flex-wrap: nowrap;
    justify-content: space-between;

    background: var(--primary-font-color);
    box-shadow: 0px 4px 4px rgba(135, 135, 135, 0.2);
    border-radius: 26px;

    @media screen and (min-width: 768px) {
      padding: 14px 24px;
    }
  }
  .MuiPaginationItem-root {
    min-width: 27px;
    height: 27px;

    font-family: inherit;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.5;
    color: #656565;

    transition: all var(--transition-dur-func);

    &:hover {
      background-color: var(--secondary-background-color);
      scale: 1.01;
    }

    &.Mui-selected {
      background-color: var(--secondary-background-color);
      color: var(--secondary-btn-color);

      &:hover {
        background-color: var(--secondary-background-color);
        scale: 1.01;
      }
    }
  }

  .MuiSvgIcon-root {
    fill: rgba(169, 169, 169, 0.73);
  }
`;
