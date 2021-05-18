import React from 'react';
import MystudyTemplate from 'components/templates/MystudyTemplate/MystudyTemplate';
import MenuTab from 'components/molecules/MenuTab/MenuTab';

const Logoutbtn: React.FC = () => {
  const handleLogout = () => {
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('REFRESH_TOKEN');
    window.location.reload();
  };
  return (
    <button style={{ cursor: 'pointer' }} onClick={handleLogout} type="button">
      임시 로그아웃
    </button>
  );
};
// 그리고 비밀번호 찾기랑 mystudy 화면만들기

const MyStudy: React.FC = () => (
  <MystudyTemplate
    todayStudyTimeSection="today study time"
    studyGraphSection="study graph"
    mystudyRoomSection={<Logoutbtn />}
    menuTabSection={<MenuTab activeIndex={0} />}
  />
);

export default MyStudy;
