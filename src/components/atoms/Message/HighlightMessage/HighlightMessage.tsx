import React from 'react';
import { StyledHighlightMessage } from './HighlightMessage.styled';

interface Props {
  id?: string;
  className?: string;
  fontSize?: string;
  center?: boolean;
  children?: React.ReactNode;
}

const HighlightMessage: React.FC<Props> = ({ children, ...props }) => (
  <StyledHighlightMessage {...props}>{children}</StyledHighlightMessage>
);

export default HighlightMessage;
