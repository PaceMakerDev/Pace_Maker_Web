import styled from 'styled-components';

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-bottom: 2px solid #ddd;
  font-size: 0.9rem;
  box-sizing: border-box;

  &:focus {
    outline: none;
    
    &+span::before {
      width: 100%;
    }
  }
`;

export const StyledUnderbar = styled.span`
  width: 100%;
  height: 2px;
  position: absolute;
  bottom: 2px;
  left: 0;
  display: block;

  &::before {
    content: '';
    width: 0;
    height: 2px;
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    background-color: #0ebeaf;
    transition: width 0.4s ease;
  }
`;
