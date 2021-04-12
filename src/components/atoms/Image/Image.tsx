import React from 'react';
import { StyledImage } from './Image.styled';

interface Props {
  src: string;
  alt: string;
  width?: string;
  height?: string;
}

const Image: React.FC<Props> = ({ ...props }: Props) => <StyledImage {...props} />;

export default React.memo(Image);
