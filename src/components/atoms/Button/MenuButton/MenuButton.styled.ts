import styled from 'styled-components';
import { PRIME_COLOR_CODE } from 'common/constants';

export const StyledMenuButton = styled.button`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const StyledSpan = styled.span<{ active?: boolean }>`
  margin-top: 0.3em;
  font-weight: bold;
  font-size: 0.75rem;
  color: ${props => (props.active ? PRIME_COLOR_CODE : '#686868')};
`;
