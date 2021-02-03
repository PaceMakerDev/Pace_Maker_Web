import styled from 'styled-components';

export const StyledMystudyTemplate = styled.div`
  padding: 3rem;
`;

export const StyledStudyListSection = styled.section`
  margin: 1.5rem 0;
  position: relative;
  display: flex;
  justify-content: space-between;

  .study-block {
    width: 48%;
  }

  .more {
    position: absolute;
    top: -30px;
    right: 10px;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    color: #0ebeaf;
    cursor: pointer;
  }
`;

export const StyledTotalStudySection = styled.section`
  margin: 1.5rem 0;
  background-color: rosybrown;
`;

export const StyledWeekStudySection = styled.section`
  margin: 1.5rem 0;
  background-color: cornflowerblue;
`;

export const StyledTitle = styled.h1`
  margin-bottom: 2.7rem;
  font-weight: 700;
  font-size: 2rem;
`;
