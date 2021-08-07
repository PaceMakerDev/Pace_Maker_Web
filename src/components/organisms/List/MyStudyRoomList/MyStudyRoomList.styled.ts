import styled from 'styled-components';

export const StyledMyStudyRoomList = styled.div`
  .blur-effect {
    width: 800px;
    position: fixed;
    bottom: -220px;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
  }
`;

export const StyledMyStudyRoomListTop = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledTitle = styled.h1`
  font-weight: 700;
  font-size: 1.125rem;
`;

export const StyledMyStudyRoomListBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .study-room-item {
    width: 100%;
    margin-bottom: 1.125rem;
  }
`;
