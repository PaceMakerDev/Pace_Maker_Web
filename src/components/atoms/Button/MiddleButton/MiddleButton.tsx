import React from 'react';
import Loading from 'components/atoms/Loading/Loading';
import { StyledMiddleButton } from './MiddleButton.styled';

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

const MiddleButton: React.FC<Props> = ({ children, loading, theme, ...props }) => {
  if (theme === 'prime') {
    return (
      <StyledMiddleButton {...props} theme={theme}>
        {loading ? <Loading size="1.125em" theme="white" /> : children}
      </StyledMiddleButton>
    );
  }
  if (theme === 'white') {
    return (
      <StyledMiddleButton {...props} theme={theme}>
        {loading ? <Loading size="1.125em" theme="primeBlack" /> : children}
      </StyledMiddleButton>
    );
  }
  return (
    <StyledMiddleButton {...props} theme={theme}>
      {loading ? <Loading size="1.125em" /> : children}
    </StyledMiddleButton>
  );
};

export default React.memo(MiddleButton);
