import SigninForm from './SigninForm';
import AuthNav from '../../shared/components/Auth/AuthNav/AuthNav';
import {
  StyledAuthPageContainer,
  StyledAuthPageContentContainer,
} from 'shared/components/Auth/AuthStyles/AuthPageComponent.styled';

const SigninPageComponent = () => {
  return (
    <StyledAuthPageContainer>
      <StyledAuthPageContentContainer status="signin">
        <SigninForm />
        <AuthNav authNavLink="/register" authNavText="Sign up" />
      </StyledAuthPageContentContainer>
    </StyledAuthPageContainer>
  );
};

export default SigninPageComponent;
