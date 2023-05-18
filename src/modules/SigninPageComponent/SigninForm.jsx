import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';

import EmailInput from '../../shared/components/Auth/AuthInputs/EmailInput';
import PasswordInput from '../../shared/components/Auth/AuthInputs/PasswordInput';
import SubmitButton from 'shared/components/Auth/SubmitButton/SubmitButton';

import { StyledFormContainer } from '../../shared/components/Auth/AuthStyles/AuthForm.styled';
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
            <Form className="FormContainer">
              <p className="Title SigninTitle">Sign in</p>
              <div className="InputsContainer">
                <EmailInput
                  values={values}
                  errors={errors}
                  touched={touched}
                  className="Input EnterInfo"
                  onBlur={handleInputBlur}
                  onFocus={handleInputFocus}
                />
                <PasswordInput
                  errors={errors}
                  touched={touched}
                  className="Input EnterInfo"
                  onChange={handleChange}
                  onBlur={handleInputBlur}
                  onFocus={handleInputFocus}
                />
              </div>
              <SubmitButton
                disabled={isSubmitting}
                text="Sign in"
                className="AuthFormBtn"
              />
            </Form>
          </StyledFormContainer>
        );
      }}
    </Formik>
  );
};

export default SigninForm;
