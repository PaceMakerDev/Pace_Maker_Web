import { StyledLoginForm } from './LoginFrom.styled';
import { EmailInput, PasswordInput } from 'components/atoms/Input/Input';
import { FullFillButton } from 'components/atoms/Button/Button';

const LoginForm: React.FC = () => {
  return (
    <StyledLoginForm>
      <div className="inputbox">
        <label>이메일</label>
        <EmailInput placeholder="ssutudy@ssu.ac.kr" />
      </div>
      <div className="inputbox">
        <label>비밀번호</label>
        <PasswordInput placeholder="비밀번호 (최소 8자리)" />
      </div>
      <FullFillButton primary>로그인</FullFillButton>
    </StyledLoginForm>
  );
};

export default LoginForm;
