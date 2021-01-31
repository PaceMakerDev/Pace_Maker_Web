import { LOG_IN, LOG_OUT } from 'action/account';

const getUser = () => {
  // get user info from axios
};

const getAccessKey = (): string => {
  const accessKey = localStorage.getItem('accessKey');
  if (accessKey) {
    return accessKey;
  } else {
    return '';
  }
};

const initState: AccountState = {
  isLogin: getAccessKey() ? true : false,
  getUser,
  getAccessKey,
};

export const accountReducer = (state = initState, action: DefaultAction): AccountState => {
  switch (action.type) {
    case LOG_IN:
      return { ...initState, isLogin: true };
    case LOG_OUT:
      return { ...initState, isLogin: false };
    default:
      return state;
  }
};
