import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import NameInput from '../../shared/components/Auth/AuthInputs/NameInput';
import EmailInput from '../../shared/components/Auth/AuthInputs/EmailInput';
import PasswordInput from '../../shared/components/Auth/AuthInputs/PasswordInput';
import SubmitButton from 'shared/components/Auth/SubmitButton/SubmitButton';

import {
  StyledFormContainer,
  StyledForm,
  StyledTitle,
  StyledInputsContainer,
} from '../../shared/components/Auth/AuthStyles/AuthForm.styled';
import { validationSchema } from '../../shared/Variables/validationSchema';
import { signup } from 'redux/reduxAuth/authOperations';

const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema.signup}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        dispatch(
          signup({
            name: values.name,
            email: values.email,
            password: values.password,
          })
        );

        setSubmitting(false);
        resetForm();
      }}
    >
      {({
        values,
        isSubmitting,
        errors,
        touched,
        handleChange,
        setFieldTouched,
        setFieldValue,
      }) => {
        const handleInputFocus = e => {
          setFieldTouched(e.target.name, false);
        };

        const handleInputBlur = e => {
          setFieldTouched(e.target.name, true);
          setFieldValue(e.target.name, e.target.value.trim());
        };

        return (
          <StyledFormContainer>
            <StyledForm>
              <StyledTitle status="signup">Sign up</StyledTitle>
              <StyledInputsContainer>
                <NameInput
                  values={values}
                  errors={errors}
                  touched={touched}
                  onBlur={handleInputBlur}
                  onFocus={handleInputFocus}
                  status="enterInfo"
                  className="EnterInfo"
                />
                <EmailInput
                  values={values}
                  errors={errors}
                  touched={touched}
                  placeholder="Email"
                  className="EnterInfo"
                  onBlur={handleInputBlur}
                  onFocus={handleInputFocus}
                />
                <PasswordInput
                  errors={errors}
                  touched={touched}
                  className="EnterInfo"
                  onChange={handleChange}
                  onBlur={handleInputBlur}
                  onFocus={handleInputFocus}
                />
              </StyledInputsContainer>
              <SubmitButton
                disabled={isSubmitting}
                text="Sign up"
                status="signup"
              />
            </StyledForm>
          </StyledFormContainer>
        );
      }}
    </Formik>
  );
};

export default RegisterForm;
