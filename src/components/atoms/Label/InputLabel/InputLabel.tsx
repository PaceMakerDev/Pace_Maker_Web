import React from 'react';
import { StyledInputLabel } from './InputLabel.styled';

interface Props {
  htmlFor: string;
  className?: string;
  fontSize?: string;
  color?: string;
  required?: boolean;
  children?: React.ReactNode;
}

const InputLabel: React.FC<Props> = ({ required, children, ...props }: Props) => (
  <StyledInputLabel {...props}>
    {children}
    {required && <span className="require">*</span>}
  </StyledInputLabel>
);

export default React.memo(InputLabel);
