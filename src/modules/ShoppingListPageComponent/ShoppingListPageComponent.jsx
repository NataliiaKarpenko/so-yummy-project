import { StyledContainer } from 'shared/components/Container/Container.styled';
import PageBackground from 'shared/components/SharedLayoutLoggedIn/PageBackground/PageBackground';
import Title from 'shared/components/SharedPageComponents/Title/Title';
import ShoppingList from './ShoppingList/ShoppingList';
import NoInfoSupplied from 'shared/components/SharedPageComponents/NoInfoSupplied/NoInfoSupplied';
import { useSelector } from 'react-redux';
import { selectShoppingList } from 'redux/reduxShoppingList/shoppingList Selectors';

const ShoppingListPageComponent = () => {
  const shoppingList = useSelector(selectShoppingList);

  return (
    <PageBackground page={true}>
      <StyledContainer>
        <Title title="Shopping list" />

        {shoppingList.length === 0 ? (
          <NoInfoSupplied text="You haven't added anything to your shopping list yet..." />
        ) : (
          <ShoppingList shoppingList={shoppingList} />
        )}
      </StyledContainer>
    </PageBackground>
  );
};

export default ShoppingListPageComponent;
