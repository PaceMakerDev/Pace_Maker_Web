import React from 'react';
import { StyledBlackWrapper } from './BlackWrapper.styled';

interface Props {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const BlackWrapper: React.FC<Props> = ({ onClick }: Props) => <StyledBlackWrapper onClick={onClick} />;

export default BlackWrapper;
