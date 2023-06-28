import { useSelector } from 'react-redux';

import RecipePageHero from './RecipePageHero/RecipePageHero';
import { selectRecipeById } from 'redux/reduxRecipes/recipesSelectors';
import IngredientsList from './Ingredients/IngredientsList/IngredientsList';
import RecipePreparation from './RecipePreparation/RecipePreparation';
import { StyledPageBackground } from 'shared/components/SharedLayoutLoggedIn/PageBackground/StyledPageBackground';
import { StyledContainer } from 'shared/components/Container/Container.styled';

const RecipePageComponent = () => {
  const {
    id,
    title,
    description,
    favorite,
    time,
    ingredients,
    instructions,
    youtube,
    previewImg,
  } = useSelector(selectRecipeById);

  return (
    <>
      <RecipePageHero
        id={id}
        title={title}
        description={description}
        favorite={favorite}
        time={time}
      />
      <StyledPageBackground ingredientsPage={true}>
        <StyledContainer>
          <IngredientsList ingredients={ingredients} />
          <RecipePreparation
            instructions={instructions}
            youtube={youtube}
            previewImg={previewImg}
            title={title}
          />
        </StyledContainer>
      </StyledPageBackground>
    </>
  );
};

export default RecipePageComponent;
