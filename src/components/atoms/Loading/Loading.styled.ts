import styled, { css } from 'styled-components';
import { PRIME_COLOR_CODE } from 'common/constants';

export const StyledLoading = styled.span<{ size?: string; theme?: 'primeBlack | white' }>`
  display: inline-block;
  width: ${props => props.size || '70px'};
  height: ${props => props.size || '70px'};
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: ${PRIME_COLOR_CODE};
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  ${props =>
    props.theme === 'primeBlack' &&
    css`
      border: 4px solid rgba(0, 0, 0, 0.1);
      border-top-color: ${PRIME_COLOR_CODE};
    `}
  ${props =>
    props.theme === 'white' &&
    css`
      border-top-color: #eee;
    `}

  @keyframes spin {
    to {
      transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
    }
  }
`;
