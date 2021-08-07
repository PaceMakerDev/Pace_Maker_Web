import React from 'react';
import { StyledTodayStudyRecord, StyledSpan, StyledStudyRecord } from './TodayStudyRecord.styled';

const TodayStudyRecord: React.FC = () => (
  <StyledTodayStudyRecord>
    <StyledSpan>오늘의 공부 기록</StyledSpan>
    <StyledStudyRecord>00:00</StyledStudyRecord>
  </StyledTodayStudyRecord>
);

export default TodayStudyRecord;
