import React from 'react';
import { StyledJoinTemplate, StyledHeaderSection, StyledJoinFormSection } from './JoinTemplate.styled';

interface Props {
  headerSection: React.ReactNode;
  joinFormSection: React.ReactNode;
}

const JoinTemplate: React.FC<Props> = ({ headerSection, joinFormSection }: Props) => (
  <StyledJoinTemplate>
    <StyledHeaderSection>{headerSection}</StyledHeaderSection>
    <StyledJoinFormSection>{joinFormSection}</StyledJoinFormSection>
  </StyledJoinTemplate>
);

export default JoinTemplate;
