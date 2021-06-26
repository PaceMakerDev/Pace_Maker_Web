import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import FullButton from 'components/atoms/Button/FullButton/FullButton';
import PresentId from 'components/molecules/PresetId/PresentId';
import RadiusInput from 'components/atoms/Input/RadiusInput/RadiusInput';
import ErrorMessage from 'components/atoms/Message/ErrorMessage/ErrorMessage';
import { useAppSelector } from 'common/reduxhooks';
import { EditPasswordApi, TokenHeaderApi } from 'Api';
import { API_SERVER_ADDRESS } from 'common/constants';
import { StyledInputWrapper, StyledErrorBox } from './EditPasswordForm.styled';

const EditPasswordForm: React.FC = () => {
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordValid, setNewPasswordValid] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [loading, setLoading] = useState(false);

  const newPasswordRef = useRef<HTMLInputElement>(null);

  const history = useHistory();
  const { user } = useAppSelector(state => state.authReducer);

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = useCallback(event => {
    const { value, name } = event.target;

    if (name === 'new-pw') {
      setNewPassword(value);
    }

    if (name === 'new-pw-valid') {
      setNewPasswordValid(value);
    }
  }, []);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async event => {
    try {
      event.preventDefault();
      if (!isValid) {
        alert('비밀번호가 일치하지 않습니다');
        newPasswordRef.current?.focus();
        return;
      }
      setLoading(true);

      const headers: TokenHeaderApi = getTokenHeader();
      const body: EditPasswordApi = {
        newPassword,
      };

      const userId: number | null = getUserId();
      await axios.patch(`${API_SERVER_ADDRESS}/user/${userId}/password`, body, {
        headers,
      });
      setLoading(false);
      alert('비밀번호 변경이 완료되었습니다');
      history.push('/mystudy');
    } catch (error) {
      const { status, statusText } = error.response;
      alert(`Error: ${status}(${statusText})`);
      setLoading(false);
    }
  };

  const getUserId = (): number | null => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      return null;
    }
    return parseInt(userId);
  };

  useEffect(() => {
    if (newPassword === newPasswordValid) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [newPassword, newPasswordValid]);

  const getTokenHeader = (): TokenHeaderApi => {
    const accessToken = localStorage.getItem('ACCESS_TOKEN');
    return {
      Authorization: `Bearer ${accessToken}`,
    };
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledInputWrapper>
        <PresentId userId={user?.email} />
        <RadiusInput
          name="new-pw"
          type="password"
          value={newPassword}
          placeholder="새 비밀번호"
          _ref={newPasswordRef}
          onChange={handleInput}
        />
        <RadiusInput
          name="new-pw-valid"
          type="password"
          value={newPasswordValid}
          placeholder="새 비밀번호 확인"
          onChange={handleInput}
        />
        <StyledErrorBox>
          <ErrorMessage visible={!isValid}>비밀번호가 일치하지 않습니다</ErrorMessage>
        </StyledErrorBox>
      </StyledInputWrapper>
      <FullButton theme="prime" loading={loading} disabled={loading}>
        변경하기
      </FullButton>
    </form>
  );
};

export default EditPasswordForm;
