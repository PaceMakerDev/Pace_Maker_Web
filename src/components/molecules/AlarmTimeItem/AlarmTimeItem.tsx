import React, { useRef } from 'react';
import { handleTwoDigitHour, handleTwoDigitMinute } from 'utils/format';
import {
  StyledAlarmTimeItem,
  StyledDays,
  StyledAmPmButton,
  StyledTimeBox,
  StyledTimeInput,
} from './AlarmTimeItem.styled';

/* global DayCode, DayName, AlarmTimeItemChangeAmPmEventHandler, AlarmTimeItemChangeHourEventHandler, AlarmTimeItemChangeMinuteEventHandler */

interface Props {
  dayCode: DayCode;
  dayName?: DayName;
  isAmPm?: 'AM' | 'PM';
  hourValue?: string;
  minuteValue?: string;
  onChangeAmPm: AlarmTimeItemChangeAmPmEventHandler<HTMLButtonElement>;
  onChangeHour: AlarmTimeItemChangeHourEventHandler<HTMLInputElement>;
  onChangeMinute: AlarmTimeItemChangeMinuteEventHandler<HTMLInputElement>;
}

const AlarmTimeItem: React.FC<React.LiHTMLAttributes<HTMLLIElement> & Props> = ({
  dayCode,
  dayName,
  isAmPm,
  hourValue,
  minuteValue,
  onChangeAmPm,
  onChangeHour,
  onChangeMinute,
}) => {
  const hourInputRef = useRef<HTMLInputElement>(null);
  const minuteInputRef = useRef<HTMLInputElement>(null);

  const handleAmPm: React.MouseEventHandler<HTMLButtonElement> = event => {
    const { id } = event.currentTarget;

    if (id === 'am-btn') {
      onChangeAmPm(event, dayCode, 'AM');
    }

    if (id === 'pm-btn') {
      onChangeAmPm(event, dayCode, 'PM');
    }
  };

  const handleHour: React.ChangeEventHandler<HTMLInputElement> = event => {
    const { value } = event.target;
    onChangeHour(event, dayCode, value.replace(/[^0-9]/g, ''));
  };

  const handleMinute: React.ChangeEventHandler<HTMLInputElement> = event => {
    const { value } = event.target;
    onChangeMinute(event, dayCode, value.replace(/[^0-9]/g, ''));
  };

  const handleHourFormat: React.FocusEventHandler<HTMLInputElement> = event => {
    const { value } = event.target;
    const newValue = handleTwoDigitHour(value);
    onChangeHour(event, dayCode, newValue);
  };

  const handleMinuteFormat: React.FocusEventHandler<HTMLInputElement> = event => {
    const { value } = event.target;
    const newValue = handleTwoDigitMinute(value);
    onChangeMinute(event, dayCode, newValue);
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
