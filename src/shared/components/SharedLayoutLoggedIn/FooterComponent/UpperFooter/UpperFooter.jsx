import { StyledContainer } from 'shared/components/Container/Container.styled';
import FooterDescription from '../FooterDescription/FooterDescription';
import FooterNavigationList from '../FooterNavigationList/FooterNavigationList';
import SocialNetworks from '../SocialNetworks/SocialNetworks';
import Subscription from '../Subscription/Subscription';
import {
  StyledUpperFooter,
  FooterInfoBox,
  FooterInfoContainer,
} from './UpperFooter.styled';

const UpperFooter = () => {
  return (
    <StyledUpperFooter>
      <StyledContainer>
        <FooterInfoContainer>
          <FooterInfoBox>
            <FooterDescription />
            <FooterNavigationList />
          </FooterInfoBox>
          <Subscription />
        </FooterInfoContainer>
        <SocialNetworks />
      </StyledContainer>
    </StyledUpperFooter>
  );
};

export default UpperFooter;
