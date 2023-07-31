import { Form } from 'formik';
import styled from 'styled-components';

export const StyledUserInfoModal = styled.div`
  position: absolute;
  z-index: 999;
  overflow-y: auto;

  padding: 32px 24px;

  background: ${props => props.theme.pagination.background};
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 24px;

  @media screen and (max-width: 374px) {
    width: 100%;
    max-width: 330px;
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 330px;
  }

  @media screen and (max-width: 767px) {
    left: 50%;
    transform: translateX(-50%);
    top: 20px;
  }

  @media screen and (min-width: 768px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 480px;
    padding: 50px 40px;
  }
`;

export const StyledFormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const StyledAvatarContainer = styled.div`
  position: relative;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 54px;
  width: 88px;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: center;

  stroke: #c4c4c4;
  background-color: #d9d9d9;
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    width: 103px;
    height: 103px;
    margin-bottom: 50px;
  }
`;

export const StyledAvatarIcon = styled.svg`
  @media screen and (min-width: 768px) {
    width: 47px;
    height: 47px;
  }
`;

export const StyledUploadBtn = styled.button`
  position: absolute;
  bottom: 0;
  right: 5%;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid transparent;
  border-radius: 50%;
  background-color: ${props => props.theme.globalColors.accentPrimary};

  stroke: ${props => props.theme.globalColors.light};
  transition: all ${props => props.theme.transitionDurFunc};

  &:hover {
    border: 1px solid ${props => props.theme.button.logoutBorder};
    background-color: ${props => props.theme.button.hover};
    scale: 1.01;
    stroke: ${props => props.theme.text.logoutHover};
  }
`;
