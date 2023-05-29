import rectangle1 from '../../../images/pageBackgroundImg/rectangleMobile.svg';
import rectangle2 from '../../../images/pageBackgroundImg/rectangleDesktop.svg';
import circle from '../../../images/pageBackgroundImg/circleMobile.svg';
import blackRectangle from '../../../images/pageBackgroundImg/blackRectangleDesktop.svg';
import {
  StyledBackgroungDecor1,
  StyledBackgroungDecor2,
  StyledBackgroungDecor3,
  StyledPageBackground,
} from './StyledPageBackground';

const Pagebackground = ({ children }) => {
  return (
    <StyledPageBackground>
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
          srcSet={`
                    ${blackRectangle}
                   
                  `}
          media="(min-width: 768px)"
        />

        <source
          srcSet={`
                    ${circle} 
                    
                  `}
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
export default Pagebackground;
