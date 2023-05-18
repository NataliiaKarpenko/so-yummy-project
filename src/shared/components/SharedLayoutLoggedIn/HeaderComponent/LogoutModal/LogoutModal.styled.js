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

  color: var(--secondary-font-color);

  background: var(--primary-font-color);
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

  .LogoutModalBtnContainer {
    margin-top: 24px;
    display: flex;
    gap: 8px;

    @media screen and (min-width: 768px) {
      margin-top: 32px;
      gap: 16px;
    }
  }

  .LogoutModalBtn {
    padding: 14px 18px;
    width: 137px;
    height: 49px;
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 6px;

    font-weight: 400;
    font-size: 14px;
    line-height: 1.29;
    transition: all var(--transition-dur-func);

    @media screen and (min-width: 768px) {
      padding: 18px 39px;
      width: 192px;
      height: 59px;

      font-size: 16px;
      line-height: 1.12;
    }
  }

  .LogoutBtn {
    color: var(--primary-font-color);
    background: var(--primary-btn-color);

    &:hover {
      background-color: var(--secondary-btn-color);
      scale: 1.05;
    }
  }

  .CancelBtn {
    color: var(--secondary-font-color);
    background: var(--default-background-color);
    border: 1px solid transparent;

    &:hover {
      border: 1px solid var(--secondary-font-color);
      background-color: transparent;
      scale: 1.05;
    }
  }
`;
