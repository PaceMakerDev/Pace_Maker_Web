import styled from 'styled-components';

export const StyledInputLabel = styled.label<{ fontSize?: string; color?: string }>`
  display: block;
  font-weight: bold;
  font-size: ${props => props.fontSize || '0.875rem'};
  color: ${props => props.color};
  
  .require {
    margin-left: 0.3em;
    color: #ff0a0a;
  }
`;
