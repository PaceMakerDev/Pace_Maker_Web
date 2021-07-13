import React from 'react';
import { StyledTextarea } from './Textarea.styled';

interface Props {
  id?: string;
  name?: string;
  value?: string;
  height?: string;
  readOnly?: boolean;
}

const Textarea: React.FC<Props> = ({ ...props }) => <StyledTextarea {...props} />;

export default React.memo(Textarea);
