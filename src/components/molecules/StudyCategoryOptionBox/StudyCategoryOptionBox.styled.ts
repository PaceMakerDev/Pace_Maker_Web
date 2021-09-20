import styled from 'styled-components';
import { PRIME_COLOR_CODE } from 'common/constants';

export const StyledStudyCategoryOptionBox = styled.ul`
  width: 100%;
  height: 300px;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px 10px 0 0;
  background-color: #21292d;
  overflow-y: overlay;

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

export const StyledCategoryItem = styled.li`
  margin: 0.8rem 0;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    color: ${PRIME_COLOR_CODE};
  }
`;
