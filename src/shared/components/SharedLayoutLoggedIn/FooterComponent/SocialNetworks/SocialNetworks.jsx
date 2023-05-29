import icons from '../../../../sprite.svg';
import {
  StyledSocialNetworks,
  StyledSocialNetworksLink,
} from './SocialNetworks.styled';

const SocialNetworks = () => {
  return (
    <StyledSocialNetworks>
      <li>
        <StyledSocialNetworksLink to="https://www.facebook.com/">
          <svg aria-label="facebook-logo" width="20" height="20">
            <use href={icons + '#facebook'}></use>
          </svg>
        </StyledSocialNetworksLink>
      </li>
      <li>
        <StyledSocialNetworksLink to="https://m.youtube.com/">
          <svg aria-label="youtube-logo" width="20" height="15">
            <use href={icons + '#youtube'}></use>
          </svg>
        </StyledSocialNetworksLink>
      </li>
      <li>
        <StyledSocialNetworksLink to="https://twitter.com/">
          <svg aria-label="twitter-logo" width="20" height="16">
            <use href={icons + '#twitter'}></use>
          </svg>
        </StyledSocialNetworksLink>
      </li>
      <li>
        <StyledSocialNetworksLink to="https://www.instagram.com/">
          <svg aria-label="instagram-logo" width="20" height="20">
            <use href={icons + '#instagram'}></use>
          </svg>
        </StyledSocialNetworksLink>
      </li>
    </StyledSocialNetworks>
  );
};

export default SocialNetworks;
