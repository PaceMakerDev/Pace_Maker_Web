import React from 'react';
import { StyledFullButton } from './FullButton.styled';

interface Props {
  id?: string;
  name?: string;
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
  disabled?: boolean;
  theme?: 'prime' | 'white';
  fontSize?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const FullButton: React.FC<Props> = ({ children, ...props }: Props) => (
  <StyledFullButton {...props}>{children}</StyledFullButton>
);

export default FullButton;
