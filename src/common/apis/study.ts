import axios, { AxiosResponse } from 'axios';
import { API_SERVER_ADDRESS } from 'common/constants';
import { getAuthApiHeader } from 'utils/token';

/* global AuthHeader */

export const fetchMyStudyRoom = async (userId: number): Promise<AxiosResponse<any>> => {
  try {
    const headers: AuthHeader = getAuthApiHeader();
    const response = await axios.get(`${API_SERVER_ADDRESS}/users/${userId}/studies`, { headers });
    return response;
  } catch (error) {
    const { status, statusText } = error.response;
    alert(`Error: ${status}(${statusText})`);
    return error.response;
  }
};
