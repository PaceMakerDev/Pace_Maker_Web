import styled from 'styled-components';
import { APP_WIDTH, PRIME_COLOR_CODE, DISABLE_TEXT_COLOR_CODE } from 'common/constants';

export const StyledBottomOptionBox = styled.div`
  width: 100%;
  max-width: ${APP_WIDTH};
  height: 300px;
  padding: 2.5rem 1.5rem;
  position: fixed;
  bottom: -300px;
  left: 50%;
  transform: translateX(-50%);
  visibility: hidden;
  border-radius: 10px 10px 0 0;
  background-color: #21292d;
  overflow-y: overlay;
  transition: all 0.5s ease-in-out;
  z-index: 11;

  &.active {
    visibility: visible;
    bottom: 0px;
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

export const StyledOptionBoxHeader = styled.div`
  position: relative;

  .header-item {
    width: 20%;
    margin-bottom: 1.5rem;
    display: inline-block;

    span {
      font-weight: bold;
      color: ${DISABLE_TEXT_COLOR_CODE};
      cursor: pointer;

      &.active {
        color: #fff;
      }

      &:hover {
        color: #fff;
      }
    }
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