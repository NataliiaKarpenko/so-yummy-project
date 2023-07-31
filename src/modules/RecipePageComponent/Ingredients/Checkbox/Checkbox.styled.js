import styled from 'styled-components';

export const StyledIcon = styled.svg`
  display: inline-block;
  width: 18px;
  height: 18px;
  padding: 4px;
  background: transparent;
  cursor: pointer;

  border: 1px solid ${props => props.theme.checkBox.border};
  border-radius: 4px;
  fill: ${props => props.theme.globalColors.accentPrimary};

  @media screen and (min-width: 768px) {
    height: 35px;
    width: 35px;
    padding: 9px;
  }

  :hover {
    box-shadow: -1px 3px 5px -1px rgba(139, 170, 54, 0.75);
    scale: 1.01;
  }
`;
