import React from 'react';
import { StyledHeader } from './Header.styled';

interface Props {
  fontSize?: string;
  color?: string;
  textCenter?: boolean;
  children?: React.ReactNode;
}

const Header: React.FC<Props> = ({ children, ...props }: Props) => <StyledHeader {...props}>{children}</StyledHeader>;

export default Header;
