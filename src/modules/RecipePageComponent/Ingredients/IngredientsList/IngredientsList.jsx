import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { selectShoppingList } from 'redux/reduxShoppingList/shoppingList Selectors';
import Checkbox from 'modules/RecipePageComponent/Ingredients/Checkbox/Checkbox';
import noImg from '../../../../shared/images/noImage/noImage.png';

import {
  StyledDCell,
  StyledEmptyRow,
  StyledIngredientsList,
  StyledTHead,
} from './IngredientsList.styled';
import { capitalizeInitialLetter } from 'shared/Utils/capitalizeInitialLetter';

const IngredientsList = ({ ingredients }) => {
  const shoppingList = useSelector(selectShoppingList);

  return (
    <StyledIngredientsList>
      <thead>
        <tr>
          <StyledTHead colSpan={2}>Ingredients</StyledTHead>
          <StyledTHead>Number</StyledTHead>
          <StyledTHead>Add to list</StyledTHead>
        </tr>
      </thead>
      <tbody>
        <StyledEmptyRow headRow={true}></StyledEmptyRow>
        {ingredients.map(({ _id, title, thumb, measure }) => {
          const isChecked = shoppingList.some(
            product =>
              product.productId === _id &&
              product.measure.some(m => m === measure)
          );

          return (
            <Fragment key={_id}>
              <tr>
                <StyledDCell>
                  {thumb ? (
                    <img src={thumb} alt={title} />
                  ) : (
                    <img src={noImg} alt="noImage" />
                  )}
                </StyledDCell>
                <StyledDCell>{capitalizeInitialLetter(title)}</StyledDCell>
                <StyledDCell>
                  <span>{measure}</span>
                </StyledDCell>
                <StyledDCell>
                  <Checkbox
                    isChecked={isChecked}
                    productId={_id}
                    measure={measure}
                  />
                </StyledDCell>
              </tr>
              <StyledEmptyRow></StyledEmptyRow>
            </Fragment>
          );
        })}
      </tbody>
    </StyledIngredientsList>
  );
};

export default IngredientsList;
