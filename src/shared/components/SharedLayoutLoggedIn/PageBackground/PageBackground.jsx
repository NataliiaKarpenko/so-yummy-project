import rectangle1 from '../../../images/pageBackgroundImg/rectangleMobile.svg';
import rectangle2 from '../../../images/pageBackgroundImg/rectangleDesktop.svg';
import circle from '../../../images/pageBackgroundImg/circleMobile.svg';
import blackRectangle from '../../../images/pageBackgroundImg/blackRectangleDesktop.svg';
import rectangleDark2 from '../../../images/pageBackgroundImg/rectangleDesktopDark@2x.svg';
import circleDark2 from '../../../images/pageBackgroundImg/circleMobileDark@2x.svg';
import {
  StyledBackgroungDecor1,
  StyledBackgroungDecor2,
  StyledBackgroungDecor3,
  StyledPageBackground,
} from './StyledPageBackground';
import { useSelector } from 'react-redux';
import { selectThemeIsLight } from 'redux/reduxTheme/themeSelector';

const PageBackground = ({ children, main, page }) => {
  const isLight = useSelector(selectThemeIsLight);

  return (
    <StyledPageBackground main={main} page={page}>
      <StyledBackgroungDecor1>
        <source
          srcSet={`
                    ${rectangle2}
                   
                  `}
          media="(min-width: 768px)"
        />

        <source
          srcSet={`
                    ${rectangle1} 
                    
                  `}
          media="(max-width: 767px)"
        />

        <img src={`${rectangle1}`} alt="decor" />
      </StyledBackgroungDecor1>

      <StyledBackgroungDecor2>
        <source
          srcSet={
            isLight
              ? `
                    ${blackRectangle}
                   
                  `
              : `${rectangleDark2}`
          }
          media="(min-width: 768px)"
        />

        <source
          srcSet={
            isLight
              ? `
                    ${circle} 
                    
                  `
              : `${circleDark2}`
          }
          media="(max-width: 767px)"
        />

        <img src={`${circle}`} alt="decor" />
      </StyledBackgroungDecor2>

      <StyledBackgroungDecor3>
        <source
          srcSet={`
                    ${rectangle2}
                   
                  `}
          media="(min-width: 768px)"
        />

        <source
          srcSet={`
                    ${rectangle1} 
                    
                  `}
          media="(max-width: 767px)"
        />

        <img src={`${rectangle1}`} alt="decor" />
      </StyledBackgroungDecor3>
      {children}
    </StyledPageBackground>
  );
};
export default PageBackground;
