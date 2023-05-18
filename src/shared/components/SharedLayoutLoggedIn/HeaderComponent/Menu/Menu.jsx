import { CSSTransition } from 'react-transition-group';

import { StyledMenu } from './Menu.styled';
import Logo from '../../Logo/Logo';
import NavigationList from '../NavigationList/NavigationList';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import CloseBtn from '../../CloseBtn/CloseBtn';

const Menu = ({ showMenu, setShowMenu }) => {
  const closeBtnHandler = () => {
    setShowMenu(false);
  };

  return (
    <CSSTransition in={showMenu} timeout={250} classNames="menu" unmountOnExit>
      <StyledMenu>
        <div className="MenuHeader">
          <Logo className="HeaderLogo" closeBtnHandler={closeBtnHandler} />
          <CloseBtn className="MenuBtn" closeBtnHandler={closeBtnHandler} />
        </div>
        <NavigationList text="Search" closeBtnHandler={closeBtnHandler} />
        <ThemeToggler />
      </StyledMenu>
    </CSSTransition>
  );
};

export default Menu;
