import { TOGGLE_SCHEDULE, SET_TIME_AM, SET_TIME_PM, SET_TIME_HOUR, SET_TIME_MINUTE } from 'actions/studyschedule';

/* global ScheduleTime, ToggleScheduleAction, SetTimeAmAction, SetTimePmAction, SetTimeHourAction, SetTimeMinuteAction */

export const studyScheduleRecucer = (
  state: ScheduleTime[],
  action: ToggleScheduleAction | SetTimeAmAction | SetTimePmAction | SetTimeHourAction | SetTimeMinuteAction
): ScheduleTime[] => {
  const dayIndex = state.findIndex(day => day.dayCode === action.dayCode);
  const newState = [...state];

  switch (action.type) {
    case TOGGLE_SCHEDULE: {
      newState[dayIndex] = { ...newState[dayIndex], isActive: !newState[dayIndex].isActive };
      return newState;
    }

    case SET_TIME_AM: {
      newState[dayIndex] = { ...newState[dayIndex], isAmPm: 'AM' };
      return newState;
    }

    case SET_TIME_PM: {
      newState[dayIndex] = { ...newState[dayIndex], isAmPm: 'PM' };
      return newState;
    }

    case SET_TIME_HOUR: {
      newState[dayIndex] = { ...newState[dayIndex], atHour: action.hour };
      return newState;
    }

    case SET_TIME_MINUTE: {
      newState[dayIndex] = { ...newState[dayIndex], atMinute: action.minute };
      return newState;
    }

    default:
      return state;
  }
};
