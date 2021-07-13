/* global AuthHeader */

export const getAuthApiHeader = (): AuthHeader => {
  const accessToken = localStorage.getItem('ACCESS_TOKEN');
  return {
    Authorization: `Bearer ${accessToken}`,
  };
};

export const getToken = (): [string | null, string | null] => {
  const accessToken = localStorage.getItem('ACCESS_TOKEN');
  const referchToken = localStorage.getItem('REFRESH_TOKEN');
  return [accessToken, referchToken];
};

export const saveToken = (accessToken: string, refreshToken?: string): void => {
  if (refreshToken) {
    localStorage.setItem('ACCESS_TOKEN', accessToken);
    localStorage.setItem('REFRESH_TOKEN', refreshToken);
  } else {
    localStorage.setItem('ACCESS_TOKEN', accessToken);
  }
};

export const removeAllToekn = (): void => {
  localStorage.removeItem('ACCESS_TOKEN');
  localStorage.removeItem('REFRESH_TOKEN');
};
