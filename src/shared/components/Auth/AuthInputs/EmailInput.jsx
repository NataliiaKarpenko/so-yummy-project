import {
  StyledInputBox,
  StyledField,
  StyledErrorMessage,
  StyledMessage,
} from './AuthFormInputs.styled';
import icons from '../../../../shared/sprite.svg';

const EmailInput = ({ className, errors, touched, onFocus, onBlur }) => {
  return (
    <div>
      <StyledInputBox
        className={
          (errors.email && touched.email && 'InvalidInput') ||
          (!errors.email && touched.email && 'ValidInput') ||
          `${className}`
        }
      >
        <svg width="18" height="18" aria-label="user" className="InputIcon">
          <use href={icons + '#email'}></use>
        </svg>
        <StyledField
          type="email"
          name="email"
          className={className}
          placeholder="Email"
          autoComplete="off"
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {errors.email && touched.email && (
          <svg width="20" height="20" aria-label="error" className="ErrorIcon">
            <use href={icons + '#errorLogo'}></use>
          </svg>
        )}
        {!errors.email && touched.email && (
          <svg width="20" height="20" aria-label="tick" className="SuccessIcon">
            <use href={icons + '#tickLogo'}></use>
          </svg>
        )}
      </StyledInputBox>
      {!errors.email && touched.email && (
        <StyledMessage>Email is valid</StyledMessage>
      )}
      <StyledErrorMessage name="email" component="p" />
    </div>
  );
};

export default EmailInput;
