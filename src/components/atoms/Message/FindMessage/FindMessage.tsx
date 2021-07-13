import React from 'react';
import { StyledFindMessage } from './FindMessage.styled';

interface Props {
  theme?: 'main' | 'sub';
  center?: boolean;
  children?: React.ReactNode;
}

const FindMessage: React.FC<Props> = ({ children, ...props }: Props) => (
  <StyledFindMessage {...props}>{children}</StyledFindMessage>
);

export default FindMessage;
