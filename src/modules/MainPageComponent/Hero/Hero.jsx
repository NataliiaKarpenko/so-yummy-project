import { useNavigate } from 'react-router-dom';
import icons from '../../../shared/sprite.svg';
import img1 from '../../../shared/images/mainPageImg/hero/heroPlateMobile.png';
import img2 from '../../../shared/images/mainPageImg/hero/heroPlateMobile@2x.png';
import img3 from '../../../shared/images/mainPageImg/hero/heroPlateTab.png';
import img4 from '../../../shared/images/mainPageImg/hero/heroPlateTab@2x.png';
import img5 from '../../../shared/images/mainPageImg/hero/heroPlateDesktop.png';
import img6 from '../../../shared/images/mainPageImg/hero/heroPlateDesktop@2x.png';
import { StyledContainer } from 'shared/components/Container/Container.styled';
import SearchForm from 'shared/components/SharedPageComponents/SearchForm/SearchForm';
import {
  StyledHeroImageContainer,
  StyledHeroImg,
  StyledHeroImgTextBox,
  StyledLeftSpinach,
  StyledBg,
  StyledArrow,
  StyledHeroImageText,
  StyledLink,
  StyledEmphasis,
  StyledHero,
  StyledHeroText,
  StyledHeroTitle,
} from './HeroStyled';

const Hero = ({ children }) => {
  const navigate = useNavigate();

  const handleSubmit = query => {
    navigate(`/search?query=${query}`);
  };

  return (
    <StyledHero>
      <StyledContainer>
        <StyledLeftSpinach>{children}</StyledLeftSpinach>
        <StyledBg>{children}</StyledBg>
        <StyledHeroTitle>
          <StyledEmphasis>So</StyledEmphasis>
          <span>Yummy</span>
        </StyledHeroTitle>
        <StyledHeroText>
          "What to cook?" is not only a recipe app, it is, in fact, your
          cookbook. You can add your own recipes to save them for the future.
        </StyledHeroText>
        <StyledHeroImageContainer>
          <StyledHeroImg>
            <source
              srcSet={`
                    ${img5} 1x,
                    ${img6} 2x
                  `}
              media="(min-width: 1440px)"
            />
            <source
              srcSet={`
                    ${img3} 1x,
                    ${img4} 2x
                  `}
              media="(min-width: 768px)"
            />
            <source
              srcSet={`
                    ${img1} 1x,
                    ${img2} 2x
                  `}
              media="(max-width: 767px)"
            />

            <img src={`${img1}`} alt="plate with vegetables" />
          </StyledHeroImg>
          <StyledHeroImgTextBox>
            <StyledHeroImageText>
              <StyledEmphasis>Delicious and healthy </StyledEmphasis>way to
              enjoy a variety of fresh ingredients in one satisfying meal
            </StyledHeroImageText>
            <StyledLink to="/categories/Breakfast">
              See recipes
              <svg>
                <use href={icons + '#arrowNarrowRight'}></use>
              </svg>
            </StyledLink>
          </StyledHeroImgTextBox>
        </StyledHeroImageContainer>
        <StyledArrow>{children}</StyledArrow>
        <SearchForm handleSubmit={handleSubmit} />
      </StyledContainer>
    </StyledHero>
  );
};

export default Hero;
