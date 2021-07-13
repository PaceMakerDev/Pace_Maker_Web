import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import { useAppDispatch } from 'common/hooks/reduxhooks';
import FullButton from 'components/atoms/Button/FullButton/FullButton';
import RadiusInput from 'components/atoms/Input/RadiusInput/RadiusInput';
import ErrorMessage from 'components/atoms/Message/ErrorMessage/ErrorMessage';
import { useInput } from 'common/hooks/input';
import { useShakeAnimation } from 'common/hooks/animation';
import { setLogin, setUser } from 'actions/auth';
import { saveToken } from 'utils/token';
import { setUesrId } from 'utils/user';
import { fetchSignin, fetchUserInfo } from 'common/apis/auth';
import { StyledInputWrapper, StyledErrorBox } from './LoginForm.styled';

/* global User */

interface SigninData {
  accessToken: string;
  refreshToken: string;
  shouldChangePassword: boolean;
  user: {
    id: number;
    name: string;
  };
}

const LoginForm: React.FC = () => {
  const [email, handleEmail] = useInput('');
  const [password, handlePassword] = useInput('');
  const [submitLoading, setSubmitLoading] = useState(false);
  const [isLoginIncorrect, setIsLoginIncorrect] = useState(false);
  const [errorMessageRef, shakeMessage] = useShakeAnimation();

  const emailInputRef = useRef<HTMLInputElement>(null);

  const dispath = useAppDispatch();
  const history = useHistory();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async event => {
    event.preventDefault();
    setSubmitLoading(true);

    const signinResponse: AxiosResponse = await fetchSignin(email, password);
    const { status } = signinResponse;

    if (status === 404) {
      setIsLoginIncorrect(true);
      shakeMessage();

      emailInputRef.current?.focus();
      setSubmitLoading(false);
      return;
    }

    const { accessToken, refreshToken, shouldChangePassword, user }: SigninData = signinResponse.data.data;
    const userId: number = user.id;
    saveToken(accessToken, refreshToken);
    setUesrId(userId);

    const userResponse = await fetchUserInfo(userId);
    const userData: User = userResponse.data.data;

    dispath(setLogin());
    dispath(setUser(userData));
    routeNextPage(shouldChangePassword);
  };

  const routeNextPage = (shouldChangePassword: boolean) => {
    if (shouldChangePassword) {
      history.push('/mypage/editpassword');
    } else {
      history.push('/mystudy');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledInputWrapper>
        <RadiusInput
          name="email"
          className="login-input"
          value={email}
          placeholder="이메일"
          required
          _ref={emailInputRef}
          onChange={handleEmail}
        />
        <RadiusInput
          name="password"
          className="login-input"
          value={password}
          type="password"
          placeholder="비밀번호"
          required
          onChange={handlePassword}
        />

        <StyledErrorBox>
          <ErrorMessage visible={isLoginIncorrect} _ref={errorMessageRef}>
            이메일이나 비밀번호가 올바르지 않습니다
          </ErrorMessage>
        </StyledErrorBox>
      </StyledInputWrapper>

      <FullButton theme="prime" loading={submitLoading} disabled={submitLoading}>
        입장
      </FullButton>
    </form>
  );
};

export default React.memo(LoginForm);
