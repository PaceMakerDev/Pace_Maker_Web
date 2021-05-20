import BackHeader from 'components/molecules/BackHeader/BackHeader';
import FindForm from 'components/organisms/Form/FindForm/FindForm';
import FindAuthTemplate from 'components/templates/FindAuthTemplate/FindAuthTemplate';
import React from 'react';

const FindPassword: React.FC = () => (
  <FindAuthTemplate
    headerSection={<BackHeader>비밀번호 찾기</BackHeader>}
    findFormSection={<FindForm type="password" />}
  />
);

export default FindPassword;
