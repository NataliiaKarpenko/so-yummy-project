import { useState, useEffect } from 'react';

import { StyledHeader } from './Header.styled';
import Container from '../../../Container/Container';
import Logo from '../../Logo/Logo';
import MenuBtn from '../MenuBtn/MenuBtn';
import NavigationList from '../NavigationList/NavigationList';
import UserInfo from '../UserInfo/UserInfo';
import ThemeToggler from '../ThemeToggler/ThemeToggler';

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth]);

  return (
    <StyledHeader>
      <Container className="HeaderContainer">
        <nav>
          <Logo className="HeaderLogo" />
          {windowWidth >= 1440 && <NavigationList text="" />}
        </nav>
        <div className="HeaderBox">
          <UserInfo />
          {windowWidth >= 1440 && <ThemeToggler />}
          {windowWidth <= 1439 && <MenuBtn />}
        </div>
      </Container>
    </StyledHeader>
  );
};

export default Header;
