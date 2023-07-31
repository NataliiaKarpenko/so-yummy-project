import { Field } from 'formik';
import styled from 'styled-components';

export const DropDownBox = styled(Field)`
  &.dropdown-enter {
    transform: translateY(-100%);
    z-index: -11;
  }

  &.dropdown-enter-active {
    transform: translateY(0);
    transition: all ${props => props.theme.transitionDurFunc};
  }
  &.dropdown-exit {
    transform: translateY(0);
  }

  &.dropdown-exit-active {
    transform: translateY(-100%);
    transition: all ${props => props.theme.transitionDurFunc};
  }

  position: absolute;
  z-index: 1000;
  top: 25px;
  right: -20px;
  width: 123px;

  height: calc((6 * 18px) + (8px * 2) + (6px * 5));
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: ${props => props.theme.select.dropDownBackground};
  border-radius: 6px;
  box-shadow: 0px 6.518518447875977px 7.8222222328186035px 0px
    rgba(0, 0, 0, 0.03);

  overflow-y: scroll;
  overflow-x: hidden;

  @media screen and (min-width: 768px) {
    right: 0px;
    width: 132px;
    height: calc((6 * 21px) + (8px * 2) + (4px * 5));
  }

  @media screen and (min-width: 1440px) {
    right: -20px;
    width: 132px;
    height: calc((6 * 24px) + (8px * 2) + (4px * 5));
  }

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: transparent; /* color of the tracking area */
  }

  &::-webkit-scrollbar-thumb {
    height: 93px;
    background-color: ${props => props.theme.select.scroll};
    border-radius: 12px;
    border: 4px solid ${props => props.theme.select.dropDownBackground};
  }
`;

export const DropDownItem = styled.li`
  padding-right: 14px;
  padding-left: 14px;
  display: flex;
  align-items: center;
  height: 18px;
  cursor: pointer;

  color: ${props => props.theme.text.dropDown};
  font-size: 12px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.24px;
  transition: all ${props => props.theme.transitionDurFunc};

  justify-content: ${props => (props.measure === true ? 'end' : 'left')};

  &:not(:last-child) {
    margin-bottom: 6px;
  }

  @media screen and (min-width: 768px) {
    height: 21px;
    padding-right: 18px;
    padding-left: 18px;
    font-size: 14px;

    &:not(:last-child) {
      margin-bottom: 4px;
    }
  }

  @media screen and (min-width: 1440px) {
    height: 24px;
  }

  &.active {
    color: ${props => props.theme.text.dropDownActive};
  }

  &.hovered {
    background-color: ${props => props.theme.select.hovered};
    scale: 1.01;
  }
`;

export const ErrorContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 3px;
  color: ${props => props.theme.globalColors.error};
  font-size: 12px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.24px;
`;
