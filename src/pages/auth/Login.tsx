import React from 'react';
import LoginTemplate from 'components/templates/LoginTemplate/LoginTemplate';
import LoginForm from 'components/organisms/Form/LoginForm/LoginForm';

const Login: React.FC = () => <LoginTemplate headerSection={1} loginFormSection={<LoginForm />} forgotSection={3} />;

export default Login;
