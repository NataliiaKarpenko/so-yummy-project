import styled from 'styled-components';

export const StyledUserInfoContainer = styled.div`
  position: relative;
`;

export const StyledUserInfo = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 14px;

  font-weight: 600;
  font-size: 14px;
  line-height: 1.7;

  color: ${props =>
    props.recipe === true
      ? props.theme.globalColors.personalDataText
      : props.mainUserInfo
      ? props.theme.globalColors.personalDataText
      : props.theme.text.textSecondary};
  transition: all ${props => props.theme.transitionDurFunc};
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.globalColors.accentPrimary};
    scale: 1.01;
  }
`;
