import styled, { css } from 'styled-components';

export const StyledIcon = styled.img<{ width?: string; height?: string }>`
  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `}
    ${props =>
    props.height &&
    css`
      height: ${props.height};
    `}
`;
