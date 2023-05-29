import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import EmailInput from '../../shared/components/Auth/AuthInputs/EmailInput';
import PasswordInput from '../../shared/components/Auth/AuthInputs/PasswordInput';
import SubmitButton from 'shared/components/Auth/SubmitButton/SubmitButton';

import {
  StyledFormContainer,
  StyledForm,
  StyledInputsContainer,
  StyledTitle,
} from '../../shared/components/Auth/AuthStyles/AuthForm.styled';
import { validationSchema } from '../../shared/Variables/validationSchema';
import { signin } from 'redux/reduxAuth/authOperations';

const SigninForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema.signin}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log(values);
        dispatch(signin({ email: values.email, password: values.password }));

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
      }) => {
        const handleInputFocus = e => {
          setFieldTouched(e.target.name, false);
        };

        const handleInputBlur = e => {
          setFieldTouched(e.target.name, true);
        };
        return (
          <StyledFormContainer>
            <StyledForm>
              <StyledTitle status="signin">Sign in</StyledTitle>
              <StyledInputsContainer>
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
                text="Sign in"
                status="signin"
              />
            </StyledForm>
          </StyledFormContainer>
        );
      }}
    </Formik>
  );
};

export default SigninForm;
