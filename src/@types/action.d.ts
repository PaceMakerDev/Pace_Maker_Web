declare module 'Action' {
  import { User } from 'User';

  export interface GetUserAction {
    type: 'GET_USER';
  }

  export interface SetUserAction {
    type: 'SET_USER';
    user: User;
  }

  export interface SetLoginAction {
    type: 'SET_LOGIN';
  }

  export interface SetLogoutAction {
    type: 'SET_LOGOUT';
  }
}
