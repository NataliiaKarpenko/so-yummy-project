import {
  StyledFooterNavigationItem,
  StyledFooterNavigationLink,
} from './FooterNavigationList.styled';

const FooterNavigationList = () => {
  return (
    <ul>
      <StyledFooterNavigationItem>
        <StyledFooterNavigationLink to="search">
          Ingredients
        </StyledFooterNavigationLink>
      </StyledFooterNavigationItem>
      <StyledFooterNavigationItem>
        <StyledFooterNavigationLink to="add">
          Add recipes
        </StyledFooterNavigationLink>
      </StyledFooterNavigationItem>
      <StyledFooterNavigationItem>
        <StyledFooterNavigationLink to="my">
          My recipes
        </StyledFooterNavigationLink>
      </StyledFooterNavigationItem>
      <StyledFooterNavigationItem>
        <StyledFooterNavigationLink to="favourite">
          Favorite
        </StyledFooterNavigationLink>
      </StyledFooterNavigationItem>
      <StyledFooterNavigationItem>
        <StyledFooterNavigationLink to="Shopping-list">
          Shopping list
        </StyledFooterNavigationLink>
      </StyledFooterNavigationItem>
    </ul>
  );
};

export default FooterNavigationList;
