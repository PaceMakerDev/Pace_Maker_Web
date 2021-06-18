import styled from 'styled-components';

export const StyledRadiusSelect = styled.div`
  position: relative;
  cursor: pointer;

  input {
    cursor: pointer;
  }

  &::before {
    content: '\\25BC';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    font-size: 0.875rem;
    color: #9f9f9f;
  }
`;
