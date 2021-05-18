import styled from 'styled-components';

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
  color: ${props => (props.active ? '#02FFFD' : '#686868')};
`;
