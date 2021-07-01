import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import InputLabel from 'components/atoms/Label/InputLabel/InputLabel';
import RadiusInput from 'components/atoms/Input/RadiusInput/RadiusInput';
import HighlightMessage from 'components/atoms/Message/HighlightMessage/HighlightMessage';
import MiddleButton from 'components/atoms/Button/MiddleButton/MiddleButton';
import ErrorMessage from 'components/atoms/Message/ErrorMessage/ErrorMessage';
import FullButton from 'components/atoms/Button/FullButton/FullButton';
import { API_SERVER_ADDRESS } from 'common/constants';
import {
  StyledEmailVerificationForm,
  StyledAnnouncement,
  StyledInputBox,
  StyledEmailInputWrapper,
  StyledSubmitButtonWrapper,
} from './EmailVerificationForm.styled';

/* global EmailCodeApi, EmailVerifyApi */

const EmailVerification: React.FC = () => {
  const [isVerify, setIsVerify] = useState(false);
  const [isCorrectCode, setIsCorrectCode] = useState(true);
  const [isShakeMessage, setIsShakeMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');

  const history = useHistory();

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = useCallback(event => {
    const { value, name } = event.target;

    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'code') {
      setCode(value);
    }
  }, []);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async event => {
    event.preventDefault();

    if (!isVerify) {
      return;
    }

    try {
      const body: EmailVerifyApi = {
        email: `${email}@soongsil.ac.kr`,
        code,
      };
      await axios.post(`${API_SERVER_ADDRESS}/auth/email/verify-code`, body);
      history.push('/auth/join', { email: `${email}@soongsil.ac.kr` });
    } catch (error) {
      const { status, statusText } = error.response;

      if (status === 404) {
        setIsCorrectCode(false);
        setIsShakeMessage(true);
        setTimeout(() => setIsShakeMessage(false), 400);
      } else {
        alert(`Error: ${status}(${statusText})`);
      }
    }
  };

  const handleCodeSending: React.MouseEventHandler<HTMLButtonElement> = useCallback(async () => {
    setLoading(true);

    const body: EmailCodeApi = {
      email: `${email}@soongsil.ac.kr`,
    };

    await axios.post(`${API_SERVER_ADDRESS}/auth/email/send-code`, body);
    setLoading(false);
    setIsVerify(true);
  }, [email]);

  return (
    <StyledEmailVerificationForm onSubmit={handleSubmit}>
      {isVerify ? (
        <>
          <StyledAnnouncement>
            해당 이메일로 인증코드가 발송되었습니다
            <br />
            하단 입력칸에 인증코드를 입력해주세요
          </StyledAnnouncement>
          <HighlightMessage center fontSize="1.125rem" className="email-message">
            kjwook7522@soongsil.ac.kr
          </HighlightMessage>

          <StyledSubmitButtonWrapper>
            <MiddleButton theme="prime" type="button" onClick={handleCodeSending} loading={loading} disabled={loading}>
              코드 재전송
            </MiddleButton>
          </StyledSubmitButtonWrapper>

          <StyledInputBox>
            <InputLabel className="input-label" htmlFor="code">
              인증코드
            </InputLabel>

            <RadiusInput id="code" name="code" value={code} required onChange={handleInput} />
            <ErrorMessage className="error-message" visible={!isCorrectCode} shake={isShakeMessage}>
              인증코드가 올바르지 않습니다
            </ErrorMessage>
          </StyledInputBox>
        </>
      ) : (
        <>
          <StyledAnnouncement>학교 인증을 위해 학교 이메일 인증을 해주세요</StyledAnnouncement>

          <StyledInputBox>
            <InputLabel className="input-label" htmlFor="email">
              학교 이메일
            </InputLabel>

            <StyledEmailInputWrapper>
              <RadiusInput id="email" name="email" value={email} onChange={handleInput} />
              <span>@soongsil.ac.kr</span>
            </StyledEmailInputWrapper>
          </StyledInputBox>

          <StyledSubmitButtonWrapper>
            <MiddleButton theme="prime" type="button" onClick={handleCodeSending} loading={loading} disabled={loading}>
              코드 전송
            </MiddleButton>
          </StyledSubmitButtonWrapper>
        </>
      )}

      <FullButton theme="prime" disabled={!isVerify}>
        인증하기
      </FullButton>
    </StyledEmailVerificationForm>
  );
};

export default EmailVerification;
