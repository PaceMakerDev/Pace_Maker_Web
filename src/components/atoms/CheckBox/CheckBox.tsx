import React from 'react';
import { StyledCheckBox, StyledInput, StyledCheckCircle, StyledLabel } from './CheckBox.styled';

interface Props {
  id: string;
  name: string;
  className?: string;
  checked?: boolean;
  children?: React.ReactNode;
  onChange?: React.ChangeEventHandler;
}

const CheckBox: React.FC<Props> = ({ id, children, ...props }) => (
  <StyledCheckBox>
    <StyledInput id={id} type="checkbox" hidden {...props} />
    <StyledCheckCircle htmlFor={id} />
    <StyledLabel htmlFor={id}>{children}</StyledLabel>
  </StyledCheckBox>
);

export default React.memo(CheckBox);
