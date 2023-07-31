import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import EmailInput from 'shared/components/Auth/AuthInputs/EmailInput';
import { validationSchema } from 'shared/Variables/validationSchema';
import { subscribeUser } from 'redux/reduxAuth/authOperations';
import { StyledForm, StyledLabel, StyledTitle } from './Subscription.styled';
import { StyledSubscribeBtn } from 'shared/components/Auth/SubmitButton/SubmitButton.styled';

const Subscription = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={validationSchema.subscribe}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log(subscribeUser.payload);
        dispatch(subscribeUser({ email: values.email }));

        setSubmitting(false);
        resetForm();
      }}
    >
      {({ values, isSubmitting, errors, touched, setFieldTouched }) => {
        const handleInputFocus = e => {
          setFieldTouched(e.target.name, false);
        };

        const handleInputBlur = e => {
          setFieldTouched(e.target.name, true);
        };
        return (
          <StyledForm>
            <StyledTitle>Subscribe to our Newsletter</StyledTitle>
            <StyledLabel>
              Subscribe up to our newsletter. Be in touch with latest news and
              special offers, etc.
            </StyledLabel>
            <EmailInput
              values={values}
              errors={errors}
              touched={touched}
              className="Subscribe"
              placeholder="Enter your email"
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
            />

            <StyledSubscribeBtn
              status="subscription"
              type="submit"
              disabled={isSubmitting}
            >
              Subscribe
            </StyledSubscribeBtn>
          </StyledForm>
        );
      }}
    </Formik>
  );
};

export default Subscription;
