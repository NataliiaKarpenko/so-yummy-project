import { Formik } from 'formik';
import { useEffect, useState } from 'react';

import { validationSchema } from 'shared/Variables/validationSchema';
import {
  StyledSearchForm,
  StyledFieldBox,
  StyledField,
  StyledErrorMessage,
} from './SearchForm.styled';
import SubmitFormButton from '../Button/SubmitFormButton';

const SearchForm = ({ searchQuery, handleSubmit }) => {
  const [newSearchQuery, setNewSearchQuery] = useState(searchQuery);

  useEffect(() => {
    if (searchQuery) {
      setNewSearchQuery(searchQuery);
    } else {
      setNewSearchQuery('');
    }
  }, [searchQuery]);

  return (
    <div>
      <Formik
        initialValues={{ query: newSearchQuery || '' }}
        validationSchema={validationSchema.search}
        onSubmit={(
          values,

          { setSubmitting }
        ) => {
          handleSubmit(values.query);
          setSubmitting(false);
        }}
      >
        {({
          isSubmitting,
          setFieldTouched,
          touched,
          errors,
          setFieldValue,
        }) => {
          const error = errors.query && touched.query ? 1 : 0;
          const neutral = !touched.query ? 1 : 0;

          const handleInputFocus = () => {
            setFieldTouched('query', false);
          };

          const handleInputBlur = e => {
            setFieldTouched('query', false);
            setFieldValue('query', e.target.value.trim());
          };

          return (
            <StyledSearchForm>
              <StyledFieldBox>
                <StyledField
                  type="text"
                  name="query"
                  placeholder="Beef"
                  autoComplete="off"
                  neutral={neutral}
                  error={error}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                />
                <SubmitFormButton
                  type="submit"
                  disabled={isSubmitting}
                  text="Search"
                  searchForm={true}
                />
              </StyledFieldBox>

              <StyledErrorMessage name="query" component="p" />
            </StyledSearchForm>
          );
        }}
      </Formik>
    </div>
  );
};

export default SearchForm;
