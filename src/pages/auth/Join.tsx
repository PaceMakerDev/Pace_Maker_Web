import React from 'react';
import FormTemplate from 'components/templates/FormTemplate/FormTemplate';
import BackHeader from 'components/molecules/BackHeader/BackHeader';
import JoinForm from 'components/organisms/Form/JoinForm/JoinForm';

const Join: React.FC = () => (
  <FormTemplate headerSection={<BackHeader>회원가입</BackHeader>} formSection={<JoinForm />} />
);

export default Join;
