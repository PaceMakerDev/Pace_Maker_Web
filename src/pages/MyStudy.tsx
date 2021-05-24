import React from 'react';
import MystudyTemplate from 'components/templates/MystudyTemplate/MystudyTemplate';
import MenuTab from 'components/molecules/MenuTab/MenuTab';

const MyStudy: React.FC = () => (
  <MystudyTemplate
    todayStudyTimeSection="today study time"
    studyGraphSection="study graph"
    mystudyRoomSection="my study room"
    menuTabSection={<MenuTab activeIndex={0} />}
  />
);

export default MyStudy;
