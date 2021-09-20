/* global React, DayCode */

declare type DayToggleClickEventHandler<T> = (event: React.MouseEvent<T>, dayCode: DayCode) => void;

declare type AlarmTimeItemChangeAmPmEventHandler<T> = (
  event: React.MouseEvent<T>,
  dayCode: DayCode,
  type: 'AM' | 'PM'
) => void;

declare type AlarmTimeItemChangeHourEventHandler<T> = (
  event: React.ChangeEvent<T>,
  dayCode: DayCode,
  hour: string
) => void;

declare type AlarmTimeItemChangeMinuteEventHandler<T> = (
  event: React.ChangeEvent<T>,
  dayCode: DayCode,
  minute: string
) => void;

declare type OptionBoxChangeEventHandler<T> = (event: React.MouseEvent<T>, item: string) => void;
