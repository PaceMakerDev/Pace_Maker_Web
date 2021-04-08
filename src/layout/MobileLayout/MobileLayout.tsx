import React from 'react';
import { StyledMobileLayout } from './MobileLayout.styled';

interface Props {
  children?: React.ReactNode;
}

const MobileLayout: React.FC<Props> = ({ children }: Props) => <StyledMobileLayout>{children}</StyledMobileLayout>;

export default MobileLayout;
