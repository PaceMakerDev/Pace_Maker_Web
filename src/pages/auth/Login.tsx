import React from 'react';
import LoginTemplate from 'components/templates/LoginTemplate/LoginTemplate';
import LoginForm from 'components/organisms/Form/LoginForm/LoginForm';
import BackHeader from 'components/molecules/BackHeader/BackHeader';
import ForgotLinks from 'components/molecules/ForgotLinks/ForgotLinks';

const Login: React.FC = () => (
  <LoginTemplate
    headerSection={<BackHeader>로그인</BackHeader>}
    loginFormSection={<LoginForm />}
    forgotSection={<ForgotLinks />}
  />
);

export default Login;
