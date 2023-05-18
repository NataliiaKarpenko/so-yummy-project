import styled from 'styled-components';

export const StyledUserInfoDropDown = styled.div`
  &.dropdown-enter {
    transform: scaleY(0);
    opacity: 0;
  }

  &.dropdown-enter-active {
    transform: scaleY(1);

    opacity: 1;
    transition: all var(--transition-dur-func);
  }
  &.dropdown-exit {
    transform: scaleY(1);
    opacity: 1;
  }

  &.dropdown-exit-active {
    transform: scaleY(0);
    opacity: 0;
    transition: all var(--transition-dur-func);
  }

  position: absolute;
  top: 50px;
  right: -50%;
  z-index: 990;
  padding: 18px;
  height: 130px;

  background: var(--primary-font-color);
  border: 1px solid #8baa36;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media screen and (max-width: 374px) {
    width: 100%;
    max-width: 161px;
  }

  @media screen and (min-width: 375px) {
    width: 161px;
  }

  @media screen and (min-width: 768px) {
    top: 55px;
    width: 177px;
    height: 134px;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 50%;

    width: 10px;
    height: 10px;
    background: var(--primary-font-color);
    transform: translateY(-50%) rotate(45deg);
    z-index: 0;
    border-top: 1px solid #8baa36;
    border-left: 1px solid #8baa36;
  }

  .EditContainer {
    margin-bottom: 28px;
    display: flex;
    gap: 35px;
    align-items: center;

    stroke: var(--secondary-font-color);
    fill: none;
    transition: all var(--transition-dur-func);

    cursor: pointer;

    @media screen and (min-width: 768px) {
      margin-bottom: 32px;
    }

    &:hover {
      scale: 1.05;
      stroke: var(--primary-btn-color);
      fill: var(--primary-btn-color);
    }

    &:hover .Text {
      scale: 1.05;
      color: var(--primary-btn-color);
    }
  }

  .Text {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.6;

    color: var(--secondary-font-color);
    transition: all var(--transition-dur-func);
  }

  .UserInfoLogoutlBtn {
    height: 43px;
    width: 125px;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-right: 27px;
    padding-left: 27px;

    display: flex;
    align-items: center;
    gap: 4px;

    background: var(--primary-btn-color);
    border: none;
    border-radius: 24px 44px;

    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;

    color: var(--primary-font-color);
    stroke: var(--primary-font-color);
    transition: all var(--transition-dur-func);

    @media screen and (min-width: 768px) {
      width: 141px;
      padding-right: 35px;
      padding-left: 35px;
    }

    &:hover {
      background-color: var(--secondary-btn-color);
      scale: 1.05;
    }
  }
`;
