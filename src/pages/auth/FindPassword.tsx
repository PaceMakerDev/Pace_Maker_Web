import BackHeader from 'components/molecules/BackHeader/BackHeader';
import FindForm from 'components/organisms/Form/FindForm/FindForm';
import AuthTemplate from 'components/templates/AuthTemplate/AuthTemplate';
import React from 'react';

const FindPassword: React.FC = () => (
  <AuthTemplate headerSection={<BackHeader>비밀번호 찾기</BackHeader>} formSection={<FindForm type="password" />} />
);

export default FindPassword;
