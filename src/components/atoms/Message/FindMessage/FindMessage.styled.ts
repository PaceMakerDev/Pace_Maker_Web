import styled, { css } from 'styled-components';
import { PRIME_COLOR_CODE } from 'common/constants';

export const StyledFindMessage = styled.p<{ theme?: 'main' | 'sub'; center?: boolean }>`
  margin-bottom: 0.5em;
  text-align: ${props => props.center && 'center'};
  font-weight: bold;
    
  ${props =>
    props.theme === 'main' &&
    css`
      font-size: 1rem;
      color: ${PRIME_COLOR_CODE};
    `}

  ${props =>
    props.theme === 'sub' &&
    css`
      font-size: 0.875rem;
      color: $#fff;
    `}
`;
