import { useHistory } from 'react-router-dom';
import { StyledLoginForm } from './LoginFrom.styled';
import { EmailInput, PasswordInput } from 'components/atoms/Input/Input';
import { FullFillButton } from 'components/atoms/Button/Button';
import axios from 'axios';
import { useInput } from 'hooks/useInput';
import { useDispatch } from 'react-redux';
import { logIn } from 'action/account';

const LoginForm: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [inputs, handleInputs, resetInputs] = useInput<LoginInput>({ email: '', password: '' });
  const { email, password } = inputs;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const result = await axios.post('/auth/sign-in', {
        email,
        password,
      });
      localStorage.setItem('accessKey', result.data.accessToken);
      localStorage.setItem('user', JSON.stringify(result.data.user));
      dispatch(logIn());
      history.push('/mystudy');
    } catch (err) {
      if (err.response.status === 404) {
        alert('이메일 혹은 비밀번호가 틀렸습니다');
        resetInputs();
      } else {
        throw err;
      }
    }
  };

  return (
    <StyledLoginForm onSubmit={handleSubmit}>
      <div className="inputbox">
        <label>이메일</label>
        <EmailInput name="email" value={email} required placeholder="ssutudy@ssu.ac.kr" onChange={handleInputs} />
      </div>
      <div className="inputbox">
        <label>비밀번호</label>
        <PasswordInput
          name="password"
          value={password}
          required
          placeholder="비밀번호 (최소 8자리)"
          onChange={handleInputs}
        />
      </div>
      <FullFillButton primary>로그인</FullFillButton>
    </StyledLoginForm>
  );
};

export default LoginForm;
