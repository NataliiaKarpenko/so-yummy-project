import styled from 'styled-components';

export const StyledThemeToggler = styled.button`
  display: flex;
  align-items: center;
  padding: 3px;
  width: 61px;
  height: 27px;
  border: none;
  border-radius: 50px;
  box-shadow: inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1);
  transition: all var(--transition-dur-func);

  &.Off {
    background: #efefef;
    justify-content: start;
    svg {
      fill: url(#grad1);
      filter: drop-shadow(2px 1px 6px rgba(0, 0, 0, 0.25));
    }
  }

  &.On {
    background: #8baa36;
    justify-content: end;

    svg {
      fill: url(#grad1);
      filter: drop-shadow(-2px 1px 6px rgba(0, 0, 0, 0.25));
    }
  }
`;

// export const StyledThemeTogglerOff = styled.button`
//   display: flex;
//   align-items: center;
//   padding: 3px;
//   width: 61px;
//   height: 27px;
//   background: #efefef;
//   box-shadow: inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1);
//   border: none;
//   border-radius: 50px;

//   svg {
//     fill: linear-gradient(180deg, #ffffff 0%, #e8eaea 100%);
//     filter: drop-shadow(2px 1px 6px rgba(0, 0, 0, 0.25));
//   }
// `;
