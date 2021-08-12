import styled from 'styled-components';
import { PRIME_COLOR_CODE } from 'common/constants';

export const StyledTextarea = styled.textarea<{ height?: string }>`
  width: 100%;
  height: ${props => props.height || '140px'};
  padding: 1rem;
  border: 1px solid transparent;
  border-radius: 10px;
  background-color: #212727;
  overflow-y: scroll;
  resize: none;
  box-sizing: border-box;
  font-weight: 700;
  font-size: 0.875rem;
  color: #eee;

  &:focus {
    outline: none;
    border: 1px solid ${PRIME_COLOR_CODE};
  }

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 10px;
  }
`;
