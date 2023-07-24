import { StyledSearchBtn } from './SubmitFormButton.styled';

const SubmitFormButton = ({ type, text, addForm, searchForm, disabled }) => {
  return (
    <StyledSearchBtn
      type={type}
      addForm={addForm}
      searchForm={searchForm}
      disabled={disabled}
    >
      {text}
    </StyledSearchBtn>
  );
};

export default SubmitFormButton;
