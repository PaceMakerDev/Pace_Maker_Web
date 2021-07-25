import React from 'react';
import Badge from 'components/atoms/Badge/Badge';
import Icon from 'components/atoms/Icon/Icon';
import crownIcon from 'assets/icons/crown_icon.png';
import {
  StyledStudyRoomBox,
  StyledStudyRoomBoxTop,
  StyledStudyRoomBoxTitle,
  StyledStudyRoomBoxRanking,
  StyledStudyTitme,
} from './StudyRoomBox.styled';

interface Props {
  title: string;
  totalTime: string;
  category: string;
  studyroomRank: number;
  myRank: number;
  isMaster?: boolean;
}

const StudyRoomBox: React.FC<Props> = ({ title, totalTime, category, studyroomRank, myRank, isMaster }) => (
  <StyledStudyRoomBox>
    <StyledStudyRoomBoxTop>
      <Badge>{category}</Badge>
      <StyledStudyTitme>{totalTime}</StyledStudyTitme>
    </StyledStudyRoomBoxTop>
    <StyledStudyRoomBoxTitle>
      {title}
      {isMaster && <Icon width="1.2em" className="crown-icon" src={crownIcon} />}
    </StyledStudyRoomBoxTitle>
    <StyledStudyRoomBoxRanking>
      <div className="studyroom-rank">
        <span className="rank">{studyroomRank}</span>
        스터디룸 랭킹
      </div>
      <div className="my-rank">
        <span className="rank">{myRank}</span>
        나의 랭킹
      </div>
    </StyledStudyRoomBoxRanking>
  </StyledStudyRoomBox>
);

export default React.memo(StudyRoomBox);
