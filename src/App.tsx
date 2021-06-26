import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Router from 'Router';
import { useAppDispatch } from 'common/reduxhooks';
import { setLogin, setLogout, setUser } from 'actions/auth';
import { API_SERVER_ADDRESS } from 'common/constants';
import { TokenHeaderApi } from 'Api';
import { User } from 'User';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const dispath = useAppDispatch();

  useEffect(() => {
    const handleAuth = async (): Promise<void> => {
      const accessToken: string | null = localStorage.getItem('ACCESS_TOKEN');
      const refreshToken: string | null = localStorage.getItem('REFRESH_TOKEN');

      try {
        if (!accessToken) {
          dispath(setLogout());
          setIsLoading(false);
          return;
        }

        const loginResponse = await axios.post(`${API_SERVER_ADDRESS}/auth/token/refresh`, { refreshToken });
        const newAccessToken: string = loginResponse.data.data.accessToken;
        saveNewToken(newAccessToken);

        const userId: number | null = getUserId();
        const headers: TokenHeaderApi = getTokenHeader();
        const userResponse = await axios.get(`${API_SERVER_ADDRESS}/users/${userId}`, { headers });
        const userData: User = userResponse.data.data;

        dispath(setLogin());
        dispath(setUser(userData));
        setIsLoading(false);
      } catch (error) {
        const { status, statusText } = error.response;
        if (status === 401 || status === 403) {
          localStorage.removeItem('ACCESS_TOKEN');
          localStorage.removeItem('REFRESH_TOKEN');
          alert('로그인 토큰이 만료되었거나 잘못되었습니다');
          dispath(setLogout());
          setIsLoading(false);
        } else {
          alert(`Error: ${status}(${statusText})`);
        }
      }
    };

    handleAuth();
  }, [history, dispath]);

  const getUserId = (): number | null => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      return null;
    }
    return parseInt(userId);
  };

  const getTokenHeader = (): TokenHeaderApi => {
    const accessToken = localStorage.getItem('ACCESS_TOKEN');
    return {
      Authorization: `Bearer ${accessToken}`,
    };
  };

  const saveNewToken = (accessToken: string): void => {
    localStorage.setItem('ACCESS_TOKEN', accessToken);
  };

  return <Router isLoading={isLoading} />;
};

export default App;
