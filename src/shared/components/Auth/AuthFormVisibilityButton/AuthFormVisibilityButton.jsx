import icons from '../../../sprite.svg';
import { StyledAuthFormVisibilityBtnContainer } from './AuthFormVisibilityButton.styled';

const AuthFormVisibilityButton = ({ passwordType, togglePassword }) => {
  return (
    <StyledAuthFormVisibilityBtnContainer>
      <button type="button" onClick={togglePassword}>
        {passwordType === 'password' ? (
          <svg width="15" height="15" aria-label="eye">
            <use href={icons + '#eye'}></use>
          </svg>
        ) : (
          <svg width="15" height="15" aria-label="blocked eye">
            <use href={icons + '#eyeBlocked'}></use>
          </svg>
        )}
      </button>
      <p>Show password</p>
    </StyledAuthFormVisibilityBtnContainer>
  );
};

export default AuthFormVisibilityButton;
