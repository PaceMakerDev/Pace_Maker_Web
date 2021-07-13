import React from 'react';
import { StyledFormTemplate, StyledHeaderSection, StyledFormSection, StyeldOptionSection } from './FormTemplate.styled';

interface Props {
  headerSection: React.ReactNode;
  formSection: React.ReactNode;
  optionSection?: React.ReactNode;
}

const FormTemplate: React.FC<Props> = ({ headerSection, formSection, optionSection }) => (
  <StyledFormTemplate>
    <StyledHeaderSection>{headerSection}</StyledHeaderSection>
    <StyledFormSection>{formSection}</StyledFormSection>
    <StyeldOptionSection>{optionSection}</StyeldOptionSection>
  </StyledFormTemplate>
);

export default FormTemplate;
