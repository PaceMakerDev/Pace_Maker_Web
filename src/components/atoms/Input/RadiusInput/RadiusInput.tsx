import React from 'react';
import { StyledRadiusInput } from './RadiusInput.styled';

interface Props {
  id?: string;
  name?: string;
  value?: string | number | readonly string[];
  className?: string;
  type?: string;
  minLength?: number;
  maxLength?: number;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  disabled?: boolean;
  _ref?: React.RefObject<HTMLInputElement> | null;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
}

const RadiusInput: React.FC<Props> = ({ _ref, ...props }: Props) => <StyledRadiusInput {...props} ref={_ref} />;

export default React.memo(RadiusInput);
