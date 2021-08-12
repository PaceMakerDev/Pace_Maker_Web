import React, { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import SmallSelect from 'components/molecules/Select/SmallSelect/SmallSelect';
import StudyRoomBox from 'components/molecules/StudyRoomBox/StudyRoomBox';
import Image from 'components/atoms/Image/Image';
import Loading from 'components/atoms/Loading/Loading';
import blurEffect from 'assets/images/blur_effect.png';
import { fetchMyStudyRoom } from 'common/apis/study';
import { getUserId } from 'utils/user';
import {
  StyledMyStudyRoomList,
  StyledMyStudyRoomListTop,
  StyledTitle,
  StyledMyStudyRoomListBody,
} from './MyStudyRoomList.styled';

/* global StudyRoomOverview */

const MyStudyRoomList: React.FC = () => {
  const [myStudyRoomList, setMyStudyRoomList] = useState<Array<StudyRoomOverview>>([]); 
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleMyStudyRoomList = async () => {
      const userId = getUserId();

      if (userId) {
        const studyRoomResponse: AxiosResponse = await fetchMyStudyRoom(userId);
        const studyRoomData: Array<StudyRoomOverview> = studyRoomResponse.data.data;
        setMyStudyRoomList(studyRoomData);
        setIsLoading(false);
      }
    };

    handleMyStudyRoomList();
  }, []);

  return (
    <StyledMyStudyRoomList>
      <StyledMyStudyRoomListTop>
        <StyledTitle>나의 스터디룸</StyledTitle>
        <SmallSelect options={['최신순', '이름순']} align="right" />
      </StyledMyStudyRoomListTop>

      <StyledMyStudyRoomListBody>
        {isLoading ? (
          <Loading size="3rem" theme="white" />
        ) : (
          myStudyRoomList?.map(item => (
            <StudyRoomBox
              key={item.id}
              className="study-room-item"
              title={item.title}
              totalTime={item.studyTimeInSecond}
              category={item.category}
              studyroomRank={item.studyRanking}
              myRank={item.userRankingInStudy}
              isLeader={item.isLeader}
            />
          ))
        )}
      </StyledMyStudyRoomListBody>

      <Image className="blur-effect" src={blurEffect} alt="blur-effect" />
    </StyledMyStudyRoomList>
  );
};

export default MyStudyRoomList;
