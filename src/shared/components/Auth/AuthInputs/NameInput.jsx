import {
  StyledInputBox,
  StyledField,
  StyledInputIcon,
  StyledInfoIcon,
  StyledMessage,
} from './AuthFormInputs.styled';
import icons from '../../../../shared/sprite.svg';

const NameInput = ({ errors, className, touched, onBlur, onFocus }) => {
  const error = errors.name && touched.name ? true : false;
  const success = !errors.name && touched.name ? true : false;
  const neutral = !error && !success ? true : false;

  const handleInfoIcon = () => {
    if (error) {
      return (
        <StyledInfoIcon aria-label="error" status="error">
          <use href={icons + '#errorLogo'}></use>
        </StyledInfoIcon>
      );
    } else if (success) {
      return (
        <StyledInfoIcon aria-label="tick" status="success">
          <use href={icons + '#tickLogo'}></use>
        </StyledInfoIcon>
      );
    }
    return;
  };

  const handleInfoMessage = () => {
    if (success) {
      return <StyledMessage status="success">Name is valid</StyledMessage>;
    } else if (error) {
      return <StyledMessage status="error">{errors.name}</StyledMessage>;
    }
    return;
  };

  return (
    <div>
      <StyledInputBox
        neutral={neutral}
        error={error}
        success={success}
        className={className}
      >
        <StyledInputIcon aria-label="user">
          <use href={icons + '#user'}></use>
        </StyledInputIcon>

        <StyledField
          type="text"
          name="name"
          className={className}
          placeholder="Name"
          autoComplete="off"
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {!touched.name && className === 'EditInfo' && (
          <svg width="21" height="17" aria-label="pen" className="EditIcon">
            <use href={icons + '#edit'}></use>
          </svg>
        )}

        {handleInfoIcon()}
      </StyledInputBox>

      {handleInfoMessage()}
    </div>
  );
};

export default NameInput;
