import React from 'react';
import AuthTemplate from 'components/templates/AuthTemplate/AuthTemplate';
import BackHeader from 'components/molecules/BackHeader/BackHeader';
import EmailVerificationForm from 'components/organisms/Form/EmailVerificationForm/EmailVerificationForm';

const EmailVerification: React.FC = () => <AuthTemplate headerSection={<BackHeader>학생 인증하기</BackHeader>} formSection={<EmailVerificationForm />} />

export default EmailVerification;