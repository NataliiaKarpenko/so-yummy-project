import { Formik, Form } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import RecipeDescriptionField from './RecipeDescriptionField/RecipeDescriptionField';
import { validationSchema } from 'shared/Variables/validationSchema';
import RecipeIngredientsField from './RecipeIngredientsField/RecipeIngredientsField';
import RecipePreparationField from './RecipePreparationField/RecipePreparationFeld';
import SubmitFormButton from 'shared/components/SharedPageComponents/Button/SubmitFormButton';
import { addOwnRecipe } from 'redux/reduxOwnRecipes/ownRecipesOperations';
import { useNavigate } from 'react-router-dom';
import Loader from 'shared/components/Loader/Loader';
import { addToMyRecipes } from 'shared/Utils/notifications';

const AddRecipeForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [counterValue, setCounterValue] = useState(0);
  const [dishPhotoURL, setDishPhotoURL] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Formik
      initialValues={{
        fullImage: '',
        title: '',
        description: '',
        category: '',
        time: '',
        ingredients: [],
        instructions: '',
      }}
      validationSchema={validationSchema.select}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        setIsLoading(true);
        try {
          const editedTime = values.time.split(' ').shift();

          const editedIngredients = JSON.stringify(
            values.ingredients.map(({ id, amount, unit }) => {
              return { id: id, measure: `${amount}${unit}` };
            })
          );

          const editedInstructions = values.instructions
            .split('\n')
            .map(paragraph => paragraph.trim());

          const ownRecipe = {
            ...values,

            time: editedTime,
            instructions: editedInstructions,
            ingredients: editedIngredients,
          };

          const formData = new FormData();
          Object.keys(ownRecipe).forEach(key =>
            formData.append(key, ownRecipe[key])
          );

          const actionResult = await dispatch(addOwnRecipe(formData));

          if (actionResult.type === 'ownRecipes/addOwnRecipe/fulfilled') {
            addToMyRecipes();
            setSubmitting(false);
            setCounterValue(0);
            setDishPhotoURL('');

            navigate('/my');
            resetForm();
          }
        } catch (e) {
          console.log(e);
        } finally {
          setIsLoading(false);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          {isLoading && <Loader />}
          <RecipeDescriptionField
            setDishPhotoURL={setDishPhotoURL}
            dishPhotoURL={dishPhotoURL}
          />

          <RecipeIngredientsField
            counterValue={counterValue}
            setCounterValue={setCounterValue}
          />

          <RecipePreparationField />

          <SubmitFormButton
            type="submit"
            addForm={true}
            text="Add"
            disabled={isSubmitting}
          >
            Submit
          </SubmitFormButton>
        </Form>
      )}
    </Formik>
  );
};

export default AddRecipeForm;
