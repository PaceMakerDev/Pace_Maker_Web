export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

export const logIn = (): DefaultAction => ({
  type: LOG_IN,
  payload: true,
});

export const logOut = (): DefaultAction => ({
  type: LOG_OUT,
  payload: false,
});
