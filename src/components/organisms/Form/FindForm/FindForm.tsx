import React, { useRef, useState } from 'react';
import { AxiosResponse } from 'axios';
import RadiusInput from 'components/atoms/Input/RadiusInput/RadiusInput';
import FullButton from 'components/atoms/Button/FullButton/FullButton';
import ErrorMessage from 'components/atoms/Message/ErrorMessage/ErrorMessage';
import { useInput } from 'common/hooks/input';
import { useShakeAnimation } from 'common/hooks/animation';
import { fetchEmailFind, fetchPasswordFind } from 'common/apis/auth';
import { StyledInputWrapper, StyledErrorBox } from './FindForm.styled';

interface Props {
  authType: 'email' | 'password';
  onSubmitOk: (name: string, email: string) => void;
}

const FindForm: React.FC<Props> = ({ authType, onSubmitOk }) => {
  const [name, handleName] = useInput('');
  const [studentId, handleStudentId] = useInput('');
  const [email, handleEmail] = useInput('');
  const [loading, setLoading] = useState(false);
  const [isInfoIncorrect, setIsInfoIncorrect] = useState(false);
  const [errorMessageRef, shakeMessage] = useShakeAnimation();

  const nameInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async event => {
    event.preventDefault();
    setLoading(true);

    let response: AxiosResponse;
    if (authType === 'email') {
      response = await fetchEmailFind(name, studentId);
    } else {
      response = await fetchPasswordFind(name, email);
    }
    const { status } = response;

    if (status === 404) {
      setIsInfoIncorrect(true);
      shakeMessage();

      nameInputRef.current?.focus();
      setLoading(false);
      return;
    }

    const emailData: string = response.data.data.email;
    onSubmitOk(name, emailData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledInputWrapper>
        <RadiusInput name="name" value={name} placeholder="이름" required _ref={nameInputRef} onChange={handleName} />
        {authType === 'email' && (
          <RadiusInput name="studentId" value={studentId} placeholder="학번" required onChange={handleStudentId} />
        )}
        {authType === 'password' && (
          <RadiusInput name="email" value={email} placeholder="이메일" required onChange={handleEmail} />
        )}
        <StyledErrorBox>
          <ErrorMessage visible={isInfoIncorrect} _ref={errorMessageRef}>
            입력하신 정보로 가입된 정보가 없습니다
          </ErrorMessage>
        </StyledErrorBox>
      </StyledInputWrapper>

      <FullButton theme="prime" loading={loading} disabled={loading}>
        {authType === 'email' && '이메일 찾기'}
        {authType === 'password' && '패스워드 찾기'}
      </FullButton>
    </form>
  );
};

export default FindForm;
