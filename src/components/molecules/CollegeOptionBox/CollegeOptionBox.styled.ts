import styled from 'styled-components';
import { DISABLE_TEXT_COLOR_CODE, PRIME_COLOR_CODE } from 'common/constants';

interface Props {
  isActive?: boolean;
}

export const StyledCollegeOptionBox = styled.div`
  width: 100%;
  height: 300px;
  padding: 2.5rem 1.5rem;
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

export const StyledOptionBoxHeader = styled.div`
  position: relative;
`;

export const StyledHeaderItem = styled.div`
  width: 20%;
  margin-bottom: 1.5rem;
  display: inline-block;
`;

export const StyledHeaderSpan = styled.span<Props>`
  font-weight: bold;
  color: ${props => (props.isActive ? '#fff' : DISABLE_TEXT_COLOR_CODE)};
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;

export const StyledOptionBoxContent = styled.ul`
  position: relative;

  li {
    width: 50%;
    float: left;

    button {
      padding: 0.6rem 0;
      border: none;
      background-color: transparent;
      font-weight: 700;
      font-size: 1rem;
      color: #fff;
      cursor: pointer;

      &:hover {
        color: ${PRIME_COLOR_CODE};
      }
    }
  }
`;
