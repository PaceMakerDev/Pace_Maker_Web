import { APP_WIDTH } from 'common/constants';
import styled from 'styled-components';

export const StyledMystudyTemplate = styled.div`
  padding: 3rem 1.3rem;
  position: relative;
`;

export const StyledTodayStudyTimeSection = styled.section`
  margin-bottom: 3rem;
`;

export const StyledStudyGraphSection = styled.section`
  margin-bottom: 3rem;
`;

export const StyledMystudyRoomSection = styled.section`
  margin-bottom: 3rem;
`;

export const StyledMenuTabSection = styled.menu`
  width: 100%;
  max-width: ${APP_WIDTH};
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
`;
