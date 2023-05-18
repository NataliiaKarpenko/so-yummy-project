import { StyledContainer } from './Container.styled';

const Container = ({ children, className }) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};

export default Container;
