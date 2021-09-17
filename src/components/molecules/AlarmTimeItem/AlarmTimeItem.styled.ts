import { PRIME_COLOR_CODE } from 'common/constants';
import styled from 'styled-components';

interface Props {
  isActive?: boolean;
}

export const StyledAlarmTimeItem = styled.li`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #292929;
`;

export const StyledDays = styled.span`
  margin: 0 1rem;
  margin-right: auto;
`;

export const StyledAmPmButton = styled.button<Props>`
  padding: 0.2em 0.8em;
  border: 1px solid ${props => (props.isActive ? PRIME_COLOR_CODE : 'transparent')};
  border-radius: 12px;
  background-color: #212727;
  font-size: 0.875rem;
  color: ${props => (props.isActive ? PRIME_COLOR_CODE : '#838383')};
  cursor: pointer;

  &:hover {
    border-color: ${PRIME_COLOR_CODE};
  }
`;

export const StyledTimeBox = styled.div`
  margin-left: 1rem;
  background-color: #21292d;
`;

export const StyledTimeInput = styled.input`
  width: 3rem;
  padding: 0.2rem 0.4rem;
  border: none;
  background-color: transparent;
  text-align: center;
  font-size: 0.875rem;
  color: #fff;

  &:focus {
    outline: none;
  }
`;
