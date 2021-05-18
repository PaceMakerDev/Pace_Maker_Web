import React from 'react';
import {
  StyledMystudyTemplate,
  StyledTodayStudyTimeSection,
  StyledStudyGraphSection,
  StyledMystudyRoomSection,
  StyledMenuTabSection,
} from './MystudyTemplate.styled';

interface Props {
  todayStudyTimeSection: React.ReactNode;
  studyGraphSection: React.ReactNode;
  mystudyRoomSection: React.ReactNode;
  menuTabSection: React.ReactNode;
}

const MystudyTemplate: React.FC<Props> = ({
  todayStudyTimeSection,
  studyGraphSection,
  mystudyRoomSection,
  menuTabSection,
}: Props) => (
  <StyledMystudyTemplate>
    <StyledTodayStudyTimeSection>{todayStudyTimeSection}</StyledTodayStudyTimeSection>
    <StyledStudyGraphSection>{studyGraphSection}</StyledStudyGraphSection>
    <StyledMystudyRoomSection>{mystudyRoomSection}</StyledMystudyRoomSection>
    <StyledMenuTabSection>{menuTabSection}</StyledMenuTabSection>
  </StyledMystudyTemplate>
);

export default MystudyTemplate;
