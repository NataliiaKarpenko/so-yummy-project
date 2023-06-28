import Backdrop from '../../SharedLayoutLoggedIn/HeaderComponent/Backdrop/Backdrop';
import { BubbleContainer, Container, StyledImg } from './Motivation.styled';
import bubble from '../../../images/motivations/bubble/bubble.png';
import bubble2x from '../../../images/motivations/bubble/bubble@2x.png';
import CloseBtn from '../../SharedLayoutLoggedIn/CloseBtn/CloseBtn';

const Motivation = ({
  motivation1x,
  motivation2x,
  handleBackdropClick,
  closeBtnHandler,
}) => {
  return (
    <Backdrop handleBackdropClick={handleBackdropClick}>
      <Container>
        <StyledImg
          srcSet={`
                    ${motivation2x} 2x`}
          src={`
                    ${motivation1x} `}
          alt="#"
        />
        <BubbleContainer>
          <img
            srcSet={`
                    ${bubble2x} 2x`}
            src={`
                    ${bubble} `}
            alt="#"
          />
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
