import React, { useCallback, useReducer } from 'react';
import { useInput, useNumberInput } from 'common/hooks/input';
import { useAppSelector } from 'common/hooks/reduxhooks';
import { setTimeAm, setTimeHour, setTimeMinute, setTimePm, toggleSchedule } from 'actions/studyschedule';
import { studyScheduleRecucer } from 'reducers/studyschedule';
import InputLabel from 'components/atoms/Label/InputLabel/InputLabel';
import BasicMessage from 'components/atoms/Message/BasicMessage/BasicMessage';
import DayToggle from 'components/molecules/Toggle/DayToggle/DayToggle';
import AlarmTimeItem from 'components/molecules/AlarmTimeItem/AlarmTimeItem';
import RadiusInput from 'components/atoms/Input/RadiusInput/RadiusInput';
import Textarea from 'components/atoms/Textarea/Textarea';
import FullButton from 'components/atoms/Button/FullButton/FullButton';
import {
  StyledCreateStudyRoomForm,
  StyledInputBox,
  StyledUserName,
  StyledFlexWrapper,
  StyledAlarmTimeWrapper,
  StyledDayToggleWrapper,
  StyledStudyCapacity,
} from './CreateStudyRoomForm.styled';

/* global ScheduleTime, DayToggleClickEventHandler, AlarmTimeItemChangeAmPmEventHandler, AlarmTimeItemChangeHourEventHandler, AlarmTimeItemChangeMinuteEventHandler */

const initStudySchedules: ScheduleTime[] = [
  {
    dayCode: 'MON',
    dayName: '월',
    isActive: false,
    isAmPm: 'AM',
    atHour: '00',
    atMinute: '00',
  },
  {
    dayCode: 'TUE',
    dayName: '화',
    isActive: false,
    isAmPm: 'AM',
    atHour: '00',
    atMinute: '00',
  },
  {
    dayCode: 'WED',
    dayName: '수',
    isActive: false,
    isAmPm: 'AM',
    atHour: '00',
    atMinute: '00',
  },
  {
    dayCode: 'THU',
    dayName: '목',
    isActive: false,
    isAmPm: 'AM',
    atHour: '00',
    atMinute: '00',
  },
  {
    dayCode: 'FRI',
    dayName: '금',
    isActive: false,
    isAmPm: 'AM',
    atHour: '00',
    atMinute: '00',
  },
  {
    dayCode: 'SAT',
    dayName: '토',
    isActive: false,
    isAmPm: 'AM',
    atHour: '00',
    atMinute: '00',
  },
  {
    dayCode: 'SUN',
    dayName: '일',
    isActive: false,
    isAmPm: 'AM',
    atHour: '00',
    atMinute: '00',
  },
];

