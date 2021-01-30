import { InputWrapper, StyledInput, StyledUnderbar } from './Inputs.styled';

interface Props {
  value?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput: React.FC<Props> = props => {
  return (
    <InputWrapper>
      <StyledInput type="text" {...props} />
      <StyledUnderbar />
    </InputWrapper>
  );
};

export const EmailInput: React.FC<Props> = props => {
  return (
    <InputWrapper>
      <StyledInput type="email" {...props} />
      <StyledUnderbar />
    </InputWrapper>
  );
};

export const PasswordInput: React.FC<Props> = props => {
  return (
    <InputWrapper>
      <StyledInput type="password" {...props} />
      <StyledUnderbar />
    </InputWrapper>
  );
};

export const NumberInput: React.FC<Props> = props => {
  return (
    <InputWrapper>
      <StyledInput type="number" {...props} />
      <StyledUnderbar />
    </InputWrapper>
  );
};
