import BackHeader from 'components/molecules/BackHeader/BackHeader';
import AuthTemplate from 'components/templates/AuthTemplate/AuthTemplate';
import React from 'react';

const Join: React.FC = () => (
  <AuthTemplate headerSection={<BackHeader>회원가입</BackHeader>} formSection="im join" />
);

export default Join;
