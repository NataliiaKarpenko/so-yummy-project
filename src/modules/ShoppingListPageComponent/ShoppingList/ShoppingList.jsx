import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

import {
  StyledDCell,
  StyledEmptyRow,
  StyledImgContainer,
  StyledMeasureContainer,
  StyledRemoveBtn,
  StyledRemoveIcon,
  StyledRow,
  StyledShoppingList,
  StyledTHead,
} from './ShoppingList.styled';

import icons from '../../../shared/sprite.svg';
import { removeFromShoppingList } from 'redux/reduxShoppingList/shoppingListOperations';
import noImg from '../../../shared/images/noImage/noImage.png';
import { capitalizeInitialLetter } from 'shared/Utils/capitalizeInitialLetter';

const ShoppingList = ({ shoppingList }) => {
  const dispatch = useDispatch();

  return (
    <StyledShoppingList>
      <thead>
        <tr>
          <StyledTHead colSpan={2}>Products</StyledTHead>
          <StyledTHead>Number</StyledTHead>
          <StyledTHead>Remove</StyledTHead>
        </tr>
      </thead>
      <tbody>
        <StyledEmptyRow headRow={true}></StyledEmptyRow>
        {shoppingList.map(({ productId, title, thumb, measure }) => {
          return (
            <Fragment key={productId}>
              <StyledRow>
                <StyledDCell>
                  <StyledImgContainer>
                    {thumb ? (
                      <img src={thumb} alt={title} />
                    ) : (
                      <img src={noImg} alt="noImage" />
                    )}
                  </StyledImgContainer>
                </StyledDCell>
                <StyledDCell>{capitalizeInitialLetter(title)}</StyledDCell>
                <StyledDCell colSpan={2}>
                  {measure.map(m => {
                    return (
                      <StyledMeasureContainer key={nanoid()}>
                        <span>{m}</span>
                        <StyledRemoveBtn
                          onClick={() =>
                            dispatch(
                              removeFromShoppingList({
                                productId,
                                measure: m,
                              })
                            )
                          }
                        >
                          <StyledRemoveIcon>
                            <use href={icons + '#close'}></use>
                          </StyledRemoveIcon>
                        </StyledRemoveBtn>
                      </StyledMeasureContainer>
                    );
                  })}
                </StyledDCell>
              </StyledRow>
              <StyledEmptyRow></StyledEmptyRow>
            </Fragment>
          );
        })}
      </tbody>
    </StyledShoppingList>
  );
};

export default ShoppingList;
