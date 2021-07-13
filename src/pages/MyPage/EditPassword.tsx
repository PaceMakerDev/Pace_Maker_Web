import React from 'react';
import FormTemplate from 'components/templates/FormTemplate/FormTemplate';
import BackHeader from 'components/molecules/BackHeader/BackHeader';
import EditPasswordForm from 'components/organisms/Form/EditPasswordForm/EditPasswordForm';

const EditPassword: React.FC = () => (
  <FormTemplate headerSection={<BackHeader>비밀번호 변경</BackHeader>} formSection={<EditPasswordForm />} />
);

export default EditPassword;
