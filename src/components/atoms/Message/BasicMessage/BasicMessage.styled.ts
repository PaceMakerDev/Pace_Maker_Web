import styled from 'styled-components'

export const StyledBasicMessage = styled.p<{ fontSize?: string; center?: boolean }>`
  text-align: ${props => props.center && 'center'};
  font-weight: 700;
  font-size: ${props => props.fontSize || '0.875rem'};
  color: #fff;
`;