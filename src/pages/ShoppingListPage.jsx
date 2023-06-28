import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ShoppingListPageComponent from 'modules/ShoppingListPageComponent/ShoppingListPageComponent';
import { getShoppingList } from 'redux/reduxShoppingList/shoppingListOperations';

const ShoppingListPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShoppingList());
  }, [dispatch]);

  return (
    <div>
      <ShoppingListPageComponent />
    </div>
  );
};

export default ShoppingListPage;
