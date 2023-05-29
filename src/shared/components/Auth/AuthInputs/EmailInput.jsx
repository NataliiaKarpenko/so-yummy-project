import {
  StyledInputBox,
  StyledField,
  StyledInfoIcon,
  StyledInputIcon,
  StyledMessage,
} from './AuthFormInputs.styled';
import icons from '../../../../shared/sprite.svg';

const EmailInput = ({
  placeholder,
  errors,
  className,
  touched,
  onFocus,
  onBlur,
}) => {
  const error = errors.email && touched.email ? true : false;
  const success = !errors.email && touched.email ? true : false;
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
      return <StyledMessage status="success">Email is valid</StyledMessage>;
    } else if (error) {
      return <StyledMessage status="error">{errors.email}</StyledMessage>;
    }
    return;
  };

  return (
    <div>
      <StyledInputBox neutral={neutral} error={error} success={success}>
        <StyledInputIcon aria-label="email">
          <use href={icons + '#email'}></use>
        </StyledInputIcon>
        <StyledField
          type="email"
          name="email"
          className={className}
          placeholder={placeholder}
          autoComplete="off"
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {handleInfoIcon()}
      </StyledInputBox>
      {handleInfoMessage()}
    </div>
  );
};

export default EmailInput;
