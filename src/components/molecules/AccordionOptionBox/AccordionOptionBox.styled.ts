import styled, { css } from 'styled-components';

interface Props {
  isShow?: boolean;
}

export const StyledAccordionOptionBox = styled.ul<Props>`
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

  ${props =>
    props.isShow &&
    css`
      height: 180px;
      bottom: -180px;
      overflow-y: overlay;
      visibility: visible;
    `}

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

export const StyledOptionItem = styled.li`
  padding: 0.8rem 1.2rem;
  font-weight: bold;
  font-size: 0.875rem;
  cursor: pointer;

  &:hover {
    background-color: #151515;
  }
`;
