import styled from 'styled-components';

export const StyledHeader = styled.h1<{ fontSize?: string; color?: string; textCenter?: boolean }>`
  text-align: ${props => props.textCenter && 'center'};
  font-weight: 700;
  font-size: ${props => props.fontSize || '1rem'};
  color: ${props => props.color || '#fff'};
`;
