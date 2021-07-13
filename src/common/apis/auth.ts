import axios, { AxiosResponse } from 'axios';
import { API_SERVER_ADDRESS } from 'common/constants';
import { getAuthApiHeader } from 'utils/token';

/* global AuthHeader, SigninApi, SignupApi, EmailFindApi, PasswordFindApi */

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
    const headers: AuthHeader = getAuthApiHeader();
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

export const fetchSignin = async (email: string, password: string): Promise<AxiosResponse<any>> => {
  try {
    const body: SigninApi = {
      email,
      password,
    };
    const response = await axios.post(`${API_SERVER_ADDRESS}/auth/signin`, body);
    return response;
  } catch (error) {
    const { status, statusText } = error.response;
    if (status !== 404) {
      alert(`Error: ${status}(${statusText})`);
    }
    return error.response;
  }
};

export const fetchSignup = async (
  email: string,
  name: string,
  major: string,
  studentId: string,
  password: string,
  birthday: string,
  academicStatus: 'ATTENDING' | 'TAKE_OFF'
): Promise<AxiosResponse<any>> => {
  try {
    const body: SignupApi = {
      email,
      name,
      major,
      studentId,
      password,
      birthday,
      academicStatus,
    };
    const response = await axios.post(`${API_SERVER_ADDRESS}/auth/signup`, body);
    return response;
  } catch (error) {
    const { status, statusText } = error.response;
    if (status !== 409) {
      alert(`Error: ${status}(${statusText})`);
    }
    return error.response;
  }
};

export const fetchEmailFind = async (name: string, studentId: string): Promise<AxiosResponse<any>> => {
  try {
    const body: EmailFindApi = {
      name,
      studentId,
    };
    const response = await axios.post(`${API_SERVER_ADDRESS}/auth/email/find`, body);
    return response;
  } catch (error) {
    const { status, statusText } = error.response;
    if (status !== 404) {
      alert(`Error: ${status}(${statusText})`);
    }
    return error.response;
  }
};

export const fetchPasswordFind = async (name: string, email: string): Promise<AxiosResponse<any>> => {
  try {
    const body: PasswordFindApi = {
      name,
      email,
    };
    const response = await axios.post(`${API_SERVER_ADDRESS}/auth/password/find`, body);
    return response;
  } catch (error) {
    const { status, statusText } = error.response;
    if (status !== 404) {
      alert(`Error: ${status}(${statusText})`);
    }
    return error.response;
  }
};
