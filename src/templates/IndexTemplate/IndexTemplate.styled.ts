import styled from 'styled-components';
import { NAVIGATION_HEIGHT } from 'common/constants/style';

export const MainSection = styled.div`
  width: 100%;
  margin-top: ${NAVIGATION_HEIGHT}px;
  display: flex;
  background-color: beige;
`;

export const AppSection = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginSection = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DescriptionSection = styled.div`
  width: 100%;
`;
