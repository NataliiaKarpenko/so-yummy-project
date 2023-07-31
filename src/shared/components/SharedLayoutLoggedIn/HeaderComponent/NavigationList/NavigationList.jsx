import icons from '../../../../sprite.svg';
import {
  StyledNavigationItem,
  StyledNavLink,
  StyledSearchNavLink,
  StyledNavigationList,
} from './NavigationList.styled';

const NavigationList = ({ text, closeBtnHandler, active, recipe }) => {
  return (
    <StyledNavigationList>
      <StyledNavigationItem>
        <StyledNavLink
          to="categories/Beef"
          active={active}
          recipe={recipe}
          onClick={closeBtnHandler}
        >
          Categories
        </StyledNavLink>
      </StyledNavigationItem>
      <StyledNavigationItem>
        <StyledNavLink to="add" recipe={recipe} onClick={closeBtnHandler}>
          Add recipes
        </StyledNavLink>
      </StyledNavigationItem>
      <StyledNavigationItem>
        <StyledNavLink to="my" recipe={recipe} onClick={closeBtnHandler}>
          My recipes
        </StyledNavLink>
      </StyledNavigationItem>
      <StyledNavigationItem>
        <StyledNavLink to="favorite" recipe={recipe} onClick={closeBtnHandler}>
          Favorites
        </StyledNavLink>
      </StyledNavigationItem>
      <StyledNavigationItem>
        <StyledNavLink
          to="shopping-list"
          recipe={recipe}
          onClick={closeBtnHandler}
        >
          Shopping list
        </StyledNavLink>
      </StyledNavigationItem>
      <StyledNavigationItem>
        <StyledSearchNavLink
          to="search"
          recipe={recipe}
          onClick={closeBtnHandler}
        >
          <svg width="20" height="20" aria-label="search">
            <use href={icons + '#search'}></use>
          </svg>
          <span>{text}</span>
        </StyledSearchNavLink>
      </StyledNavigationItem>
    </StyledNavigationList>
  );
};

export default NavigationList;
