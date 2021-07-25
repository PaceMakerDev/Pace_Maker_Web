import React from 'react';
import { StyledBadge } from './Badge.styled';

interface Props {
  id?: string;
  className?: string;
  fontSize?: string;
  color?: string;
  children?: React.ReactNode;
}

const Badge: React.FC<Props> = ({ children, ...props }) => <StyledBadge {...props}>{children}</StyledBadge>;

export default React.memo(Badge);