const CreateStudyRoomForm: React.FC = () => {
  const [title, handleTitle] = useInput('');
  const [capacity, handleCapacity] = useNumberInput(0);
  const [studySchedules, dispatchStudySchedules] = useReducer(studyScheduleRecucer, initStudySchedules);
  const [goal, handleGoal] = useInput('');
  const [rule, handleRule] = useInput('');

  const authStore = useAppSelector(state => state.authReducer);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();

    alert('준비중입니다');
    alert(`title: ${title}\ncapacity: ${capacity}\ngoal: ${goal}\nrule: ${rule}`);
  };

  const handleScheduleToggle: DayToggleClickEventHandler<HTMLButtonElement> = useCallback((event, dayCode) => {
    dispatchStudySchedules(toggleSchedule(dayCode));
  }, []);

  const filterStudySchedules = useCallback(
    (): ScheduleTime[] => studySchedules.filter(schedule => schedule.isActive),
    [studySchedules]
  );

  const handleScheduleAmPm: AlarmTimeItemChangeAmPmEventHandler<HTMLButtonElement> = useCallback(
    (event, dayCode, type) => {
      if (type === 'AM') {
        dispatchStudySchedules(setTimeAm(dayCode));
      }

      if (type === 'PM') {
        dispatchStudySchedules(setTimePm(dayCode));
      }
    },
    []
  );

  const handleScheduleHour: AlarmTimeItemChangeHourEventHandler<HTMLInputElement> = useCallback(
    (event, dayCode, hour): void => {
      dispatchStudySchedules(setTimeHour(dayCode, hour));
    },
    []
  );

  const handleScheduleMinute: AlarmTimeItemChangeMinuteEventHandler<HTMLInputElement> = useCallback(
    (event, dayCode, minute): void => {
      dispatchStudySchedules(setTimeMinute(dayCode, minute));
    },
    []
  );

  return (
    <StyledCreateStudyRoomForm onSubmit={handleSubmit}>
      <StyledInputBox>
        <InputLabel fontSize="1rem" className="input-label" required htmlFor="1">
          스터디룸 명
        </InputLabel>
        <RadiusInput value={title} onChange={handleTitle} />
      </StyledInputBox>

      <StyledInputBox>
        <InputLabel fontSize="1rem" className="input-label" htmlFor="1">
          스터디룸 메이커
        </InputLabel>
        <BasicMessage className="thin-msg">스터디룸의 신뢰도를 위해 실명이 공개됩니다</BasicMessage>
        <StyledUserName>{authStore.user?.name}</StyledUserName>
      </StyledInputBox>

      <StyledInputBox>
        <StyledFlexWrapper>
          <InputLabel fontSize="1rem" className="input-label left-wrapper" htmlFor="1">
            스터디룸 인원수
          </InputLabel>
          <StyledStudyCapacity className="right-wrapper">
            <span>최대</span>
            <RadiusInput value={capacity} maxLength={2} onChange={handleCapacity} />
            <span>명</span>
          </StyledStudyCapacity>
        </StyledFlexWrapper>
      </StyledInputBox>

      <StyledInputBox>
        <InputLabel fontSize="1rem" className="input-label" htmlFor="1">
          스터디 알람 설정
        </InputLabel>
        <BasicMessage fontSize="0.8rem" className="thin-msg">
          스터디 시간에 스터디원에게 알림이 갑니다
        </BasicMessage>
        <StyledDayToggleWrapper>
          {studySchedules.map(schedule => (
            <DayToggle
              key={schedule.dayCode}
              dayCode={schedule.dayCode}
              active={schedule.isActive}
              onClickToggle={handleScheduleToggle}
            >
              {schedule.dayName}
            </DayToggle>
          ))}
        </StyledDayToggleWrapper>
      </StyledInputBox>

      <StyledAlarmTimeWrapper>
        {filterStudySchedules().map(schedule => (
          <AlarmTimeItem
            key={schedule.dayCode}
            dayCode={schedule.dayCode}
            dayName={schedule.dayName}
            isAmPm={schedule.isAmPm}
            hourValue={schedule.atHour}
            minuteValue={schedule.atMinute}
            onChangeAmPm={handleScheduleAmPm}
            onChangeHour={handleScheduleHour}
            onChangeMinute={handleScheduleMinute}
          />
        ))}
      </StyledAlarmTimeWrapper>

      <StyledInputBox>
        <InputLabel fontSize="1rem" className="input-label" required htmlFor="1">
          스터디룸 목적
        </InputLabel>
        <Textarea
          value={goal}
          placeholder="우리 스터디룸의 목적을 소개해주세요&#13;&#10;예) 매달 하나의 코딩 포트폴리오 만들기"
          onChange={handleGoal}
        />
      </StyledInputBox>

      <StyledInputBox>
        <InputLabel fontSize="1rem" className="input-label" required htmlFor="1">
          스터디룸 규칙
        </InputLabel>
        <Textarea
          value={rule}
          height="200px"
          placeholder="우리 스터디룸의 규칙을 알려주세요&#13;&#10;예) 일주일에 최소 2회 이상 출첵"
          onChange={handleRule}
        />
      </StyledInputBox>

      <StyledInputBox>
        <InputLabel fontSize="1rem" className="input-label" htmlFor="1">
          해시태그
        </InputLabel>
        <BasicMessage fontSize="0.75rem" className="hash-tag-msg thin-msg">
          스터디룸 검색 노출용 해시태그입니다
        </BasicMessage>
        <RadiusInput placeholder="ex) #코딩 #개발" />
      </StyledInputBox>

      <FullButton theme="prime">개설하기</FullButton>
    </StyledCreateStudyRoomForm>
  );
};

export default CreateStudyRoomForm;
