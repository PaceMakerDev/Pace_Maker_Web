import React, { useRef } from 'react';
import { handleTwoDigitHour, handleTwoDigitMinute } from 'utils/format';
import {
  StyledAlarmTimeItem,
  StyledDays,
  StyledAmPmButton,
  StyledTimeBox,
  StyledTimeInput,
} from './AlarmTimeItem.styled';

/* global DayCode, DayName */

interface Props {
  dayCode: DayCode;
  dayName?: DayName;
  isAmPm?: 'AM' | 'PM';
  hourValue?: string;
  minuteValue?: string;
  setScheduleAmPm: (dayCode: DayCode, type: 'AM' | 'PM') => void;
  setScheduleHour: (dayCode: DayCode, hour: string) => void;
  setScheduleMinute: (dayCode: DayCode, minute: string) => void;
}

const AlarmTimeItem: React.FC<React.LiHTMLAttributes<HTMLLIElement> & Props> = ({
  dayCode,
  dayName,
  isAmPm,
  hourValue,
  minuteValue,
  setScheduleAmPm,
  setScheduleHour,
  setScheduleMinute,
}) => {
  const hourInputRef = useRef<HTMLInputElement>(null);
  const minuteInputRef = useRef<HTMLInputElement>(null);

  const handleAmPm: React.MouseEventHandler<HTMLButtonElement> = event => {
    const { id } = event.currentTarget;

    if (id === 'am-btn') {
      setScheduleAmPm(dayCode, 'AM');
    }

    if (id === 'pm-btn') {
      setScheduleAmPm(dayCode, 'PM');
    }
  };

  const handleHour: React.ChangeEventHandler<HTMLInputElement> = event => {
    const { value } = event.target;
    setScheduleHour(dayCode, value.replace(/[^0-9]/g, ''));
  };

  const handleMinute: React.ChangeEventHandler<HTMLInputElement> = event => {
    const { value } = event.target;
    setScheduleMinute(dayCode, value.replace(/[^0-9]/g, ''));
  };

  const handleHourFormat: React.FocusEventHandler<HTMLInputElement> = event => {
    const { value } = event.target;
    const newValue = handleTwoDigitHour(value);
    setScheduleHour(dayCode, newValue);
  };

  const handleMinuteFormat: React.FocusEventHandler<HTMLInputElement> = event => {
    const { value } = event.target;
    const newValue = handleTwoDigitMinute(value);
    setScheduleMinute(dayCode, newValue);
  };

  return (
    <StyledAlarmTimeItem>
      <StyledDays>{dayName}</StyledDays>
      <StyledAmPmButton id="am-btn" isActive={isAmPm === 'AM'} type="button" onClick={handleAmPm}>
        오전
      </StyledAmPmButton>
      <StyledAmPmButton id="pm-btn" isActive={isAmPm === 'PM'} type="button" onClick={handleAmPm}>
        오후
      </StyledAmPmButton>
      <StyledTimeBox>
        <StyledTimeInput
          value={hourValue}
          maxLength={2}
          ref={hourInputRef}
          onChange={handleHour}
          onBlur={handleHourFormat}
        />
        :
        <StyledTimeInput
          value={minuteValue}
          maxLength={2}
          ref={minuteInputRef}
          onChange={handleMinute}
          onBlur={handleMinuteFormat}
        />
      </StyledTimeBox>
    </StyledAlarmTimeItem>
  );
};

export default React.memo(AlarmTimeItem);
