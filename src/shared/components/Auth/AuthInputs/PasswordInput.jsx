import { useState } from 'react';

import {
  StyledInputBox,
  StyledField,
  StyledMessage,
  StyledErrorMessage,
  StyledPasswordRequirements,
} from './AuthFormInputs.styled';
import icons from '../../../../shared/sprite.svg';
import AuthFormVisibilityButton from 'shared/components/Auth/AuthFormVisibilityButton/AuthFormVisibilityButton';

const PasswordInput = ({
  className,
  errors,
  touched,
  onChange,
  onFocus,
  onBlur,
}) => {
  const [message, setMessage] = useState('');
  const [hovered, setHovered] = useState(false);
  const [passwordType, setPasswordType] = useState('password');

  const placeholderText = hovered
    ? '\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF'
    : 'Password';

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

  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      return;
    }
    setPasswordType('password');
  };

  return (
    <div>
      <StyledInputBox
        className={
          (errors.password && touched.password && 'InvalidInput') ||
          (!errors.password && message && 'InsecureInput') ||
          (!errors.password && !message && touched.password && 'ValidInput') ||
          (!touched.password && `${className}`)
        }
      >
        <svg width="18" height="18" aria-label="lock" className="InputIcon">
          <use href={icons + '#lock'}></use>
        </svg>
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
        {errors.password && touched.password && (
          <svg width="20" height="20" aria-label="error" className="ErrorIcon">
            <use href={icons + '#errorLogo'}></use>
          </svg>
        )}
        {!errors.password && message && (
          <svg
            width="20"
            height="20"
            aria-label="exclamation mark"
            className="WarningIcon"
          >
            <use href={icons + '#exclamationLogo'}></use>
          </svg>
        )}
        {!errors.password && !message && touched.password && (
          <svg width="20" height="20" aria-label="tick" className="SuccessIcon">
            <use href={icons + '#tickLogo'}></use>
          </svg>
        )}
      </StyledInputBox>

      {!touched.password && !message && (
        <StyledPasswordRequirements>
          Password must be at least 6 characters long. Can contain letters and
          digits
        </StyledPasswordRequirements>
      )}

      {!errors.password && (
        <StyledMessage message={message}>{message}</StyledMessage>
      )}

      {!errors.password && touched.password && !message && (
        <StyledMessage>Password is secure</StyledMessage>
      )}

      <StyledErrorMessage name="password" component="p" />

      <AuthFormVisibilityButton
        passwordType={passwordType}
        togglePassword={togglePassword}
      />
    </div>
  );
};

export default PasswordInput;
