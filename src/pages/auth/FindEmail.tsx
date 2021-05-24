import React from 'react';
import AuthTemplate from 'components/templates/AuthTemplate/AuthTemplate';
import BackHeader from 'components/molecules/BackHeader/BackHeader';
import FindForm from 'components/organisms/Form/FindForm/FindForm';

const FindEmail: React.FC = () => (
  <AuthTemplate headerSection={<BackHeader>이메일 찾기</BackHeader>} formSection={<FindForm type="email" />} />
);

export default FindEmail;
