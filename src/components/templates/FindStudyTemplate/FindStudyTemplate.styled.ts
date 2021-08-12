import styled from 'styled-components';
import { APP_WIDTH } from 'common/constants';

export const StyledFindStudyTemplate = styled.div`
  padding: 2.5rem 0;
  position: relative;
`;

export const StyledSearchWrapper = styled.div`
  margin-bottom: 2rem;
  display: flex;
`;

export const StyledSearchSection = styled.section`
  flex: 1;
`;

export const StyledNewStudyButtonSection = styled.section`
  margin-left: 1rem;
`;

export const StyledCategoryFilterSection = styled.section``;

export const StyledHotStudyRoomSection = styled.section``;

export const StyledStudyRoomSection = styled.section``;

export const StyledMenuTabSection = styled.menu`
  width: 100%;
  max-width: ${APP_WIDTH};
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
`;