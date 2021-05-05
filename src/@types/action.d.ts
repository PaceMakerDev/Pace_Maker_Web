declare module 'Action' {
  import { User } from 'User';

  export interface GetUserAction {
    type: 'GET_USER';
  }

  export interface SetUserAction {
    type: 'SET_USER';
    user: User;
  }
}
