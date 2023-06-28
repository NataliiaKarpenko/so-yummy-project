import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { StyledIcon } from './Checkbox.styled';
import icons from '../../../../shared/sprite.svg';

import {
  addToShoppingList,
  removeFromShoppingList,
} from 'redux/reduxShoppingList/shoppingListOperations';

const Checkbox = ({ isChecked, productId, measure }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(isChecked);

  const handleCheckBox = () => {
    if (!checked) {
      dispatch(
        addToShoppingList({
          productId,
          measure,
        })
      );
      setChecked(true);
    } else {
      dispatch(
        removeFromShoppingList({
          productId,
          measure,
        })
      );
      setChecked(false);
    }
  };

  return (
    <StyledIcon aria-label="tick" onClick={handleCheckBox}>
      {checked && <use href={icons + '#pick'}></use>}
    </StyledIcon>
  );
};

export default Checkbox;
