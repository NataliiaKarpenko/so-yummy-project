import RegisterForm from './RegisterForm';
import AuthNav from '../../shared/components/Auth/AuthNav/AuthNav';
import {
  StyledAuthPageContainer,
  StyledAuthPageContentContainer,
} from '../../shared/components/Auth/AuthStyles/AuthPageComponent.styled';

const RegisterPageComponent = () => {
  return (
    <StyledAuthPageContainer>
      <StyledAuthPageContentContainer status="register">
        <RegisterForm />
        <AuthNav authNavLink="/signin" authNavText="Sign in" />
      </StyledAuthPageContentContainer>
    </StyledAuthPageContainer>
  );
};

export default RegisterPageComponent;
