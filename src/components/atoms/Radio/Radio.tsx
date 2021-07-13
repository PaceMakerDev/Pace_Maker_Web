import React from 'react';
import { StyledRadio, StyledInput, StyledCheckCircle, StyledLabel } from './Radio.styled';

interface Props {
  id: string;
  name: string;
  value?: string;
  className?: string;
  checked?: boolean;
  children?: React.ReactNode;
  onChange?: React.ChangeEventHandler;
}

const Radio: React.FC<Props> = ({ id, className, children, ...props }) => (
  <StyledRadio className={className}>
    <StyledInput id={id} type="radio" hidden {...props} />
    <StyledCheckCircle htmlFor={id} />
    <StyledLabel htmlFor={id}>{children}</StyledLabel>
  </StyledRadio>
);

export default React.memo(Radio);
