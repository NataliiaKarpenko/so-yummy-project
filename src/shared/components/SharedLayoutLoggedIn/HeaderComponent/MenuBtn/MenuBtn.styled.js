import styled from 'styled-components';

export const StyledMenuBtn = styled.button`
  border: none;
  background-color: transparent;

  stroke: ${props =>
    props.main
      ? props.theme.globalColors.personalDataText
      : props.recipe === true
      ? props.theme.globalColors.personalDataText
      : props.theme.text.textSecondary};

  transition: all ${props => props.theme.transitionDurFunc};

  svg {
    @media screen and (min-width: 768px) {
      width: 32px;
      height: 32px;
    }
  }

  &:hover {
    stroke: ${props => props.theme.globalColors.accentPrimary};
    scale: 1.01;
  }
`;
