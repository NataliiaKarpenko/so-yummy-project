import icons from '../../../../sprite.svg';
import {
  FacebookIcon,
  InstagramIcon,
  StyledSocialNetworks,
  StyledSocialNetworksLink,
  TwitterIcon,
  YoutubeIcon,
} from './SocialNetworks.styled';

const SocialNetworks = ({ poprec }) => {
  return (
    <StyledSocialNetworks poprec={poprec}>
      <li>
        <StyledSocialNetworksLink
          to="https://www.facebook.com/"
          poprec={poprec}
        >
          <FacebookIcon aria-label="facebook-logo" poprec={poprec}>
            <use href={icons + '#facebook'}></use>
          </FacebookIcon>
        </StyledSocialNetworksLink>
      </li>
      <li>
        <StyledSocialNetworksLink to="https://m.youtube.com/" poprec={poprec}>
          <YoutubeIcon aria-label="youtube-logo" poprec={poprec}>
            <use href={icons + '#youtube'}></use>
          </YoutubeIcon>
        </StyledSocialNetworksLink>
      </li>
      <li>
        <StyledSocialNetworksLink to="https://twitter.com/" poprec={poprec}>
          <TwitterIcon aria-label="twitter-logo" popRec={poprec}>
            <use href={icons + '#twitter'}></use>
          </TwitterIcon>
        </StyledSocialNetworksLink>
      </li>
      <li>
        <StyledSocialNetworksLink
          to="https://www.instagram.com/"
          poprec={poprec}
        >
          <InstagramIcon aria-label="instagram-logo" poprec={poprec}>
            <use href={icons + '#instagram'}></use>
          </InstagramIcon>
        </StyledSocialNetworksLink>
      </li>
    </StyledSocialNetworks>
  );
};

export default SocialNetworks;
