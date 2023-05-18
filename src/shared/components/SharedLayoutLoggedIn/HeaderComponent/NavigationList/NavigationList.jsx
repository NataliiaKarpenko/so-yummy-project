import { NavLink } from 'react-router-dom';

import icons from '../../../../sprite.svg';
import { StyledNavigationList } from './NavigationList.styled';

const NavigationList = ({ text, closeBtnHandler }) => {
  return (
    <StyledNavigationList>
      <li className="NavigationListItem">
        <NavLink
          to="categories/:categoryName"
          className="NavLink"
          onClick={closeBtnHandler}
        >
          Categories
        </NavLink>
      </li>
      <li className="NavigationListItem">
        <NavLink to="add" className="NavLink" onClick={closeBtnHandler}>
          Add recipes
        </NavLink>
      </li>
      <li className="NavigationListItem">
        <NavLink to="my" className="NavLink" onClick={closeBtnHandler}>
          My recipes
        </NavLink>
      </li>
      <li className="NavigationListItem">
        <NavLink to="favorite" className="NavLink" onClick={closeBtnHandler}>
          Favorites
        </NavLink>
      </li>
      <li className="NavigationListItem">
        <NavLink
          to="shopping-list"
          className="NavLink"
          onClick={closeBtnHandler}
        >
          Shopping list
        </NavLink>
      </li>
      <li className="NavigationListItem">
        <NavLink
          to="search"
          className="NavLink SearchNavLink"
          onClick={closeBtnHandler}
        >
          <svg width="20" height="20" aria-label="search">
            <use href={icons + '#search'}></use>
          </svg>
          {text}
        </NavLink>
      </li>
    </StyledNavigationList>
  );
};

export default NavigationList;
