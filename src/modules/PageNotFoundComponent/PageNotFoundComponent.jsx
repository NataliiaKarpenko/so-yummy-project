import img1 from '../../shared/images/pageNotFoundImg/pageNotFoundMobile.png';
import img2 from '../../shared/images/pageNotFoundImg/pageNotFoundMobile@2x.png';
import img3 from '../../shared/images/pageNotFoundImg/pageNotFoundTab.png';
import img4 from '../../shared/images/pageNotFoundImg/pageNotFoundTab@2x.png';
import img5 from '../../shared/images/pageNotFoundImg/pageNotFoundDesktop.png';
import img6 from '../../shared/images/pageNotFoundImg/pageNotFoundDesktop@2x.png';
import { StyledPageNotFoundContainer } from 'shared/components/Container/Container.styled';
import {
  StyledFocusText,
  StyledText,
  StyledTextContainer,
} from './PageNotFoundComponent.styled';
import Pagebackground from 'shared/components/SharedLayoutLoggedIn/PageBackground/PageBackground';

const PageNotFoundComponent = () => {
  return (
    <Pagebackground>
      <StyledPageNotFoundContainer>
        <picture>
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

          <img src={`${img1}`} alt="page404" />
        </picture>
        <StyledTextContainer>
          <StyledFocusText>We are sorry,</StyledFocusText>
          <StyledText>
            but the page you were looking for can’t be found...
          </StyledText>
        </StyledTextContainer>
      </StyledPageNotFoundContainer>
    </Pagebackground>
  );
};

export default PageNotFoundComponent;
