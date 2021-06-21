import styled from 'styled-components';

export const StyledRadio = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`;

export const StyledInput = styled.input`
  &:checked + label {
    background-color: #02FFFD;
  }

  &:checked + label::before {
    background-color: #fff;
  }
`;

export const StyledCheckCircle = styled.label`
  width: 1.1875em;
  height: 1.1875em;
  margin-right: 0.4rem;
  position: relative;
  display: inline-block;
  border-radius: 50%;
  background-color: #888;
  cursor: pointer;

  &::before {
    content: '';
    width: 0.4375rem;
    height: 0.4375rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    border-radius: 50%;
    background-color: #c4c4c4;
  }
`;

export const StyledLabel = styled.label`
  font-weight: bold;
  font-size: 0.875rem;
  cursor: pointer;
`;
