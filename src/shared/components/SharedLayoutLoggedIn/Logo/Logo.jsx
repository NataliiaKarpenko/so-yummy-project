import icons from '../../../sprite.svg';
import { StyledLogo } from './Logo.styled';

const Logo = ({ status }) => {
  return (
    <StyledLogo
      width="40"
      height="40"
      aria-label="logo"
      status={status}
      menuLogo
    >
      <use href={icons + '#logo'}></use>
    </StyledLogo>
  );
};

export default Logo;
