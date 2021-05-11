import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import sha256 from 'crypto-js/sha256';
import { useAppDispatch } from 'common/reduxhooks';
import FullButton from 'components/atoms/Button/FullButton/FullButton';
import RadiusInput from 'components/atoms/Input/RadiusInput/RadiusInput';
import { setLogin } from 'actions/auth';
import { SigninApi } from 'State';
import { API_SERVER_ADDRESS } from 'common/constants';
import { StyledInputWrapper } from './LoginForm.styled';

const LoginForm: React.FC = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const dispath = useAppDispatch();
  const history = useHistory();

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = useCallback(event => {
    const { name, value } = event.target;

    if (name === 'id') {
      setId(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  }, []);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async event => {
    event.preventDefault();

    const body: SigninApi = {
      userId: id,
      password: sha256(password).toString(),
    };

    const response = await axios.post(`${API_SERVER_ADDRESS}/auth/signin`, body);
    const {
      data: {
        data: { accessToken, refreshToken },
      },
    } = response;

    saveToken(accessToken, refreshToken);
    dispath(setLogin());
    history.push('/');
  };

  const saveToken = (accessToken: string, refreshToken: string): void => {
    localStorage.setItem('ACCESS_TOCKEN', accessToken);
    localStorage.setItem('REFRESH_TOCKEN', refreshToken);
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledInputWrapper>
        <RadiusInput name="id" value={id} placeholder="아이디" onChange={handleInput} />
        <RadiusInput name="password" value={password} type="password" placeholder="비밀번호" onChange={handleInput} />
      </StyledInputWrapper>
      <FullButton theme="prime">입장</FullButton>
    </form>
  );
};

export default React.memo(LoginForm);
