import { StyledSubmitButton } from './SubmitButton.styled';

const SubmitButton = ({ text }) => {
  return <StyledSubmitButton type="submit">{text}</StyledSubmitButton>;
};

export default SubmitButton;
