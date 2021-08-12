import React from 'react';
import { useHistory } from 'react-router-dom';
import FindStudyTemplate from 'components/templates/FindStudyTemplate/FindStudyTemplate';
import SearchInput from 'components/atoms/Input/SearchInput/SearchInput';
import CircleButton from 'components/atoms/Button/CircleButton/CircleButton';
import MenuTab from 'components/molecules/MenuTab/MenuTab';

const FindStudy: React.FC = () => {
  const history = useHistory();

  return (
    <FindStudyTemplate
      searchSection={<SearchInput />}
      newStudyButtonSection={<CircleButton onClick={() => history.push('/new/studyroom')}>+</CircleButton>}
      categoryFilterSection="filter section"
      hotStudyRoomSection="hotstudy"
      studyRoomSection="study rooms"
      menuTabSection={<MenuTab activeIndex={1} />}
    />
  );
};

export default FindStudy;
