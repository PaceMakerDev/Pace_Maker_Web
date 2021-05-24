import React from 'react';
import AuthTemplate from 'components/templates/AuthTemplate/AuthTemplate';
import BackHeader from 'components/molecules/BackHeader/BackHeader';
import EditPasswordForm from 'components/organisms/Form/EditPasswordForm/EditPasswordForm';

const EditPassword: React.FC = () => (
  <AuthTemplate headerSection={<BackHeader>비밀번호 변경</BackHeader>} formSection={<EditPasswordForm />} />
);

export default EditPassword;
