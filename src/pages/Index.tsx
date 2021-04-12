import React from 'react';
import { useHistory } from 'react-router-dom';
import HomeTemplate from 'components/templates/HomeTemplate/HomeTemplate';
import FullButton from 'components/atoms/Button/FullButton/FullButton';
import logo from 'assets/images/logo.png';
import Image from 'components/atoms/Image/Image';

const Index: React.FC = () => {
  const history = useHistory();

  return (
    <HomeTemplate
      logoSection={<Image src={logo} alt="logo" width="350px" />}
      authSection={
        <>
          <FullButton theme="prime" onClick={() => history.push('/auth/login')}>
            로그인
          </FullButton>
          <FullButton theme="white">회원가입</FullButton>
        </>
      }
    />
  );
};

export default Index;
