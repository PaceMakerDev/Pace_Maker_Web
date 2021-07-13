import styled from 'styled-components';
import { PRIME_COLOR_CODE } from 'common/constants';

export const StyledHighlightMessage = styled.p<{ fontSize?: string; center?: boolean }>`
  text-align: ${props => props.center && 'center'};
  font-weight: 700;
  font-size: ${props => props.fontSize || '0.875rem'};
  color: ${PRIME_COLOR_CODE};
`;
