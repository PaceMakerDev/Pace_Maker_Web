import React, { useCallback, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useAppDispatch } from 'common/reduxhooks';
import FullButton from 'components/atoms/Button/FullButton/FullButton';
import RadiusInput from 'components/atoms/Input/RadiusInput/RadiusInput';
import ErrorMessage from 'components/atoms/Message/ErrorMessage/ErrorMessage';
import { setLogin, setUser } from 'actions/auth';
import { SigninApi } from 'Api';
import { User } from 'User';
import { API_SERVER_ADDRESS } from 'common/constants';
import { StyledInputWrapper, StyledErrorBox } from './LoginForm.styled';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isAuthIncorrect, setIsAuthIncorrect] = useState(false);
  const [isShakeMessage, setIsShakeMessage] = useState(false);

  const emailInputRef = useRef<HTMLInputElement>(null);

  const dispath = useAppDispatch();
  const history = useHistory();

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = useCallback(event => {
    const { name, value } = event.target;

    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  }, []);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async event => {
    try {
      event.preventDefault();
      setLoading(true);

      const body: SigninApi = {
        email,
        password,
      };

      const response = await axios.post(`${API_SERVER_ADDRESS}/auth/signin`, body);
      const {
        data: {
          data: { accessToken, refreshToken, shouldChangePassword, user },
        },
      } = response;

      saveToken(accessToken, refreshToken);
      saveUserInfo(user);
      setLoading(false);
      
      dispath(setLogin());
      dispath(setUser(user));
      routeNextPage(shouldChangePassword);
    } catch (error) {
      const { status } = error.response;

      if (status === 404) {
        setIsAuthIncorrect(true);
        setIsShakeMessage(true);
        setTimeout(() => setIsShakeMessage(false), 400);

        emailInputRef.current?.focus();
      } else {
        alert(`ErrorCode: ${status}`);
      }

      setLoading(false);
    }
  };

  const routeNextPage = (shouldChangePassword: boolean) => {
    if (shouldChangePassword) {
      history.push('/mypage/editpassword');
    } else {
      history.push('/mystudy');
    }
  };

  const saveToken = (accessToken: string, refreshToken: string): void => {
    localStorage.setItem('ACCESS_TOKEN', accessToken);
    localStorage.setItem('REFRESH_TOKEN', refreshToken);
  };

  const saveUserInfo = (user: User): void => {
    localStorage.setItem('user', JSON.stringify(user));
  }

  return (
    <form onSubmit={handleSubmit}>
      <StyledInputWrapper>
        <RadiusInput
          name="email"
          value={email}
          placeholder="이메일"
          required
          _ref={emailInputRef}
          onChange={handleInput}
        />
        <RadiusInput
          name="password"
          value={password}
          type="password"
          placeholder="비밀번호"
          required
          onChange={handleInput}
        />
        <StyledErrorBox>
          <ErrorMessage visible={isAuthIncorrect} shake={isShakeMessage}>
            이메일이나 비밀번호가 올바르지 않습니다
          </ErrorMessage>
        </StyledErrorBox>
      </StyledInputWrapper>
      <FullButton theme="prime" loading={loading} disabled={loading}>
        입장
      </FullButton>
    </form>
  );
};

export default React.memo(LoginForm);
