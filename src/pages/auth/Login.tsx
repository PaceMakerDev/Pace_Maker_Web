import React from 'react';
import LoginTemplate from 'components/templates/LoginTemplate/LoginTemplate';
import LoginForm from 'components/organisms/Form/LoginForm/LoginForm';
import BackHeader from 'components/molecules/BackHeader/BackHeader';
import Link from 'components/atoms/Link/Link';

const Login: React.FC = () => (
  <LoginTemplate
    headerSection={<BackHeader>로그인</BackHeader>}
    loginFormSection={<LoginForm />}
    forgotSection={
      <Link to="/" color="#9b9b9b" fontSize="0.875rem">
        비밀번호를 잃어버렸어요
      </Link>
    }
  />
);

export default Login;
