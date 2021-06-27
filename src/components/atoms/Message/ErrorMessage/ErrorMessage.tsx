import React from 'react';
import { StyledErrorMessage } from './ErrorMessage.styled';

interface Props {
  id?: string;
  className?: string;
  visible?: boolean;
  shake?: boolean;
  center?: boolean;
  children?: React.ReactNode;
}

const ErrorMessage: React.FC<Props> = ({ children, ...props }: Props) => (
  <StyledErrorMessage {...props}>{children}</StyledErrorMessage>
);

export default React.memo(ErrorMessage);
