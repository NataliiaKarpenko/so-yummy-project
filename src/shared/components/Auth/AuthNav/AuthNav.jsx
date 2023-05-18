import { StyledAuthNav } from './AuthNav.styled';

const AuthNav = ({ authNavLink, authNavText }) => {
  return <StyledAuthNav to={authNavLink}>{authNavText}</StyledAuthNav>;
};

export default AuthNav;
