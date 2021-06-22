import React from 'react';
import AuthTemplate from 'components/templates/AuthTemplate/AuthTemplate';
import BackHeader from 'components/molecules/BackHeader/BackHeader';
import JoinForm from 'components/organisms/Form/JoinForm/JoinForm';

const Join: React.FC = () => (
  <AuthTemplate headerSection={<BackHeader>회원가입</BackHeader>} formSection={<JoinForm />} />
);

export default Join;
