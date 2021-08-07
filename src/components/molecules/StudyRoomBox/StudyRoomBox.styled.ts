import styled from 'styled-components';

export const StyledStudyRoomBox = styled.div`
  padding: 1rem 1.5rem;
  border: 0.3px solid #ddd;
  border-radius: 5px;
  background: radial-gradient(221.93% 221.93% at 50% 46.43%, rgba(68, 68, 68, 0.168) 0%, rgba(255, 255, 255, 0.8) 100%);
  cursor: pointer;
  transition: 0.25s ease;

  &:hover {
    transform: translateZ(0) scale(1.02);
  }
`;

export const StyledStudyRoomBoxTop = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledStudyTitme = styled.p`
  font-weight: 700;
  font-size: 1.2rem;
`;

export const StyledStudyRoomBoxTitle = styled.h1`
  margin-bottom: 1rem;
  font-weight: 700;
  font-size: 1.5rem;

  .crown-icon {
    margin-left: 0.7rem;
  }
`;

export const StyledStudyRoomBoxRanking = styled.div`
  display: flex;
  font-weight: 700;
  font-size: 0.875rem;

  .studyroom-rank {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #ccc;
    line-height: 1.5;
    text-align: center;
  }

  .my-rank {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.5;
    text-align: center;
  }

  .rank {
    font-family: GmarketSans;
  }
`;
