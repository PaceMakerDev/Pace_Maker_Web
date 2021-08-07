import styled, { css } from 'styled-components';
import { PRIME_COLOR_CODE } from 'common/constants';

export const StyledSmallSelect = styled.div`
  position: relative;
  display: inline-block;
`;

export const StyledCurrentValue = styled.span`
  font-weight: 700;
  font-size: 0.875rem;
  cursor: pointer;

  &:hover {
    color: ${PRIME_COLOR_CODE};
  }
`;

export const StyledOptionsWrapper = styled.div<{ visible?: boolean; align: 'right' | 'left' }>`
  min-width: 150%;
  height: 0;
  position: absolute;
  top: 30px;
  border-radius: 10px;
  background-color: #21292d;
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  ${props =>
    props.align === 'left' &&
    css`
      left: 0;
    `}
  ${props =>
    props.align === 'right' &&
    css`
      right: 0;
    `}

  &.active {
    height: 90px;
    visibility: visible;
    overflow: scroll;
  }
`;

export const StyledOptions = styled.ul``;

export const StyledOptionItem = styled.li<{ align: 'right' | 'left' }>`
  padding: 0.8rem 1.2rem;
  white-space: nowrap;
  font-weight: bold;
  font-size: 0.875rem;
  cursor: pointer;

  ${props =>
    props.align === 'left' &&
    css`
      text-align: left;
    `}
  ${props =>
    props.align === 'right' &&
    css`
      text-align: right;
    `}

  &:hover {
    background-color: #151515;
  }
`;
