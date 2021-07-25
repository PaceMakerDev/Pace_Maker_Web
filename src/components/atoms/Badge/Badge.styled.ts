import styled from 'styled-components';
import { PRIME_COLOR_CODE } from 'common/constants';

export const StyledBadge = styled.span<{ fontSize?: string; color?: string }>`
  padding: 0.25em 1em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${props => props.color || PRIME_COLOR_CODE};
  border-radius: 10px;
  font-weight: 700;
  font-size: ${props => props.fontSize || '0.875rem'};
  color: ${props => props.color || PRIME_COLOR_CODE};
`;
