import React from 'react';
import { StyledLoading } from './Loading.styled';

interface Props {
  size?: string;
  theme?: 'primeBlack' | 'white';
}

const Loading: React.FC<Props> = ({ ...props }) => <StyledLoading {...props} />;

export default React.memo(Loading);
