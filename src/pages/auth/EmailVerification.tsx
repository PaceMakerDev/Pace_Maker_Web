import React from 'react';
import FormTemplate from 'components/templates/FormTemplate/FormTemplate';
import BackHeader from 'components/molecules/BackHeader/BackHeader';
import EmailVerificationForm from 'components/organisms/Form/EmailVerificationForm/EmailVerificationForm';

const EmailVerification: React.FC = () => (
  <FormTemplate headerSection={<BackHeader>학생 인증하기</BackHeader>} formSection={<EmailVerificationForm />} />
);

export default EmailVerification;
