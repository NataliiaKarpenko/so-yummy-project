import SigninForm from './SigninForm';
import { StyledSigninPageContainer } from './SigninPageComponent.styled';
import AuthNav from '../../shared/components/Auth/AuthNav/AuthNav';
import { toast } from 'react-toastify';

const SigninPageComponent = () => {
  const info = toast.info('Info Notification !');
  return (
    <StyledSigninPageContainer>
      <div>{info}</div>
      <div className="SigninPageContentContainer">
        <SigninForm />
        <AuthNav authNavLink="/register" authNavText="Sign up" />
      </div>
    </StyledSigninPageContainer>
  );
};

export default SigninPageComponent;
