import React from 'react';
import { StyledHomeTemplate, StyledLogoSection, StyledAuthSection } from './HomeTemplate.styled';

interface Props {
  logoSection: React.ReactNode;
  authSection: React.ReactNode;
}

const HomeTemplate: React.FC<Props> = ({ logoSection, authSection }: Props) => (
  <StyledHomeTemplate>
    <StyledLogoSection>{logoSection}</StyledLogoSection>
    <StyledAuthSection>{authSection}</StyledAuthSection>
  </StyledHomeTemplate>
);

export default HomeTemplate;
