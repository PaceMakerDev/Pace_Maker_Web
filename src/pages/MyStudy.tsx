import React from 'react';
import MystudyTemplate from 'components/templates/MystudyTemplate/MystudyTemplate';
import TodayStudyRecord from 'components/molecules/TodayStudyRecord/TodayStudyRecord';
import MenuTab from 'components/molecules/MenuTab/MenuTab';
import BarStudyChart from 'components/organisms/Chart/BarStudyChart/BarStudyChart';
import MyStudyRoomList from 'components/organisms/List/MyStudyRoomList/MyStudyRoomList';

const MyStudy: React.FC = () => (
  <MystudyTemplate
    todayStudyTimeSection={<TodayStudyRecord />}
    studyGraphSection={
      <BarStudyChart labels={['6/27', '6/28', '6/29', '6/30', '7/1', '7/2', '7/3']} data={[12, 19, 3, 5, 2, 3, 6]} />
    }
    mystudyRoomSection={<MyStudyRoomList />}
    menuTabSection={<MenuTab activeIndex={0} />}
  />
);
export default MyStudy;
