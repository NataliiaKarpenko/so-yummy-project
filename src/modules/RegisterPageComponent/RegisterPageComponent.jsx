import RegisterForm from './RegisterForm';
import { StyledRegisterPageContainer } from './RegisterPageComponent.styled';
import AuthNav from '../../shared/components/Auth/AuthNav/AuthNav';

const RegisterPageComponent = () => {
  return (
    <StyledRegisterPageContainer>
      <div className="RegisterPageContentContainer">
        <RegisterForm />
        <AuthNav authNavLink="/signin" authNavText="Sign in" />
      </div>
    </StyledRegisterPageContainer>
  );
};

export default RegisterPageComponent;
