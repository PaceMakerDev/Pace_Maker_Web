/* global GetUserAction, SetUserAction, SetLoginAction, SetLogoutAction */
/* global User */

export const GET_USER = 'GET_USER';
export const SET_USER = 'SET_USER';
export const SET_LOGIN = 'SET_LOGIN';
export const SET_LOGOUT = 'SET_LOGOUT';

export const getUser = (): GetUserAction => ({
  type: GET_USER,
});

export const setUser = (user: User): SetUserAction => ({
  type: SET_USER,
  user,
});

export const setLogin = (): SetLoginAction => ({
  type: SET_LOGIN,
});

export const setLogout = (): SetLogoutAction => ({
  type: SET_LOGOUT,
});
