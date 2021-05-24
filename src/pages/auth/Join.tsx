import BackHeader from 'components/molecules/BackHeader/BackHeader';
import JoinTemplate from 'components/templates/JoinTemplate/JoinTemplate';
import React from 'react';

const Join: React.FC = () => (
  <JoinTemplate headerSection={<BackHeader>회원가입</BackHeader>} joinFormSection="im join" />
);

export default Join;
