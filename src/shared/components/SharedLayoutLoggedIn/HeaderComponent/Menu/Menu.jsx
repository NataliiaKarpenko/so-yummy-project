import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import { StyledMenuHeader, StyledMenu } from './Menu.styled';
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
        <StyledMenuHeader>
          <NavLink to="main" onClick={closeBtnHandler}>
            <Logo status="headerLogo" menuLogo={true} />
          </NavLink>
          <CloseBtn menuBtn={true} closeBtnHandler={closeBtnHandler} />
        </StyledMenuHeader>
        <NavigationList text="Search" closeBtnHandler={closeBtnHandler} />
        <ThemeToggler />
      </StyledMenu>
    </CSSTransition>
  );
};

export default Menu;
