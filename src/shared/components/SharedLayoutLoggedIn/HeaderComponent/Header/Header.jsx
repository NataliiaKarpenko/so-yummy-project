import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { StyledHeaderContainer } from '../../../Container/Container.styled';
import Logo from '../../Logo/Logo';
import MenuBtn from '../MenuBtn/MenuBtn';
import NavigationList from '../NavigationList/NavigationList';
import UserInfo from '../UserInfo/UserInfo';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import {
  StyledHeader,
  StyledNav,
  StyledHeaderBox,
  StyledHeaderLogoContainer,
} from './Header.styled';

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();

  const active = location.pathname.includes('/categories') ? 1 : 0;

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
          <StyledHeaderLogoContainer to="/">
            <Logo status="headerLogo" />
          </StyledHeaderLogoContainer>
          {windowWidth >= 1440 && <NavigationList active={active} text="" />}
        </StyledNav>
        <StyledHeaderBox>
          <UserInfo />
          {windowWidth >= 1440 && <ThemeToggler />}
          {windowWidth <= 1439 && <MenuBtn active={active} />}
        </StyledHeaderBox>
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

export default Header;
