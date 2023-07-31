import { useFormikContext } from 'formik';
import {
  ErrorContainer,
  PreparationFieldContainer,
  PreparationTitle,
  TextArea,
} from './RecipePreparationField.styled';

const RecipePreparationField = () => {
  const { setFieldValue } = useFormikContext();
  const handleInputBlur = e => {
    setFieldValue(e.target.name, e.target.value.trim());
  };
  return (
    <PreparationFieldContainer>
      <PreparationTitle>Recipe Preparation</PreparationTitle>
      <TextArea
        name="instructions"
        component="textarea"
        placeholder="Enter recipe"
        autoComplete="off"
        onBlur={handleInputBlur}
      ></TextArea>
      <ErrorContainer name="instructions" component="div" />
    </PreparationFieldContainer>
  );
};
export default RecipePreparationField;
