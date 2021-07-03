/* global AuthHeader */

export const getAuthApiHeader = (): AuthHeader => {
  const accessToken = localStorage.getItem('ACCESS_TOKEN');
  return {
    Authorization: `Bearer ${accessToken}`,
  };
};

export const saveNewToken = (token: string): void => {
  localStorage.setItem('ACCESS_TOKEN', token);
};

export const removeAllToekn = (): void => {
  localStorage.removeItem('ACCESS_TOKEN');
  localStorage.removeItem('REFRESH_TOKEN');
};
