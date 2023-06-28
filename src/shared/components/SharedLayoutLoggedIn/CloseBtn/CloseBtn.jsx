import icons from '../../../sprite.svg';
import { StyledCloseBtn } from './CloseBtn.styled';

const CloseBtn = ({
  closeBtnHandler,
  modalCloseBtn,
  menuBtn,
  motivationBtn,
}) => {
  return (
    <StyledCloseBtn
      onClick={closeBtnHandler}
      modalCloseBtn={modalCloseBtn}
      menuBtn={menuBtn}
      motivationBtn={motivationBtn}
    >
      <svg aria-label="close">
        <use href={icons + '#close'}></use>
      </svg>
    </StyledCloseBtn>
  );
};

export default CloseBtn;
