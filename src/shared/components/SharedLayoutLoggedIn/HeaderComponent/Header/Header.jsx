import { useState, useEffect } from 'react';

import {
  StyledHeader,
  StyledNav,
  StyledHeaderBox,
  StyledHeaderLogoContainer,
} from './Header.styled';
import { StyledHeaderContainer } from '../../../Container/Container.styled';
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
      <StyledHeaderContainer>
        <StyledNav>
          <StyledHeaderLogoContainer to="main">
            <Logo status="headerLogo" />
          </StyledHeaderLogoContainer>
          {windowWidth >= 1440 && <NavigationList text="" />}
        </StyledNav>
        <StyledHeaderBox>
          <UserInfo />
          {windowWidth >= 1440 && <ThemeToggler />}
          {windowWidth <= 1439 && <MenuBtn />}
        </StyledHeaderBox>
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

export default Header;
