import styled from 'styled-components';
import { APP_WIDTH } from 'common/constants';

interface Props {
  isShow?: boolean;
}

export const StyledSelectWrapper = styled.div`
  position: relative;

  input {
    cursor: pointer;

    &:focus {
      border-color: transparent;
    }
  }
`;

export const StyledInputArrow = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  font-size: 0.875rem;
  color: #9f9f9f;
  cursor: pointer;
`;

export const StyledBottomOpionBox = styled.div<Props>`
  width: 100%;
  max-width: ${APP_WIDTH};
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: ${props => (props.isShow ? '0px' : '-300px')};
  visibility: ${props => (props.isShow ? 'visible' : 'hidden')};
  transition: all 0.5s ease-in-out;
  z-index: 11;
`;
