import React from 'react';
import { StyledRadiusInput } from './RadiusInput.styled';

interface Props {
  id?: string;
  name?: string;
  value?: string | number | readonly string[];
  type?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const RadiusInput: React.FC<Props> = ({ ...props }) => <StyledRadiusInput {...props} />;

export default React.memo(RadiusInput);
