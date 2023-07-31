import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledSocialNetworks = styled.ul`
  display: flex;
  align-items: center;

  gap: ${props => (props.poprec === 1 ? '20px' : '14px')};
  justify-content: ${props => (props.poprec === 1 ? 'left' : 'center')};

  margin-bottom: ${props => (props.poprec === 1 ? '100px' : '')};

  @media screen and (min-width: 768px) {
    gap: 18px;
  }
`;

export const StyledSocialNetworksLink = styled(NavLink)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ${props => props.theme.transitionDurFunc};

  fill: ${props => props.theme.socialNetworks.background};

  &:hover {
    scale: 1.01;
    fill: ${props =>
      props.poprec === 1
        ? props.theme.socialNetworks.hover
        : props.theme.button.trashFavorite};
  }
`;

export const FacebookIcon = styled.svg`
  width: ${props => (props.poprec === 1 ? '26px' : '20px')};
  height: ${props => (props.poprec === 1 ? '26px' : '20px')};
`;
export const YoutubeIcon = styled.svg`
  width: ${props => (props.poprec === 1 ? '28px' : '20px')};
  height: ${props => (props.poprec === 1 ? '22px' : '15px')};
`;
export const TwitterIcon = styled.svg`
  width: ${props => (props.poprec === 1 ? '25px' : '20px')};
  height: ${props => (props.poprec === 1 ? '22px' : '16px')};
`;
export const InstagramIcon = styled.svg`
  width: ${props => (props.poprec === 1 ? '24px' : '20px')};
  height: ${props => (props.poprec === 1 ? '24px' : '20px')};
`;
