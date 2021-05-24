import React, { useCallback, useRef, useState } from 'react';
import axios from 'axios';
import RadiusInput from 'components/atoms/Input/RadiusInput/RadiusInput';
import FullButton from 'components/atoms/Button/FullButton/FullButton';
import ErrorMessage from 'components/atoms/Message/ErrorMessage/ErrorMessage';
import FindMessage from 'components/atoms/Message/FindMessage/FindMessage';
import { API_SERVER_ADDRESS } from 'common/constants';
import { EmailFindApi, PasswordFindApi } from 'Api';
import { StyledInputWrapper, StyledErrorBox, StyledFindMessageWrapper } from './FindForm.styled';

interface Props {
  type: 'email' | 'password';
}

const FindForm: React.FC<Props> = ({ type }: Props) => {
  const [userName, setName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [isAuthIncorrect, setIsAuthIncorrect] = useState(false);
  const [isShakeMessage, setIsShakeMessage] = useState(false);

  const [isFindOk, setIsFindOk] = useState(false);
  const [findEmail, setFindEmail] = useState('');

  const nameInputRef = useRef<HTMLInputElement>(null);

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = useCallback(event => {
    const { name, value } = event.target;

    if (name === 'name') {
      setName(value);
    }

    if (name === 'studentId') {
      setStudentId(value);
    }

    if (name === 'email') {
      setEmail(value);
    }
  }, []);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async event => {
    try {
      event.preventDefault();
      setLoading(true);

      const emailBody: EmailFindApi = {
        name: userName,
        studentId,
      };
      const passwordBody: PasswordFindApi = {
        name: userName,
        email,
      };

      let response;
      if (type === 'email') {
        response = await axios.post(`${API_SERVER_ADDRESS}/auth/email/find`, emailBody);
      }

      if (type === 'password') {
        response = await axios.post(`${API_SERVER_ADDRESS}/auth/password/find`, passwordBody);
      }

      const { data } = response?.data;
      setFindEmail(data.email);
      setIsFindOk(true);
      setLoading(false);
    } catch (error) {
      const { status } = error.response;

      if (status === 404) {
        setIsAuthIncorrect(true);
        setIsShakeMessage(true);
        setTimeout(() => setIsShakeMessage(false), 400);

        nameInputRef.current?.focus();
      } else {
        alert(`ErrorCode: ${status}`);
      }

      setLoading(false);
    }
  };

  return (
    <>
      {isFindOk ? (
        <StyledFindMessageWrapper>
          {type === 'email' && <FindMessage theme="main">{userName}님의 이메일입니다</FindMessage>}
          {type === 'password' && (
            <FindMessage theme="main">
              {userName}님의 아래 이메일로
              <br />
              비밀번호 안내 메일을 발송했습니다
            </FindMessage>
          )}
          <FindMessage theme="sub">{findEmail}</FindMessage>
        </StyledFindMessageWrapper>
      ) : (
        <form onSubmit={handleSubmit}>
          <StyledInputWrapper>
            <RadiusInput
              name="name"
              value={userName}
              placeholder="이름"
              required
              _ref={nameInputRef}
              onChange={handleInput}
            />
            {type === 'email' && (
              <RadiusInput name="studentId" value={studentId} placeholder="학번" required onChange={handleInput} />
            )}
            {type === 'password' && (
              <RadiusInput name="email" value={email} placeholder="이메일" required onChange={handleInput} />
            )}
            <StyledErrorBox>
              <ErrorMessage visible={isAuthIncorrect} shake={isShakeMessage}>
                입력하신 정보로 가입된 정보가 없습니다
              </ErrorMessage>
            </StyledErrorBox>
          </StyledInputWrapper>
          {type === 'email' && <FullButton theme="prime" loading={loading} disabled={loading}>이메일 찾기</FullButton>}
          {type === 'password' && <FullButton theme="prime" loading={loading} disabled={loading}>비밀번호 찾기</FullButton>}
        </form>
      )}
    </>
  );
};

export default FindForm;
