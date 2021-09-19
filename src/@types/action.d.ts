/* global User, DayCode */

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

declare interface ToggleScheduleAction {
  type: 'TOGGLE_SCHEDULE';
  dayCode: DayCode;
}

declare interface SetTimeAmAction {
  type: 'SET_TIME_AM';
  dayCode: DayCode;
}

declare interface SetTimePmAction {
  type: 'SET_TIME_PM';
  dayCode: DayCode;
}

declare interface SetTimeHourAction {
  type: 'SET_TIME_HOUR';
  dayCode: DayCode;
  hour: string;
}

declare interface SetTimeMinuteAction {
  type: 'SET_TIME_MINUTE';
  dayCode: DayCode;
  minute: string;
}

declare interface OpenModalAction {
  type: 'OPEN_MODAL';
  name: string;
}

declare interface CloseModalAction {
  type: 'CLOSE_MODAL';
  name: string;
}

declare interface ToggleModalAction {
  type: 'TOGGLE_MODAL';
  name: string;
}
