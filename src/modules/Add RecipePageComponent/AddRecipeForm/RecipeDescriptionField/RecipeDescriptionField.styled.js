import { ErrorMessage, Field } from 'formik';
import styled from 'styled-components';

import img1 from '../../../../shared/images/addRecipeImg/addRecipe.png';
import img2 from '../../../../shared/images/addRecipeImg/addRecipe@2x.png';

export const DescriptionContainer = styled.div`
  margin-bottom: 67px;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 32px;
    margin-bottom: 104px;
  }

  @media screen and (min-width: 1440px) {
    gap: 50px;
  }
`;

export const DescriptionItem = styled.li`
  position: relative;
  width: 100%;
  height: 39px;

  &:not(:last-child) {
    margin-bottom: 24px;
  }

  &:nth-child(-n + 2) {
    transition: all ${props => props.theme.transitionDurFunc};

    border-bottom: ${props =>
      props.isError
        ? `1px solid ${props.theme.globalColors.error}`
        : `1px solid ${props.theme.input.bottomBorder}`};
  }

  @media screen and (min-width: 768px) {
    width: 393px;
    height: 42px;

    &:not(:last-child) {
      margin-bottom: 32px;
    }
  }

  @media screen and (min-width: 1440px) {
    &:not(:last-child) {
      margin-bottom: 40px;
    }
  }
`;

export const DescriptionField = styled(Field)`
  width: 100%;
  height: 100%;
  padding-bottom: 18px;
  border: none;
  outline: none;
  background-color: transparent;

  color: ${props => props.theme.text.textBright};
  font-size: 14px;
  font-weight: 400;
  line-height: normal;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  &::placeholder {
    color: ${props => props.theme.text.inputPlaceholderAddRecipe};
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.28px;

    @media screen and (min-width: 768px) {
      font-size: 16px;
      letter-spacing: -0.32px;
    }
  }
`;

export const ErrorContainer = styled(ErrorMessage)`
  position: absolute;
  color: ${props => props.theme.globalColors.error};
  font-size: 12px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.24px;
  transition: all ${props => props.theme.transitionDurFunc};

  bottom: ${props => (props.name === 'fullImage' ? '102%' : '3px')};

  left: ${props => (props.name === 'fullImage' ? '0%' : '0')};
`;

export const AddDishPhotoContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  height: 268px;
  background-color: ${props => props.theme.globalColors.accentPrimary};
  border-radius: 8px;
  cursor: pointer;

  background-image: url(${img1});
  background-size: 64px 64px;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (max-width: 767px) {
    width: 100%;
    max-width: 279px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url(${img2});
  }

  @media screen and (min-width: 768px) {
    width: 279px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1440px) {
    width: 357px;
    height: 344px;
  }
`;

export const AddDishPhotoField = styled(Field)`
  width: 100%;
  height: 100%;
`;

export const AddPhotoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
