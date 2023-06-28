import Hero from './Hero/Hero';
import Previewcategories from './PreviewCategories/PreviewCategories';
import { StyledPageBackground } from 'shared/components/SharedLayoutLoggedIn/PageBackground/StyledPageBackground';

const MainPageComponent = () => {
  return (
    <div>
      <StyledPageBackground main={true}>
        <Hero />
        <Previewcategories />
      </StyledPageBackground>
    </div>
  );
};

export default MainPageComponent;
