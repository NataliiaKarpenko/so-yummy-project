import { useState } from 'react';

import icons from '../../../../sprite.svg';
import { StyledMenuBtn } from './MenuBtn.styled';
import Menu from '../Menu/Menu';

const MenuBtn = ({ active }) => {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => {
    setShowMenu(true);
  };

  return (
    <>
      <StyledMenuBtn type="button" onClick={showMenuHandler}>
        <svg width="28" height="28" aria-label="menu">
          <use href={icons + '#menu'}></use>
        </svg>
      </StyledMenuBtn>
      <Menu setShowMenu={setShowMenu} showMenu={showMenu} active={active} />
    </>
  );
};

export default MenuBtn;
