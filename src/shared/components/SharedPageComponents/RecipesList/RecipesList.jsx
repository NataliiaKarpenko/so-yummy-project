import RecipesItem from 'shared/components/SharedPageComponents/RecipesItem/RecipesItem';
import { StyledRecipesList } from './RecipesList.styled';

const RecipesList = ({ recipesList }) => {
  return (
    <StyledRecipesList>
      {recipesList.map(({ title, preview, id, favorite }, index) => {
        return (
          <RecipesItem
            key={id}
            title={title}
            preview={preview}
            id={id}
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
