import React from 'react';
import Link from 'components/atoms/Link/Link';
import { StyledForgotLinks, StyledLeftLinkWrapper, StyledRightLinkWrapper } from './ForgotLinks.styled';

const ForgotLinks: React.FC = () => (
  <StyledForgotLinks>
    <StyledLeftLinkWrapper>
      <Link to="/auth/findemail" color="#9b9b9b" fontSize="0.875rem">
        이메일을 잃어버렸어요
      </Link>
    </StyledLeftLinkWrapper>

    <StyledRightLinkWrapper>
      <Link to="/auth/findpassword" color="#9b9b9b" fontSize="0.875rem">
        비밀번호를 잃어버렸어요
      </Link>
    </StyledRightLinkWrapper>
  </StyledForgotLinks>
);

export default ForgotLinks;
