import React from 'react';
import { Link as Lk } from 'react-router-dom';
import { StyledLink } from './Link.styled';

interface Props {
  to: string;
  fontSize?: string;
  color?: string;
  children?: React.ReactNode;
}

const Link: React.FC<Props> = ({ to, children, ...props }: Props) => (
  <StyledLink {...props}>
    <Lk to={to}>{children}</Lk>
  </StyledLink>
);

export default Link;
