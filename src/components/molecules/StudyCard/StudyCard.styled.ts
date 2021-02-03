import styled from 'styled-components';

export const StyledStudyCard = styled.div`
  width: 100%;
  padding: 1.5rem;
  border-radius: 10px;
  background-color: #f5f5f5;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(0.98);
  }
`;

export const StyledTitleWrapper = styled.div`
  margin-bottom: 3rem;
  display: flex;
  align-items: center;

  .card-title {
    margin-right: 1.5rem;
    font-weight: 700;
    font-size: 1.2rem;
  }

  span {
    margin-left: 0.2rem;
    font-size: 0.85rem;
  }
`;

export const StyledTagTimeWrapper = styled.div`
  display: flex;

  .tag-box {
    width: 100%;

    span {
      margin-right: 0.6rem;
      padding: 0.2rem 0.7rem;
      border-radius: 15px;
      background-color: #0ebeaf;
      font-size: 0.9rem;
      color: #fff;
    }
  }

  .time-box {
    width: 100px;
    display: flex;
    justify-content: flex-end;
    align-items:center;

    span {
      margin-left: 0.4rem;
      font-weight: 600;
      color: #333;
    }
  }
`;
