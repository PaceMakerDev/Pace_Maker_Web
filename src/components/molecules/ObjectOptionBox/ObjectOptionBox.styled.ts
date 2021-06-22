import styled from 'styled-components';

export const StyledObjectOptionBox = styled.ul`
  width: 100%;
  height: 0;
  position: absolute;
  bottom: 0;
  border-radius: 10px;
  background-color: #21292d;
  visibility: hidden;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  z-index: 11;

  &.active {
    height: 180px;
    bottom: -180px;
    visibility: visible;
    overflow: scroll;
  }
`;

export const StyledOptionItem = styled.li`
  padding: 0.8rem 1.2rem;
  font-weight: bold;
  font-size: 0.875rem;
  cursor: pointer;

  &:hover {
    background-color: #151515;
  }
`;
