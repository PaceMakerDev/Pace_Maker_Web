import React, { useState } from 'react';
import axios from 'axios';
import FullButton from 'components/atoms/Button/FullButton/FullButton';
import RadiusInput from 'components/atoms/Input/RadiusInput/RadiusInput';
import { useAppSelector } from 'common/reduxhooks';
import { EditPasswordApi, TokenHeaderApi } from 'Api';
import { API_SERVER_ADDRESS } from 'common/constants';
import { StyledInputWrapper, StyledErrorBox } from './EditPasswordForm.styled';

const EditPasswordForm: React.FC = () => {
  const [originalPassword, setOriginalPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordValid, setNewPasswordValid] = useState('');
  const [loading, setLoading] = useState(false);
  const authStore = useAppSelector(state => state.authReducer);

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = event => {
    const { value, name } = event.target;

    if (name === 'original-pw') {
      setOriginalPassword(value);
    }

    if (name === 'new-pw') {
      setNewPassword(value);
    }

    if (name === 'new-pw-valid') {
      setNewPasswordValid(value);
    }
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async event => {
    try {
      event.preventDefault();
      setLoading(true);

      const headers: TokenHeaderApi = getTokenHeader();
      const body: EditPasswordApi = {
        originalPassword,
        newPassword,
      };

      await axios.patch(`${API_SERVER_ADDRESS}/user/${authStore.user?.id}/password`, body, {
        headers,
      });
      setLoading(false);
    } catch (error) {
      alert(`Error: ${error.response.status}(${error.response.statusText})`);
      setLoading(false);
    }
  };

  const getTokenHeader = (): TokenHeaderApi => {
    const accessToken = localStorage.getItem('ACCESS_TOKEN');
    return {
      Authorization: `Bearer ${accessToken}`,
    };
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledInputWrapper>
        <RadiusInput name="original-pw" value={originalPassword} placeholder="기존 비밀번호" onChange={handleInput} />
        <br />
        <br />
        <RadiusInput name="new-pw" value={newPassword} placeholder="새 비밀번호" onChange={handleInput} />
        <RadiusInput
          name="new-pw-valid"
          value={newPasswordValid}
          placeholder="새 비밀번호 확인"
          onChange={handleInput}
        />
        <StyledErrorBox>error test</StyledErrorBox>
      </StyledInputWrapper>
      <FullButton theme="prime" loading={loading} disabled={loading}>
        변경하기
      </FullButton>
    </form>
  );
};

export default EditPasswordForm;
