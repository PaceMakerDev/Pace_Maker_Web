import { InputWrapper, StyledInput, StyledUnderbar } from './Inputs.styled';

export const TextInput: React.FC<InputProps> = props => {
  return (
    <InputWrapper>
      <StyledInput type="text" {...props} />
      <StyledUnderbar />
    </InputWrapper>
  );
};

export const EmailInput: React.FC = props => {
  return (
    <InputWrapper>
      <StyledInput type="email" {...props} />
      <StyledUnderbar />
    </InputWrapper>
  );
};

export const PasswordInput: React.FC = props => {
  return (
    <InputWrapper>
      <StyledInput type="password" {...props} />
      <StyledUnderbar />
    </InputWrapper>
  );
};

export const NumberInput: React.FC = props => {
  return (
    <InputWrapper>
      <StyledInput type="number" {...props} />
      <StyledUnderbar />
    </InputWrapper>
  );
};
