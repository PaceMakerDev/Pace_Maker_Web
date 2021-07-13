import React from 'react';
import Link from 'components/atoms/Link/Link';
import { StyledForgotLinks, StyledLinkWrapper, StyledDivider } from './ForgotLinks.styled';

const ForgotLinks: React.FC = () => (
  <StyledForgotLinks>
    <StyledLinkWrapper>
      <Link to="/auth/findemail" color="#9b9b9b" fontSize="0.875rem">
        이메일을 잃어버렸어요
      </Link>
    </StyledLinkWrapper>

    <StyledDivider />
    
    <StyledLinkWrapper>
      <Link to="/auth/findpassword" color="#9b9b9b" fontSize="0.875rem">
        비밀번호를 잃어버렸어요
      </Link>
    </StyledLinkWrapper>
  </StyledForgotLinks>
);

export default ForgotLinks;
