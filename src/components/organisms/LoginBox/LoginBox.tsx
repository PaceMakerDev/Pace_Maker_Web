import Link from 'next/link';
import { StyledLoginBox, StyledForgotPassword } from './LoginBox.styled';
import LoginForm from 'components/molecules/LoginForm/LoginForm';

const LoginBox: React.FC = () => {
  return (
    <StyledLoginBox>
      <img src="/images/ssutudy_logo.png" alt="login_logo" />
      <h1>SSUtudy</h1>
      <h2>로그인</h2>
      <LoginForm />
      <Link href="#" passHref>
        <StyledForgotPassword>비밀번호를 잃어버리셨나요?</StyledForgotPassword>
      </Link>
    </StyledLoginBox>
  );
};

export default LoginBox;
