import icons from '../../../../sprite.svg';
import {
  StyledNavigationItem,
  StyledNavLink,
  StyledSearchNavLink,
  StyledNavigationList,
} from './NavigationList.styled';

const NavigationList = ({ text, closeBtnHandler, active }) => {
  return (
    <StyledNavigationList>
      <StyledNavigationItem>
        <StyledNavLink
          to="categories/Beef"
          active={active}
          onClick={closeBtnHandler}
        >
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
        <StyledSearchNavLink to="search" onClick={closeBtnHandler}>
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
