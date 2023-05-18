import { useNavigate } from 'react-router-dom';

import { StyledWelcomePageContainer } from './WelcomePageComponent.styled';
import logoMobile from '../../shared/images/welcomePageImg/logoMobile.png';
import logoMobile2x from '../../shared/images/welcomePageImg/logoMobile@2x.png';
import logoDesktop from '../../shared/images/welcomePageImg/logoDesktop.png';
import logoDesktop2x from '../../shared/images/welcomePageImg/logoDesktop@2x.png';

const WelcomePageComponent = () => {
  const navigate = useNavigate();

  return (
    <StyledWelcomePageContainer>
      <div className="HeroContentContainer">
        <picture className="LogoImg">
          <source
            srcSet={`
                    ${logoDesktop} 1x,
                    ${logoDesktop2x} 2x
                  `}
            media="(min-width: 768px)"
            width="68"
            height="68"
          />
          <source
            srcSet={`
                    ${logoMobile} 1x,
                    ${logoMobile2x} 2x
                  `}
            media="(max-width: 767px)"
            width="54"
            height="54"
          />

          <img src={`${logoMobile}`} alt="logo" width="54" height="54" />
        </picture>
        <h1 className="HeroTitle">Welcome to the app!</h1>
        <p className="HeroText">
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </p>
        <div className="HeroBtnContainer">
          <button
            type="button"
            className="HeroBtn SignupBtn"
            onClick={() => navigate('/register', { replace: true })}
          >
            Sign up
          </button>
          <button
            type="button"
            className="HeroBtn SigninBtn"
            onClick={() => navigate('signin', { replace: true })}
          >
            Sign in
          </button>
        </div>
      </div>
    </StyledWelcomePageContainer>
  );
};

export default WelcomePageComponent;
