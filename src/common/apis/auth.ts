import axios, { AxiosResponse } from 'axios';
import { API_SERVER_ADDRESS } from 'common/constants';
import { getAuthApiHeader } from 'utils/token';

export const fetchNewToken = async (refreshToken: string | null): Promise<AxiosResponse<any>> => {
  try {
    const response = await axios.post(`${API_SERVER_ADDRESS}/auth/token/refresh`, { refreshToken });
    return response;
  } catch (error) {
    const { status, statusText } = error.response;
    if (status !== 401 && status !== 403) {
      alert(`Error: ${status}(${statusText})`);
    }
    return error.response;
  }
};

export const fetchUserInfo = async (userId: number | null): Promise<AxiosResponse<any>> => {
  try {
    const headers = getAuthApiHeader();
    const response = await axios.get(`${API_SERVER_ADDRESS}/users/${userId}`, { headers });
    return response;
  } catch (error) {
    const { status, statusText } = error.response;
    if (status !== 401 && status !== 403) {
      alert(`Error: ${status}(${statusText})`);
    }
    return error.response;
  }
};
