import React from 'react';
import { StyledFindAuthTemplate, StyledHeaderSection, StyledFindFormSection } from './FindAuthTemplate.styled';

interface Props {
  headerSection: React.ReactNode;
  findFormSection: React.ReactNode;
}

const FindAuthTemplate: React.FC<Props> = ({ headerSection, findFormSection }: Props) => (
  <StyledFindAuthTemplate>
    <StyledHeaderSection>{headerSection}</StyledHeaderSection>
    <StyledFindFormSection>{findFormSection}</StyledFindFormSection>
  </StyledFindAuthTemplate>
);

export default FindAuthTemplate;
