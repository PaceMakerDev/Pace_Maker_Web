import React from 'react';
import { StyledCircleButton } from './CircleButton.styled';

interface Props {
  id?: string;
  name?: string;
  size?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  fontSize?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const CircleButton: React.FC<Props> = ({ children, ...props }) => (
  <StyledCircleButton {...props}>{children}</StyledCircleButton>
);

export default CircleButton;
