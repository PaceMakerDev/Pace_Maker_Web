import React from 'react';
import { StyledFindAuthTemplate, StyledHeaderSection, StyledFindFormSection } from './AuthTemplate.styled';

interface Props {
  headerSection: React.ReactNode;
  formSection: React.ReactNode;
}

const FindAuthTemplate: React.FC<Props> = ({ headerSection, formSection }: Props) => (
  <StyledFindAuthTemplate>
    <StyledHeaderSection>{headerSection}</StyledHeaderSection>
    <StyledFindFormSection>{formSection}</StyledFindFormSection>
  </StyledFindAuthTemplate>
);

export default FindAuthTemplate;
