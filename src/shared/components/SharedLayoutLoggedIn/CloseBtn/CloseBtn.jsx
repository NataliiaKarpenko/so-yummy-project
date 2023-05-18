import icons from '../../../sprite.svg';
import { StyledCloseBtn } from './CloseBtn.styled';

const CloseBtn = ({ className, closeBtnHandler }) => {
  return (
    <StyledCloseBtn onClick={closeBtnHandler}>
      <svg aria-label="close" className={className}>
        <use href={icons + '#close'}></use>
      </svg>
    </StyledCloseBtn>
  );
};

export default CloseBtn;
