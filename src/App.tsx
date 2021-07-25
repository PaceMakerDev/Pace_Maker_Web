import React, { useEffect, useState } from 'react';
import Router from 'Router';
import { AxiosResponse } from 'axios';
import { useAppDispatch } from 'common/hooks/reduxhooks';
import { setLogin, setLogout, setUser } from 'actions/auth';
import { fetchNewToken, fetchUserInfo } from 'common/apis/auth';
import { removeAllToekn, saveToken } from 'utils/token';
import { getUserId } from 'utils/user';

/* global User */

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleAuth = async (): Promise<void> => {
      const accessToken: string | null = localStorage.getItem('ACCESS_TOKEN');
      const refreshToken: string | null = localStorage.getItem('REFRESH_TOKEN');

      if (!accessToken) {
        dispatch(setLogout());
        setIsLoading(false);
        return;
      }

      const loginResponse: AxiosResponse = await fetchNewToken(refreshToken);
      const { status } = loginResponse;

      if (status === 401 || status === 403) {
        removeAllToekn();
        alert('로그인 토큰이 만료되었거나 잘못되었습니다');
        dispatch(setLogout());
        setIsLoading(false);
        return;
      }

      const newAccessToken: string = loginResponse.data.data.accessToken;
      saveToken(newAccessToken);

      const userId: number | null = getUserId();
      const userResponse: AxiosResponse = await fetchUserInfo(userId);
      const userData: User = userResponse.data.data;

      dispatch(setLogin());
      dispatch(setUser(userData));

      setIsLoading(false);
    };

    handleAuth();
  }, [dispatch]);

  return <Router isLoading={isLoading} />;
};

export default App;
