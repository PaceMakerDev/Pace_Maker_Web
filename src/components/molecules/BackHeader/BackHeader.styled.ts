import styled from 'styled-components';

export const StyledBackHeader = styled.header`
  position: relative;
`;

export const StyledBackIcon = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;

  svg {
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;