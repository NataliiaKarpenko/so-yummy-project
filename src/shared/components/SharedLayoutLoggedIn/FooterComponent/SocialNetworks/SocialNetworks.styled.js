import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledSocialNetworks = styled.ul`
  display: flex;
  align-items: center;

  gap: ${props => (props.poprec ? '20px' : '14px')};
  justify-content: ${props => (props.poprec ? 'left' : 'center')};

  margin-bottom: ${props => (props.poprec ? '100px' : '')};

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
  transition: all var(--transition-dur-func);

  fill: var(--primary-btn-color);

  &:hover {
    scale: 1.01;
    fill: ${props =>
      props.popRec
        ? 'var(--secondary-btn-color)'
        : 'var(--secondary-background-color)'};
  }
`;

export const FacebookIcon = styled.svg`
  width: ${props => (props.poprec ? '26px' : '20px')};
  height: ${props => (props.poprec ? '26px' : '20px')};
`;
export const YoutubeIcon = styled.svg`
  width: ${props => (props.poprec ? '28px' : '20px')};
  height: ${props => (props.poprec ? '22px' : '15px')};
`;
export const TwitterIcon = styled.svg`
  width: ${props => (props.poprec ? '25px' : '20px')};
  height: ${props => (props.poprec ? '22px' : '16px')};
`;
export const InstagramIcon = styled.svg`
  width: ${props => (props.poprec ? '24px' : '20px')};
  height: ${props => (props.poprec ? '24px' : '20px')};
`;
