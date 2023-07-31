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

    background: ${props => props.theme.pagination.background};
    box-shadow: ${props => props.theme.pagination.boxShadow};
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
    color: ${props => props.theme.text.pagination};

    transition: all ${props => props.theme.transitionDurFunc};

    &:hover {
      background-color: ${props => props.theme.pagination.activePage};
      scale: 1.01;
    }

    &.Mui-selected {
      background-color: ${props => props.theme.pagination.activePage};
      color: ${props => props.theme.text.textSecondary};

      &:hover {
        background-color: ${props => props.theme.pagination.activePage};
        scale: 1.01;
      }
    }
  }

  .MuiSvgIcon-root {
    fill: ${props => props.theme.pagination.arrow};
  }
`;
