import React from 'react';
import FullButton from 'components/atoms/Button/FullButton/FullButton';

const Logoutbtn: React.FC = () => {
  const handleLogout = () => {
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('REFRESH_TOKEN');
    localStorage.removeItem('user');
    window.location.reload();
  };
  return <FullButton onClick={handleLogout}>임시 로그아웃</FullButton>;
};

const MyPage: React.FC = () => (
  <div>
    <p>임시 로그아웃</p>
    <Logoutbtn />
  </div>
);

export default MyPage;
