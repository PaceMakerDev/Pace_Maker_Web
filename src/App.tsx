import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Router from 'Router';
import LoadingPaper from 'LoadingPaper';
import { AxiosResponse } from 'axios';
import { useAppDispatch } from 'common/hooks/reduxhooks';
import { setLogin, setLogout, setUser } from 'actions/auth';
import { fetchNewToken, fetchUserInfo } from 'common/apis/auth';
import { removeAllToekn, saveNewToken } from 'utils/token';
import { getUserId } from 'utils/user';

/* global User */

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const dispath = useAppDispatch();

  useEffect(() => {
    const handleAuth = async (): Promise<void> => {
      const accessToken: string | null = localStorage.getItem('ACCESS_TOKEN');
      const refreshToken: string | null = localStorage.getItem('REFRESH_TOKEN');

      if (!accessToken) {
        dispath(setLogout());
        setIsLoading(false);
        return;
      }

      const loginResponse: AxiosResponse = await fetchNewToken(refreshToken);
      const { status } = loginResponse;

      if (status === 401 || status === 403) {
        removeAllToekn();
        alert('로그인 토큰이 만료되었거나 잘못되었습니다');
        dispath(setLogout());
        setIsLoading(false);
      }

      const newAccessToken: string = loginResponse.data.data.accessToken;
      saveNewToken(newAccessToken);

      const userId: number | null = getUserId();
      const userResponse: AxiosResponse = await fetchUserInfo(userId);
      const userData: User = userResponse.data.data;

      dispath(setLogin());
      dispath(setUser(userData));

      setIsLoading(false);
    };

    handleAuth();
  }, [history, dispath]);

  return isLoading ? <LoadingPaper /> : <Router />
  
};

export default App;
