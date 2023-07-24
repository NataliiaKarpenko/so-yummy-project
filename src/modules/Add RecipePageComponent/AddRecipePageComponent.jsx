import { StyledContainer } from 'shared/components/Container/Container.styled';
import PageBackground from 'shared/components/SharedLayoutLoggedIn/PageBackground/PageBackground';
import Title from 'shared/components/SharedPageComponents/Title/Title';
import AddRecipeForm from './AddRecipeForm/AddRecipeForm';
import PopularRecipes from './PopularRecipes/PopularRecipes';
import SocialNetworks from 'shared/components/SharedLayoutLoggedIn/FooterComponent/SocialNetworks/SocialNetworks';
import {
  PageContainer,
  PopularRecipesContainer,
  SectionTitle,
} from './AddRecipePageComponent.styled';
import { useState } from 'react';
import { useEffect } from 'react';

const AddRecipePageComponent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth]);
  return (
    <PageBackground page={true}>
      <StyledContainer>
        <Title title="Add your recipe" />
        <PageContainer>
          <AddRecipeForm />
          <PopularRecipesContainer>
            {windowWidth >= 1440 && (
              <div>
                <SectionTitle>Follow us</SectionTitle>
                <SocialNetworks poprec={true} />
              </div>
            )}

            <PopularRecipes />
          </PopularRecipesContainer>
        </PageContainer>
      </StyledContainer>
    </PageBackground>
  );
};

export default AddRecipePageComponent;
