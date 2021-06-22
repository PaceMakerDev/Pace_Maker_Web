import styled from 'styled-components';
import { PRIME_COLOR_CODE } from 'common/constants';

export const StyledTextarea = styled.textarea<{ height?: string }>`
  width: 100%;
  height: ${props => props.height || '140px'};
  padding: 1rem;
  border: 1px solid transparent;
  border-radius: 10px;
  background-color: #212727;
  overflow: scroll;
  resize: none;
  box-sizing: border-box;
  font-weight: 700;
  font-size: 0.875rem;
  color: #eee;

  &:focus {
    outline: none;
    border: 1px solid ${PRIME_COLOR_CODE};
  }
`;
