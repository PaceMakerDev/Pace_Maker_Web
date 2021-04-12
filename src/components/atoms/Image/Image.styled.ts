import styled from 'styled-components';

export const StyledImage = styled.img<{ width?: string; height?: string }>`
  width: ${props => props.width};
  height: ${props => props.height};
`;
