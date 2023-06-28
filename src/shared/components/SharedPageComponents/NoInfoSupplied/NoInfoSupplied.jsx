import img1 from '../../../images/noInfoSupplied/noInfoSuppliedMobile.png';
import img2 from '../../../images/noInfoSupplied/noInfoSuppliedMobile@2x.png';
import img3 from '../../../images/noInfoSupplied/noInfoSuppliedTab.png';
import img4 from '../../../images/noInfoSupplied/noInfoSuppliedTab@2x.png';
import img5 from '../../../images/noInfoSupplied/noInfoSuppliedDesktop.png';
import img6 from '../../../images/noInfoSupplied/noInfoSuppliedDesktop@2x.png';
import { StyledNoInfoSupplied, StyledText } from './NoInfoSupplied.styled';

const NoInfoSupplied = ({ text }) => {
  return (
    <div>
      <StyledNoInfoSupplied>
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
      </StyledNoInfoSupplied>
      <StyledText>{text}</StyledText>
    </div>
  );
};

export default NoInfoSupplied;
