import RecipesItem from 'shared/components/SharedPageComponents/RecipesItem/RecipesItem';
import { StyledRecipesList } from './RecipesList.styled';

const RecipesList = ({ recipesList }) => {
  return (
    <StyledRecipesList>
      {recipesList.map(({ title, preview, _id, favorite }, index) => {
        return (
          <RecipesItem
            key={_id}
            title={title}
            preview={preview}
            id={_id}
            index={index}
            favorite={favorite}
            marginBottom="28px"
          />
        );
      })}
    </StyledRecipesList>
  );
};

export default RecipesList;
