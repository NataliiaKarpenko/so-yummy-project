import {
  ErrorContainer,
  PreparationFieldContainer,
  PreparationTitle,
  TextArea,
} from './RecipePreparationField.styled';

const RecipePreparationField = () => {
  return (
    <PreparationFieldContainer>
      <PreparationTitle>Recipe Preparation</PreparationTitle>
      <TextArea
        name="instructions"
        component="textarea"
        placeholder="Enter recipe"
        autoComplete="off"
      ></TextArea>
      <ErrorContainer name="instructions" component="div" />
    </PreparationFieldContainer>
  );
};
export default RecipePreparationField;
