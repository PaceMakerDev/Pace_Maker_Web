import {
  StyledSmallFillButton,
  StyledSmallEmptyButton,
  StyledMiddleFillButton,
  StyledMiddleEmptyButton,
  StyledLargeFillButton,
  StyledLargeEmptyButton,
  StyledFullFillButton,
  StyledFullEmptyButton,
} from './Button.styled';

interface Props {
  primary?: boolean;
}

export const SmallFillButton: React.FC<Props> = ({ children, primary }) => {
  return <StyledSmallFillButton primary={primary}>{children}</StyledSmallFillButton>;
};

export const SmallEmptyButton: React.FC<Props> = ({ children, primary }) => {
  return <StyledSmallEmptyButton primary={primary}>{children}</StyledSmallEmptyButton>;
};

export const MiddleFillButton: React.FC<Props> = ({ children, primary }) => {
  return <StyledMiddleFillButton primary={primary}>{children}</StyledMiddleFillButton>;
};

export const MiddleEmptyButton: React.FC<Props> = ({ children, primary }) => {
  return <StyledMiddleEmptyButton primary={primary}>{children}</StyledMiddleEmptyButton>;
};
export const LargeFillButton: React.FC<Props> = ({ children, primary }) => {
  return <StyledLargeFillButton primary={primary}>{children}</StyledLargeFillButton>;
};

export const LargeEmptyButton: React.FC<Props> = ({ children, primary }) => {
  return <StyledLargeEmptyButton primary={primary}>{children}</StyledLargeEmptyButton>;
};

export const FullFillButton: React.FC<Props> = ({ children, primary }) => {
  return <StyledFullFillButton primary={primary}>{children}</StyledFullFillButton>
}

export const FullEmptyButton: React.FC<Props> = ({ children, primary }) => {
  return <StyledFullEmptyButton primary={primary}>{children}</StyledFullEmptyButton>
}