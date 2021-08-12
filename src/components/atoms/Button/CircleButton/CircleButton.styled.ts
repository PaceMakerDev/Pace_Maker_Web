import styled from 'styled-components';
import { DISABLE_TEXT_COLOR_CODE, PRIME_COLOR_CODE } from 'common/constants';

export const StyledCircleButton = styled.button<{ size?: string; fontSize?: string }>`
  width: ${props => props.size || '3em'};
  height: ${props => props.size || '3em'};
  border: 1px solid #fff;
  border-radius: 50%;
  background-color: #21292d;
  font-size: ${props => props.fontSize || '0.875rem'};
  color: #fff;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    border-color: ${PRIME_COLOR_CODE};
    color: ${PRIME_COLOR_CODE};
  }

  &:disabled {
    border-color: ${DISABLE_TEXT_COLOR_CODE};
    color: ${DISABLE_TEXT_COLOR_CODE};
    cursor: not-allowed;
  }
`;
