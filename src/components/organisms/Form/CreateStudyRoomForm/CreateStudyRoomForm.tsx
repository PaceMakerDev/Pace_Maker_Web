import React from 'react';
import { useInput, useNumberInput } from 'common/hooks/input';
import { useAppSelector } from 'common/hooks/reduxhooks';
import InputLabel from 'components/atoms/Label/InputLabel/InputLabel';
import BasicMessage from 'components/atoms/Message/BasicMessage/BasicMessage';
import RadiusInput from 'components/atoms/Input/RadiusInput/RadiusInput';
import Textarea from 'components/atoms/Textarea/Textarea';
import FullButton from 'components/atoms/Button/FullButton/FullButton';
import {
  StyledCreateStudyRoomForm,
  StyledInputBox,
  StyledUserName,
  StyledFlexWrapper,
  StyledStudyCapacity,
} from './CreateStudyRoomForm.styled';

const CreateStudyRoomForm: React.FC = () => {
  const [title, handleTitle] = useInput('');
  const [capacity, handleCapacity] = useNumberInput(0);
  const [goal, handleGoal] = useInput('');
  const [rule, handleRule] = useInput('');

  const authStore = useAppSelector(state => state.authReducer);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();

    alert('준비중입니다');
    alert(`title: ${title}\ncapacity: ${capacity}\ngoal: ${goal}\nrule: ${rule}`);
  };

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
