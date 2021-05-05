import { GetUserAction, SetUserAction } from 'Action';
import { User } from 'User';

export const GET_USER = 'GET_USER';
export const SET_USER = 'SET_USER';

export const getUser = (): GetUserAction => ({
  type: GET_USER,
});

export const setUser = (user: User): SetUserAction => ({
  type: SET_USER,
  user,
});
