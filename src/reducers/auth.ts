import { AuthState } from 'State';
import { GetUserAction, SetUserAction } from 'Action';
import { GET_USER, SET_USER } from 'actions/auth';

const initState: AuthState = {
  isLogined: false,
};

export const authReducer = (state = initState, action: GetUserAction | SetUserAction): AuthState => {
  switch (action.type) {
    case GET_USER:
      // get user info asynchronous
      return state;

    case SET_USER:
      return { isLogined: true, user: action.user };

    default:
      return state;
  }
};
