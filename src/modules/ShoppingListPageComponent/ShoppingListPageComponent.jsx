import { StyledContainer } from 'shared/components/Container/Container.styled';
import PageBackground from 'shared/components/SharedLayoutLoggedIn/PageBackground/PageBackground';
import Title from 'shared/components/SharedPageComponents/Title/Title';
import ShoppingList from './ShoppingList/ShoppingList';
import NoInfoSupplied from 'shared/components/SharedPageComponents/NoInfoSupplied/NoInfoSupplied';
import { useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectShoppingList,
} from 'redux/reduxShoppingList/shoppingList Selectors';
import Loader from 'shared/components/Loader/Loader';

const ShoppingListPageComponent = () => {
  const shoppingList = useSelector(selectShoppingList);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <PageBackground page={true}>
          <StyledContainer>
            <Title title="Shopping list" />

            {shoppingList.length > 0 ? (
              <ShoppingList shoppingList={shoppingList} />
            ) : (
              <NoInfoSupplied text="You haven't added anything to your shopping list yet..." />
            )}
          </StyledContainer>
        </PageBackground>
      )}
    </>
  );
};

export default ShoppingListPageComponent;
