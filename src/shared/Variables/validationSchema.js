import * as Yup from 'yup';

export const validationSchema = {
  signup: Yup.object().shape({
    name: Yup.string()

      .min(3, 'Invalid name. Must be at least 3 characters long')
      .max(20, 'Invalid name. Must be 20 characters long maximum')
      .matches(
        /^[a-zA-Z0-9'-]+$/,
        'Invalid name. May contain only letters, digits, apostrophes, hyphens and spaces.'
      )
      .matches(/[a-zA-Z]/, 'Invalid name. Requires a letter')
      .required('Required'),

    email: Yup.string().email('Invalid email').required('Required'),

    password: Yup.string()
      .matches(/^\S*$/, 'Invalid password. Must not contain spaces')
      .min(6, 'Invalid password. Must be at least 6 characters long')
      .required('Required'),
  }),

  signin: Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),

    password: Yup.string()
      .matches(/^\S*$/, 'Invalid password. Must not contain spaces')
      .min(6, 'Invalid password. Must be at least 6 characters long')
      .required('Required'),
  }),

  edit: Yup.object().shape({
    name: Yup.string()

      .min(3, 'Invalid name. Must be at least 3 characters long')
      .max(20, 'Invalid name. Must be 20 characters long maximum')
      .matches(
        /^[a-zA-Z0-9'-]+$/,
        'Invalid name. May contain only letters, digits, apostrophes, hyphens and spaces.'
      )
      .matches(/[a-zA-Z]/, 'Invalid name. Requires a letter')
      .required('Required'),
  }),
};
