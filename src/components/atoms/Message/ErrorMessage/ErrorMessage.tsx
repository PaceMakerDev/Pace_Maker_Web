import React from 'react';
import { StyledErrorMessage } from './ErrorMessage.styled';

interface Props {
  id?: string;
  className?: string;
  visible?: boolean;
  center?: boolean;
  _ref?: React.RefObject<HTMLParagraphElement> | null;
  children?: React.ReactNode;
}

const ErrorMessage: React.FC<Props> = ({ children, _ref, ...props }: Props) => (
  <StyledErrorMessage ref={_ref} {...props}>{children}</StyledErrorMessage>
);

export default React.memo(ErrorMessage);
