import styled from 'styled-components';

export const StyledErrorMessage = styled.p<{ visible?: boolean; center?: boolean }>`
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  text-align: ${props => props.center && 'center'};
  font-size: 0.75rem;
  color: #ff1010;
`;
