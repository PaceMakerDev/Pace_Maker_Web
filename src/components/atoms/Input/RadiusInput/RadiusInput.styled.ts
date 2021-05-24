import styled from 'styled-components';
import { PRIME_COLOR_CODE } from 'common/constants';

export const StyledRadiusInput = styled.input`
  width: 100%;
  padding: 0.7em 1.25em;
  border: 1px solid transparent;
  border-radius: 10px;
  background-color: #212727;
  font-weight: 700;
  font-size: 0.875rem;
  color: #eee;

  &:focus {
    outline: none;
    border: 1px solid ${PRIME_COLOR_CODE};
  }
`;
