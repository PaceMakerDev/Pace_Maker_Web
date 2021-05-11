import React, { useEffect, useState } from 'react';
import Router from 'Router';
import axios from 'axios';
import { useAppSelector } from 'common/reduxhooks';
import { API_SERVER_ADDRESS } from 'common/constants';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const authStore = useAppSelector(state => state.authReducer);

  const isLogined = async (): Promise<boolean> => {
    const accessToken = localStorage.getItem('ACCESS_TOKEN');
    const refreshToken = localStorage.getItem('REFRESH_TOKEN');

    if (!accessToken) {
      return false;
    }

    const response = await axios.post(`${API_SERVER_ADDRESS}/auth/token/refresh`);
    // response status에 따라서 return value를 결정 해야한다
    return true;
  };

  useEffect(() => {
    // fetch user info

    setTimeout(() => setIsLoading(false), 500);
  }, []);
  return <Router isLoading={isLoading} isLogined={authStore.isLogined} />;
};

export default App;
