import RegisterForm from './RegisterForm';
import {
  StyledAuthPageContainer,
  StyledAuthPageContentContainer,
} from '../../shared/components/Auth/AuthStyles/AuthPageComponent.styled';
import AuthNav from '../../shared/components/Auth/AuthNav/AuthNav';

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
