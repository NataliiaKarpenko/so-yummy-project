import icons from '../../../sprite.svg';
import { StyledCloseBtn } from './CloseBtn.styled';

const CloseBtn = ({ closeBtnHandler }) => {
  return (
    <StyledCloseBtn onClick={closeBtnHandler} modalCloseBtn>
      <svg aria-label="close">
        <use href={icons + '#close'}></use>
      </svg>
    </StyledCloseBtn>
  );
};

export default CloseBtn;
