import { AuthState } from 'State';
import { GetUserAction, SetUserAction, SetLoginAction, SetLogoutAction } from 'Action';
import { GET_USER, SET_USER, SET_LOGIN, SET_LOGOUT } from 'actions/auth';

const initState: AuthState = {
  isLogined: false,
};

export const authReducer = (
  state = initState,
  action: GetUserAction | SetUserAction | SetLoginAction | SetLogoutAction
): AuthState => {
  switch (action.type) {
    case GET_USER:
      // get user info asynchronous
      return state;

    case SET_USER:
      return { isLogined: true, user: action.user };

    case SET_LOGIN:
      return { ...state, isLogined: true };

    case SET_LOGOUT:
      return { ...state, isLogined: false };
      
    default:
      return state;
  }
};
