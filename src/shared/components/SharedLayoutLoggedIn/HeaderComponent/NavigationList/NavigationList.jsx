import icons from '../../../../sprite.svg';
import {
  StyledNavigationItem,
  StyledNavLink,
  StyledNavigationList,
} from './NavigationList.styled';

const NavigationList = ({ text, closeBtnHandler }) => {
  return (
    <StyledNavigationList>
      <StyledNavigationItem>
        <StyledNavLink to="categories/:categoryName" onClick={closeBtnHandler}>
          Categories
        </StyledNavLink>
      </StyledNavigationItem>
      <StyledNavigationItem>
        <StyledNavLink to="add" onClick={closeBtnHandler}>
          Add recipes
        </StyledNavLink>
      </StyledNavigationItem>
      <StyledNavigationItem>
        <StyledNavLink to="my" onClick={closeBtnHandler}>
          My recipes
        </StyledNavLink>
      </StyledNavigationItem>
      <StyledNavigationItem>
        <StyledNavLink to="favorite" onClick={closeBtnHandler}>
          Favorites
        </StyledNavLink>
      </StyledNavigationItem>
      <StyledNavigationItem>
        <StyledNavLink to="shopping-list" onClick={closeBtnHandler}>
          Shopping list
        </StyledNavLink>
      </StyledNavigationItem>
      <StyledNavigationItem>
        <StyledNavLink to="search" onClick={closeBtnHandler}>
          <svg width="20" height="20" aria-label="search">
            <use href={icons + '#search'}></use>
          </svg>
          {text}
        </StyledNavLink>
      </StyledNavigationItem>
    </StyledNavigationList>
  );
};

export default NavigationList;
