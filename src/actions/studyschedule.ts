export const TOGGLE_SCHEDULE = 'TOGGLE_SCHEDULE';
export const SET_TIME_AM = 'SET_TIME_AM';
export const SET_TIME_PM = 'SET_TIME_PM';
export const SET_TIME_HOUR = 'SET_TIME_HOUR';
export const SET_TIME_MINUTE = 'SET_TIME_MINUTE';

/* global DayCode, ToggleScheduleAction, SetTimeAmAction, SetTimePmAction, SetTimeHourAction, SetTimeMinuteAction */

export const toggleSchedule = (dayCode: DayCode): ToggleScheduleAction => ({
  type: TOGGLE_SCHEDULE,
  dayCode,
});

export const setTimeAm = (dayCode: DayCode): SetTimeAmAction => ({
  type: SET_TIME_AM,
  dayCode,
});

export const setTimePm = (dayCode: DayCode): SetTimePmAction => ({
  type: SET_TIME_PM,
  dayCode,
});

export const setTimeHour = (dayCode: DayCode, hour: string): SetTimeHourAction => ({
  type: SET_TIME_HOUR,
  dayCode,
  hour,
});

export const setTimeMinute = (dayCode: DayCode, minute: string): SetTimeMinuteAction => ({
  type: SET_TIME_MINUTE,
  dayCode,
  minute,
});
