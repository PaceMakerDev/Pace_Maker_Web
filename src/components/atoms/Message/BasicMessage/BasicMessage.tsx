import React from 'react';
import { StyledBasicMessage } from './BasicMessage.styled';

interface Props {
  id?: string;
  className?: string;
  fontSize?: string;
  center?: boolean;
  children?: React.ReactNode;
}

const BasicMessage: React.FC<Props> = ({ children, ...props }) => (
  <StyledBasicMessage {...props}>{children}</StyledBasicMessage>
);

export default React.memo(BasicMessage);
