import React from 'react';
import FindAuthTemplate from 'components/templates/FindAuthTemplate/FindAuthTemplate';
import BackHeader from 'components/molecules/BackHeader/BackHeader';
import FindForm from 'components/organisms/Form/FindForm/FindForm';

const FindEmail: React.FC = () => (
  <FindAuthTemplate headerSection={<BackHeader>이메일 찾기</BackHeader>} findFormSection={<FindForm type="email" />} />
);

export default FindEmail;
