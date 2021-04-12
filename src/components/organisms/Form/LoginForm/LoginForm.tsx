import React, { useCallback, useState } from 'react';
import { message } from 'antd';
import FullButton from 'components/atoms/Button/FullButton/FullButton';
import RadiusInput from 'components/atoms/Input/RadiusInput/RadiusInput';
import { StyledInputWrapper } from './LoginForm.styled';

const LoginForm: React.FC = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = useCallback(event => {
    const { name, value } = event.target;

    if (name === 'id') {
      setId(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  }, []);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();

    message.warning({ content: '아직 준비중입니다', duration: 2 });
    // write login code ...
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
