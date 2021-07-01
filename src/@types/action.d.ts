/* global User */

declare interface GetUserAction {
  type: 'GET_USER';
}

declare interface SetUserAction {
  type: 'SET_USER';
  user: User;
}

declare interface SetLoginAction {
  type: 'SET_LOGIN';
}

declare interface SetLogoutAction {
  type: 'SET_LOGOUT';
}
