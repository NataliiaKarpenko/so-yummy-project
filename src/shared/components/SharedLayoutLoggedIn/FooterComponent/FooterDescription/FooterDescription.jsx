import {
  StyledFooterDescription,
  StyledFooterDescriptionList,
  StyledLogoContainer,
} from './FooterDescription.styled';

const { default: Logo } = require('../../Logo/Logo');

const FooterDescription = () => {
  return (
    <StyledFooterDescription>
      <StyledLogoContainer to="main">
        <Logo status="footerLogo" />
        <p>So Yummy</p>
      </StyledLogoContainer>
      <StyledFooterDescriptionList>
        <li>Database of recipes that can be replenished </li>
        <li>Flexible search for desired and unwanted ingredients</li>
        <li>Ability to add your own recipes with photos</li>
        <li>Convenient and easy to use</li>
      </StyledFooterDescriptionList>
    </StyledFooterDescription>
  );
};

export default FooterDescription;
