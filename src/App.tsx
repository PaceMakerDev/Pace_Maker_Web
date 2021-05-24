import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Router from 'Router';
import { useAppDispatch } from 'common/reduxhooks';
import { setLogin, setLogout } from 'actions/auth';
import { API_SERVER_ADDRESS } from 'common/constants';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const dispath = useAppDispatch();

  useEffect(() => {
    const handleAuth = async (): Promise<void> => {
      const accessToken = localStorage.getItem('ACCESS_TOKEN');
      const refreshToken = localStorage.getItem('REFRESH_TOKEN');

      try {
        if (!accessToken) {
          dispath(setLogout());
          setIsLoading(false);
          return;
        }

        const response = await axios.post(`${API_SERVER_ADDRESS}/auth/token/refresh`, { refreshToken });
        const newAccessToken = response.data.data.accessToken;
        localStorage.setItem('ACCESS_TOKEN', newAccessToken);

        dispath(setLogin());
        setIsLoading(false);
      } catch (error) {
        const { status } = error.response;
        if (status === 401 || status === 403) {
          localStorage.removeItem('ACCESS_TOKEN');
          localStorage.removeItem('REFRESH_TOKEN');
          alert('로그인 토큰이 만료되었거나 잘못되었습니다');
          dispath(setLogout());
          setIsLoading(false);
        }
      }
    };

    handleAuth();
  }, [history, dispath]);
  return <Router isLoading={isLoading} />;
};

export default App;
