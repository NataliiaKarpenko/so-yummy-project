import {
  StyledInputBox,
  StyledField,
  StyledErrorMessage,
  StyledMessage,
} from './AuthFormInputs.styled';
import icons from '../../../../shared/sprite.svg';

const NameInput = ({
  className,
  defaultValue,
  errors,
  touched,
  onBlur,
  onFocus,
}) => {
  return (
    <div>
      <StyledInputBox
        className={
          (errors.name && touched.name && 'InvalidInput') ||
          (!errors.name && touched.name && 'ValidInput') ||
          (!touched.name && `${className}`)
        }
      >
        <svg width="18" height="18" aria-label="user" className="InputIcon">
          <use href={icons + '#user'}></use>
        </svg>
        <StyledField
          type="text"
          name="name"
          placeholder="Name"
          className={className}
          autoComplete="off"
          onFocus={onFocus}
          onBlur={onBlur}

          // defaultValue={defaultValue}
        />
        {!touched.name && (
          <svg width="21" height="17" aria-label="pen" className="EditIcon">
            <use href={icons + '#edit'}></use>
          </svg>
        )}
        {errors.name && touched.name && (
          <svg width="20" height="20" aria-label="error" className="ErrorIcon">
            <use href={icons + '#errorLogo'}></use>
          </svg>
        )}
        {!errors.name && touched.name && (
          <svg width="20" height="20" aria-label="tick" className="SuccessIcon">
            <use href={icons + '#tickLogo'}></use>
          </svg>
        )}
      </StyledInputBox>
      {!errors.name && touched.name && (
        <StyledMessage>Name is valid</StyledMessage>
      )}
      <StyledErrorMessage name="name" component="p" />
    </div>
  );
};

export default NameInput;
