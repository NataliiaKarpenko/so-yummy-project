import { useSelector } from 'react-redux';

import { selectCategories } from 'redux/reduxRecipes/recipesSelectors';
import {
  ContainerWrapper,
  StyledCategoriesList,
  StyledNavLink,
} from './CategoriesList.styled';

const CategoriesList = ({ handleLinkClick }) => {
  const categoriesList = useSelector(selectCategories);

  return (
    <ContainerWrapper>
      <StyledCategoriesList>
        {categoriesList.map(item => {
          return (
            <li key={item.id}>
              <StyledNavLink
                to={`/categories/${item.title}`}
                onClick={handleLinkClick}
              >
                {item.title}
              </StyledNavLink>
            </li>
          );
        })}
      </StyledCategoriesList>
    </ContainerWrapper>
  );
};

export default CategoriesList;
