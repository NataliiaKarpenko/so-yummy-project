import { useState } from 'react';

import {
  StyledInputBox,
  StyledField,
  StyledInputIcon,
  StyledInfoIcon,
  StyledMessage,
} from './AuthFormInputs.styled';
import icons from '../../../../shared/sprite.svg';
import AuthFormVisibilityButton from 'shared/components/Auth/AuthFormVisibilityButton/AuthFormVisibilityButton';

const PasswordInput = ({
  errors,
  className,
  touched,
  onChange,
  onFocus,
  onBlur,
}) => {
  const [message, setMessage] = useState('');
  const [hovered, setHovered] = useState(false);
  const [passwordType, setPasswordType] = useState('password');

  const error = errors.password && touched.password ? true : false;
  const warning = message ? true : false;
  const success =
    !errors.password && touched.password && !warning ? true : false;
  const neutral = !error && !warning && !success ? true : false;

  const placeholderText = hovered
    ? '\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF'
    : 'Password';

  const togglePasswordPlaceholder = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      return;
    }
    setPasswordType('password');
  };

  const handleInfoIcon = () => {
    if (error) {
      return (
        <StyledInfoIcon aria-label="error" status="error">
          <use href={icons + '#errorLogo'}></use>
        </StyledInfoIcon>
      );
    } else if (warning) {
      return (
        <StyledInfoIcon aria-label="exclamation mark" status="warning">
          <use href={icons + '#exclamationLogo'}></use>
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
    if (neutral) {
      return (
        <StyledMessage status="neutral">
          Password must be at least 6 characters long. Can contain letters and
          digits
        </StyledMessage>
      );
    } else if (warning) {
      return <StyledMessage status="warning">{message}</StyledMessage>;
    } else if (success) {
      return <StyledMessage status="success">Password is secure</StyledMessage>;
    } else if (error) {
      return <StyledMessage status="error">{errors.password}</StyledMessage>;
    }
    return;
  };

  const handlePasswordChange = event => {
    const passwordValue = event.target.value;
    onChange(event);
    const digitTest = /\d/;
    const letterTest = /[a-zA-Z]/;

    if (!digitTest.test(passwordValue) && passwordValue.length >= 6) {
      setMessage('Insecure password. Add at least one digit');
    } else if (!letterTest.test(passwordValue) && passwordValue.length >= 6) {
      setMessage('Insecure password. Add at least one letter');
    } else {
      setMessage('');
    }
  };

  return (
    <div>
      <StyledInputBox
        neutral={neutral}
        error={error}
        warning={warning}
        success={success}
      >
        <StyledInputIcon aria-label="lock">
          <use href={icons + '#lock'}></use>
        </StyledInputIcon>

        <StyledField
          type={passwordType}
          name="password"
          className={className}
          placeholder={placeholderText}
          autoComplete="off"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onChange={handlePasswordChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />

        {handleInfoIcon()}
      </StyledInputBox>

      {handleInfoMessage()}

      <AuthFormVisibilityButton
        passwordType={passwordType}
        togglePassword={togglePasswordPlaceholder}
      />
    </div>
  );
};

export default PasswordInput;
