import styled from 'styled-components';
import { PRIME_COLOR_CODE } from 'common/constants';

interface Props {
  active?: boolean;
}

export const StyledDayToggle = styled.button<Props>`
  padding: 0.7em 0.5em;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${props => (props.active ? PRIME_COLOR_CODE : 'transparent')};
  border-radius: 20px;
  background-color: #21292d;
  font-size: 0.875rem;
  cursor: pointer;

  &:hover {
    border-color: ${PRIME_COLOR_CODE};
  }
`;

export const StyledDay = styled.span<Props>`
  margin-bottom: 1.4em;
  color: ${props => (props.active ? PRIME_COLOR_CODE : '#fff')};
`;

export const StyledCheckBox = styled.span<Props>`
  width: 1.7em;
  height: 1.7em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${props => (props.active ? PRIME_COLOR_CODE : 'transparent')};
  border-radius: 50%;
  background-color: #11181b;
  color: ${PRIME_COLOR_CODE};
`;
