import styled from 'styled-components';

export const StyledLogoutModal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;

  padding-top: 44px;
  padding-bottom: 44px;
  padding-left: 24px;
  padding-right: 24px;

  text-align: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;

  color: ${props => props.theme.text.textSecondary};

  background: ${props => props.theme.pagination.background};
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 30px;

  @media screen and (max-width: 374px) {
    width: 100%;
    max-width: 330px;
    height: 100%;
    max-height: 179px;
  }

  @media screen and (min-width: 375px) {
    width: 330px;
    height: 179px;
  }

  @media screen and (min-width: 768px) {
    width: 480px;
    height: 215px;
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left: 40px;
    padding-right: 40px;

    font-size: 18px;
    line-height: 1.33;
  }
`;

export const StyledLogoutModalBtnContainer = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 8px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    gap: 16px;
  }
`;

export const StyledLogoutModalBtn = styled.button`
  padding: 14px 18px;
  width: 137px;
  height: 49px;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid transparent;
  border-radius: 6px;

  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  transition: all ${props => props.theme.transitionDurFunc};

  @media screen and (min-width: 768px) {
    padding: 18px 39px;
    width: 192px;
    height: 59px;

    font-size: 16px;
    line-height: 1.12;
  }
`;

export const StyledLogoutBtn = styled(StyledLogoutModalBtn)`
  color: ${props => props.theme.globalColors.light};
  background: ${props => props.theme.globalColors.accentPrimary};

  &:hover {
    border: 1px solid ${props => props.theme.button.logoutBorder};
    background-color: ${props => props.theme.button.hover};
    scale: 1.01;
    color: ${props => props.theme.text.logoutHover};
  }
`;

export const StyledCancelBtn = styled(StyledLogoutModalBtn)`
  color: ${props => props.theme.globalColors.personalDataText};
  background: #d9d9d9;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid ${props => props.theme.button.hover};
    background-color: transparent;
    color: ${props => props.theme.button.hover};
    scale: 1.01;
  }
`;
