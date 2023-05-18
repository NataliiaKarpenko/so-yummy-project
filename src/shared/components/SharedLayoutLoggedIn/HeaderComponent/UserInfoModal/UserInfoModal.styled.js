import styled from 'styled-components';

export const StyledUserInfoModal = styled.div`
  position: absolute;
  /*  */
  z-index: 999;
  overflow-y: auto;

  width: 330px;
  padding: 32px 24px;

  background: var(--primary-font-color);
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 24px;

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

  .FormContainer {
    display: flex;
    flex-direction: column;
  }

  .AvatarContainer {
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
    background-color: var(--default-background-color);
    border-radius: 50%;

    @media screen and (min-width: 768px) {
      width: 103px;
      height: 103px;
      margin-bottom: 50px;
    }
  }

  .AvatarIcon {
    @media screen and (min-width: 768px) {
      width: 47px;
      height: 47px;
    }
  }

  .UploadBtn {
    position: absolute;
    bottom: 0;
    right: 5%;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 50%;
    background-color: var(--primary-btn-color);

    stroke: var(--primary-font-color);
    transition: all var(--transition-dur-func);

    &:hover {
      background-color: var(--secondary-btn-color);
      scale: 1.05;
    }
  }
`;
