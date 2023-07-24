import RecipesItem from 'shared/components/SharedPageComponents/RecipesItem/RecipesItem';
import { StyledRecipesList } from './RecipesList.styled';
import { Fragment } from 'react';

const RecipesList = ({ recipesList }) => {
  return (
    <StyledRecipesList>
      {recipesList.map(({ title, preview, _id, favorite }, index) => {
        return (
          <Fragment key={_id}>
            <RecipesItem
              title={title}
              preview={preview}
              id={_id}
              index={index}
              favorite={favorite}
              marginBottom="28px"
            />
          </Fragment>
        );
      })}
    </StyledRecipesList>
  );
};

export default RecipesList;
