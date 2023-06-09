import icons from '../../../sprite.svg';
import {
  StyledAuthFormVisibilityBtnContainer,
  StyledButton,
} from './AuthFormVisibilityButton.styled';

const AuthFormVisibilityButton = ({ passwordType, togglePassword }) => {
  return (
    <StyledAuthFormVisibilityBtnContainer onClick={togglePassword}>
      <StyledButton type="button">
        {passwordType === 'password' ? (
          <svg width="15" height="15" aria-label="eye">
            <use href={icons + '#eye'}></use>
          </svg>
        ) : (
          <svg width="15" height="15" aria-label="blocked eye">
            <use href={icons + '#eyeBlocked'}></use>
          </svg>
        )}
      </StyledButton>
      <p>Show password</p>
    </StyledAuthFormVisibilityBtnContainer>
  );
};

export default AuthFormVisibilityButton;
