import styled from 'styled-components';

export const StyledLink = styled.span<{ fontSize?: string; color?: string }>`
  a {
    text-decoration: none;
    font-weight: 700;
    font-size: ${props => props.fontSize || '1rem'};
    color: ${props => props.color || '#fff'};

    &:hover {
      text-decoration: underline;
    }
  }
`;
