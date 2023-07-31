import { StyledSubmitButton } from './SubmitButton.styled';

const SubmitButton = ({ text, className }) => {
  return (
    <StyledSubmitButton type="submit" className={className}>
      {text}
    </StyledSubmitButton>
  );
};

export default SubmitButton;
