import { StyledLowerFooter, StyledLowerFooterText } from './LowerFooter.styled';
import { StyledLowerFooterContainer } from 'shared/components/Container/Container.styled';

const LowerFooter = () => {
  return (
    <StyledLowerFooter>
      <StyledLowerFooterContainer>
        <StyledLowerFooterText>
          &#169; 2023 All Rights Reserved
        </StyledLowerFooterText>
        <StyledLowerFooterText>Terms of Service</StyledLowerFooterText>
      </StyledLowerFooterContainer>
    </StyledLowerFooter>
  );
};

export default LowerFooter;
