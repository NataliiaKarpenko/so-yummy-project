import { NavLink } from 'react-router-dom';

import icons from '../../../sprite.svg';
import { StyledLogo } from './Logo.styled';

const Logo = ({ className, closeBtnHandler }) => {
  return (
    <NavLink to="/main" onClick={closeBtnHandler}>
      <StyledLogo
        width="40"
        height="40"
        aria-label="logo"
        className={className}
      >
        <use href={icons + '#logo'}></use>
      </StyledLogo>
    </NavLink>
  );
};

export default Logo;
