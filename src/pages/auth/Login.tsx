import React from 'react';
import FormTemplate from 'components/templates/FormTemplate/FormTemplate';
import LoginForm from 'components/organisms/Form/LoginForm/LoginForm';
import BackHeader from 'components/molecules/BackHeader/BackHeader';
import ForgotLinks from 'components/molecules/ForgotLinks/ForgotLinks';

const Login: React.FC = () => (
  <FormTemplate
    headerSection={<BackHeader>로그인</BackHeader>}
    formSection={<LoginForm />}
    optionSection={<ForgotLinks />}
  />
);

export default Login;
