import icons from '../../../sprite.svg';
import { StyledCloseBtn } from './CloseBtn.styled';

const CloseBtn = ({
  closeBtnHandler,
  modalCloseBtn,
  menuBtn,
  motivationBtn,
  deleteDishPhotoBtn,
  ingredientFieldBtn,
}) => {
  return (
    <StyledCloseBtn
      type="button"
      onClick={closeBtnHandler}
      modalCloseBtn={modalCloseBtn}
      menuBtn={menuBtn}
      motivationBtn={motivationBtn}
      deleteDishPhotoBtn={deleteDishPhotoBtn}
      ingredientFieldBtn={ingredientFieldBtn}
    >
      <svg aria-label="close">
        <use href={icons + '#close'}></use>
      </svg>
    </StyledCloseBtn>
  );
};

export default CloseBtn;
