import React from 'react';
import {
  StyledFindStudyTemplate,
  StyledSearchWrapper,
  StyledSearchSection,
  StyledNewStudyButtonSection,
  StyledCategoryFilterSection,
  StyledHotStudyRoomSection,
  StyledStudyRoomSection,
  StyledMenuTabSection,
} from './FindStudyTemplate.styled';

interface Props {
  searchSection: React.ReactNode;
  newStudyButtonSection?: React.ReactNode;
  categoryFilterSection?: React.ReactNode;
  hotStudyRoomSection?: React.ReactNode;
  studyRoomSection: React.ReactNode;
  menuTabSection: React.ReactNode;
}

const FindStudyTemplate: React.FC<Props> = ({
  searchSection,
  newStudyButtonSection,
  categoryFilterSection,
  hotStudyRoomSection,
  studyRoomSection,
  menuTabSection,
}) => (
  <StyledFindStudyTemplate>
    <StyledSearchWrapper>
      <StyledSearchSection>{searchSection}</StyledSearchSection>
      {newStudyButtonSection && <StyledNewStudyButtonSection>{newStudyButtonSection}</StyledNewStudyButtonSection>}
    </StyledSearchWrapper>
    {categoryFilterSection && <StyledCategoryFilterSection>{categoryFilterSection}</StyledCategoryFilterSection>}
    {hotStudyRoomSection && <StyledHotStudyRoomSection>{hotStudyRoomSection}</StyledHotStudyRoomSection>}
    <StyledStudyRoomSection>{studyRoomSection}</StyledStudyRoomSection>
    <StyledMenuTabSection>{menuTabSection}</StyledMenuTabSection>
  </StyledFindStudyTemplate>
);

export default FindStudyTemplate;
