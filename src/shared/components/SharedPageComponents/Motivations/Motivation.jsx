import Backdrop from '../../SharedLayoutLoggedIn/HeaderComponent/Backdrop/Backdrop';
import { BubbleContainer, Container } from './Motivation.styled';

import motivationMob1x from '../../../images/motivations/motivationFavorite/motivationFavoriteMob.png';
import motivationMob2x from '../../../images/motivations/motivationFavorite/motivationFavoriteMob@2x.png';
import motivationTab1x from '../../../images/motivations/motivationFavorite/motivationFavoriteTab.png';
import motivationTab2x from '../../../images/motivations/motivationFavorite/motivationFavoriteTab@2x.png';
import motivationDesktop1x from '../../../images/motivations/motivationFavorite/motivationFavoriteDesktop.png';
import motivationDesktop2x from '../../../images/motivations/motivationFavorite/motivationFavoriteDesktop@2x.png';

import bubbleMob1x from '../../../images/motivations/bubble/bubbleMob.png';
import bubbleMob2x from '../../../images/motivations/bubble/bubbleMob@2x.png';
import bubbleTab1x from '../../../images/motivations/bubble/bubbleTab.png';
import bubbleTab2x from '../../../images/motivations/bubble/bubbleTab@2x.png';
import bubbleDesktop1x from '../../../images/motivations/bubble/bubbleDesktop.png';
import bubbleDesktop2x from '../../../images/motivations/bubble/bubbleDesktop@2x.png';
import CloseBtn from '../../SharedLayoutLoggedIn/CloseBtn/CloseBtn';

const Motivation = ({ handleBackdropClick, closeBtnHandler }) => {
  return (
    <Backdrop handleBackdropClick={handleBackdropClick}>
      <Container>
        <picture>
          <source
            srcSet={` ${motivationDesktop2x} 2x,
                    ${motivationDesktop1x} 1x`}
            media="(min-width: 1200px)"
          />
          <source
            srcSet={` ${motivationTab2x} 2x,
                    ${motivationTab1x} 1x`}
            media="(min-width: 768px)"
          />
          <source
            srcSet={` ${motivationMob2x} 2x,
                    ${motivationMob1x} 1x`}
            media="(max-width: 767px)"
          />
          <img
            src={`
                    ${motivationMob1x} `}
            alt="dish"
          />
        </picture>
        <BubbleContainer>
          <picture>
            <source
              srcSet={` ${bubbleDesktop2x} 2x,
                    ${bubbleDesktop1x} 1x`}
              media="(min-width: 1200px)"
            />
            <source
              srcSet={` ${bubbleTab2x} 2x,
                    ${bubbleTab1x} 1x`}
              media="(min-width: 768px)"
            />
            <source
              srcSet={` ${bubbleMob2x} 2x,
                    ${bubbleMob2x} 1x`}
              media="(max-width: 767px)"
            />
            <img
              src={`
                    ${bubbleMob1x} `}
              alt="bubble"
            />
          </picture>

          <p>
            <span>Wow!</span> You have added the first recipe to your favorites!
          </p>
          <CloseBtn motivationBtn={true} closeBtnHandler={closeBtnHandler} />
        </BubbleContainer>
      </Container>
    </Backdrop>
  );
};

export default Motivation;
