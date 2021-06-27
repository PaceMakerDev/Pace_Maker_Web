import styled, { css } from 'styled-components';
import { PRIME_COLOR_CODE, PRIME_HOVER_COLOR_CODE, DISABLE_COLOR_CODE } from 'common/constants';

export const StyledMiddleButton = styled.button<{ fontSize?: string; theme?: 'prime' | 'white' }>`
  padding: 1em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: transparent;
  font-weight: 700;
  font-size: ${props => props.fontSize || '0.875rem'};
  color: #ccc;
  cursor: pointer;
  transition: all 0.2s ease;

  ${props =>
    props.theme === 'prime' &&
    css`
      border: 1px solid ${PRIME_COLOR_CODE};
      color: ${PRIME_COLOR_CODE};

      &:hover {
        background-color: ${PRIME_HOVER_COLOR_CODE};
        color: #fff;
      }
      &:disabled {
        border: 1px solid ${DISABLE_COLOR_CODE};
        background-color: transparent;
        color: #ccc;
        cursor: not-allowed;
      }
    `}

  ${props =>
    props.theme === 'white' &&
    css`
      border: 1px solid #fff;
      color: #fff;

      &:hover {
        background-color: #fff;
        color: #333;
      }
      &:disabled {
        border: 1px solid ${DISABLE_COLOR_CODE};
        background-color: transparent;
        color: #ccc;
        cursor: not-allowed;
      }
    `}
`;
