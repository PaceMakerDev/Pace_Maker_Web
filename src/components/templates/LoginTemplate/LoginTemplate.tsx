import React from 'react';
import {
  StyledLoginTemplate,
  StyledHeaderSection,
  StyledLoginFormSection,
  StyledForgotSection,
} from './LoginTemplate.styled';

interface Props {
  headerSection: React.ReactNode;
  loginFormSection: React.ReactNode;
  forgotSection: React.ReactNode;
}

const LoginTemplate: React.FC<Props> = ({ headerSection, loginFormSection, forgotSection }: Props) => (
  <StyledLoginTemplate>
    <StyledHeaderSection>{headerSection}</StyledHeaderSection>
    <StyledLoginFormSection>{loginFormSection}</StyledLoginFormSection>
    <StyledForgotSection>{forgotSection}</StyledForgotSection>
  </StyledLoginTemplate>
);

export default LoginTemplate;
