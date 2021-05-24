import Loading from 'components/atoms/Loading/Loading';
import React from 'react';
import { StyledFullButton } from './FullButton.styled';

interface Props {
  id?: string;
  name?: string;
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  theme?: 'prime' | 'white';
  fontSize?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const FullButton: React.FC<Props> = ({ children, loading, theme, ...props }: Props) => {
  if (theme === 'prime') {
    return (
      <StyledFullButton {...props} theme={theme}>
        {loading ? <Loading size="1.5625em" theme="white" /> : children}
      </StyledFullButton>
    );
  }
  if (theme === 'white') {
    return (
      <StyledFullButton {...props} theme={theme}>
        {loading ? <Loading size="1.5625em" theme="primeBlack" /> : children}
      </StyledFullButton>
    );
  }
  return (
    <StyledFullButton {...props} theme={theme}>
      {loading ? <Loading size="1.5625em" /> : children}
    </StyledFullButton>
  );
};

export default React.memo(FullButton);
