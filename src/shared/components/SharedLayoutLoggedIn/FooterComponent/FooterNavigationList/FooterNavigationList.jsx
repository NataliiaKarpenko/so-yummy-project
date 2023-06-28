import { useLocation } from 'react-router-dom';
import {
  StyledFooterIngredientsLink,
  StyledFooterNavigationItem,
  StyledFooterNavigationLink,
} from './FooterNavigationList.styled';
import { scrollToTop } from 'shared/Utils/scrollToTop';

const FooterNavigationList = () => {
  const location = useLocation();

  const active = location.search.includes('?type=ingredients') ? 1 : 0;

  const linkClickHandker = () => {
    scrollToTop();
  };
  return (
    <ul>
      <StyledFooterNavigationItem>
        <StyledFooterIngredientsLink
          to="search?type=ingredients"
          active={active}
          className={active ? 'active' : ''}
          onClick={linkClickHandker}
        >
          Ingredients
        </StyledFooterIngredientsLink>
      </StyledFooterNavigationItem>
      <StyledFooterNavigationItem>
        <StyledFooterNavigationLink to="add" onClick={linkClickHandker}>
          Add recipes
        </StyledFooterNavigationLink>
      </StyledFooterNavigationItem>
      <StyledFooterNavigationItem>
        <StyledFooterNavigationLink to="my" onClick={linkClickHandker}>
          My recipes
        </StyledFooterNavigationLink>
      </StyledFooterNavigationItem>
      <StyledFooterNavigationItem>
        <StyledFooterNavigationLink to="favorite" onClick={linkClickHandker}>
          Favorite
        </StyledFooterNavigationLink>
      </StyledFooterNavigationItem>
      <StyledFooterNavigationItem>
        <StyledFooterNavigationLink
          to="Shopping-list"
          onClick={linkClickHandker}
        >
          Shopping list
        </StyledFooterNavigationLink>
      </StyledFooterNavigationItem>
    </ul>
  );
};

export default FooterNavigationList;
