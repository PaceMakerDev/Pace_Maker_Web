import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import { useCheckInput, useInput, useNumberInput } from 'common/hooks/input';
import InputLabel from 'components/atoms/Label/InputLabel/InputLabel';
import RadiusInput from 'components/atoms/Input/RadiusInput/RadiusInput';
import RadiusSelect from 'components/molecules/Select/RadiusSelect/RadiusSelect';
import Radio from 'components/atoms/Radio/Radio';
import Textarea from 'components/atoms/Textarea/Textarea';
import ErrorMessage from 'components/atoms/Message/ErrorMessage/ErrorMessage';
import CheckBox from 'components/atoms/CheckBox/CheckBox';
import FullButton from 'components/atoms/Button/FullButton/FullButton';
import { fetchSignup } from 'common/apis/auth';
import { createBirthdayFormat } from 'utils/format';
import { SSU_MAJORS, YEARS, MONTHS, DAYS, TERMS_CONDITIONS_AGREE } from 'common/constants';
import {
  StyledInputBox,
  StyledRadioWrapper,
  StyledBirthdayWrapper,
  StyledBirthdayInputWrapper,
  StyledAgreeWrapper,
} from './JoinForm.styled';

const JoinForm: React.FC = () => {
  const [name, handleName] = useInput('');
  const [studentId, handleStudentId] = useNumberInput();
  const [major, handleMajor] = useInput('');
  const [email, setEmail] = useState('');
  const [password, handlePassword] = useInput('');
  const [passwordValid, handlePasswordValid] = useInput('');
  const [academicStatus, handleAcademicStatus] = useInput<'ATTENDING' | 'TAKE_OFF'>('ATTENDING');
  const [year, handleYear] = useInput('');
  const [month, handleMonth] = useInput('');
  const [day, handleDay] = useInput('');
  const [termsConditionsAgree, handleTermsConditionsAgree] = useCheckInput(false);

  const [isPasswordFormatOk, setIsPasswordFormatOk] = useState(true);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);

  const { state } = useLocation<{ email?: string }>();
  const history = useHistory();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async event => {
    event.preventDefault();

    if (!verifyInputs()) {
      return;
    }

    const signupResponse: AxiosResponse = await fetchSignup(
      email,
      name,
      major,
      studentId,
      password,
      createBirthdayFormat(year, month, day),
      academicStatus
    );
    const { status } = signupResponse;

    if (status === 409) {
      alert('중복 가입된 이메일이 있습니다');
      return;
    }

    alert('회원가입이 완료되었습니다');
    history.push('/');
  };

  const verifyInputs = (): boolean => {
    if (!isPasswordFormatOk) {
      alert('비밀번호를 형식에 맞게 변경해주세요');
      return false;
    }

    if (!isPasswordCorrect) {
      alert('비밀번호와 비밀번호확인이 다릅니다');
      return false;
    }

    if (!major) {
      alert('학과를 선택해주세요');
      return false;
    }

    if (!year || !month || !day) {
      alert('생년월일을 입력해주세요');
      return false;
    }

    if (!termsConditionsAgree) {
      alert('이용 약관 동의에 동의해주세요');
      return false;
    }

    return true;
  };

  const verifyPasswordFormat = (_password: string): boolean => {
    const regExp = /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*()?.,<>:;'"_+=~`₩|/]).{8,16}$/;
    return regExp.test(_password);
  };

  useEffect(() => {
    const verifiedEmail = state?.email;

    if (verifiedEmail) {
      setEmail(verifiedEmail);
    } else {
      alert('잘못된 경로로 접근하셨습니다');
      history.goBack();
    }
  }, [state, history]);

  useEffect(() => {
    if (verifyPasswordFormat(password) || password.length === 0) {
      setIsPasswordFormatOk(true);
    } else {
      setIsPasswordFormatOk(false);
    }
  }, [password]);

  useEffect(() => {
    if (password === passwordValid) {
      setIsPasswordCorrect(true);
    } else {
      setIsPasswordCorrect(false);
    }
  }, [password, passwordValid]);

  return (
    <form onSubmit={handleSubmit}>
      <StyledInputBox>
        <InputLabel className="input-label" htmlFor="name" required>
          이름
        </InputLabel>
        <RadiusInput
          id="name"
          name="name"
          value={name}
          minLength={2}
          required
          placeholder="ex) 홍길동"
          onChange={handleName}
        />
      </StyledInputBox>

      <StyledInputBox>
        <InputLabel className="input-label" htmlFor="student-id" required>
          학번
        </InputLabel>
        <RadiusInput
          id="student-id"
          name="student-id"
          value={studentId}
          minLength={8}
          maxLength={8}
          required
          placeholder="ex) 20181234"
          onChange={handleStudentId}
        />
      </StyledInputBox>

      <StyledInputBox>
        <InputLabel className="input-label" htmlFor="major" required>
          학과
        </InputLabel>
        <RadiusSelect
          id="major"
          name="major"
          value={major}
          bottomOptions={SSU_MAJORS}
          optionType="BOTTOM"
          placeholder="학과를 선택하세요"
          onChange={handleMajor}
        />
      </StyledInputBox>

      <StyledInputBox>
        <InputLabel className="input-label" htmlFor="user-id" required>
          아이디
        </InputLabel>
        <RadiusInput id="user-id" name="user-id" required value={email} readOnly />
      </StyledInputBox>

      <StyledInputBox>
        <InputLabel className="input-label" htmlFor="password" required>
          비밀번호
        </InputLabel>
        <RadiusInput
          id="password"
          name="password"
          type="password"
          value={password}
          minLength={8}
          maxLength={16}
          required
          placeholder="영문+숫자+특수문자 조합 8-16자리"
          onChange={handlePassword}
        />
        <ErrorMessage className="error-message" visible={!isPasswordFormatOk}>
          영문, 숫자, 특수문자 조합 8-16자리가 아닙니다
        </ErrorMessage>
      </StyledInputBox>

      <StyledInputBox>
        <InputLabel className="input-label" htmlFor="password-valid" required>
          비밀번호 확인
        </InputLabel>
        <RadiusInput
          id="password-valid"
          name="password-valid"
          value={passwordValid}
          minLength={8}
          maxLength={16}
          required
          type="password"
          onChange={handlePasswordValid}
        />
        <ErrorMessage className="error-message" visible={!isPasswordCorrect}>
          비밀번호가 일치하지 않습니다
        </ErrorMessage>
      </StyledInputBox>

      <StyledInputBox>
        <InputLabel className="input-label" htmlFor="academic-status" required>
          학적 정보
        </InputLabel>
        <StyledRadioWrapper>
          <Radio
            id="attending"
            className="academic-status"
            value="ATTENDING"
            name="academic-status"
            checked={academicStatus === 'ATTENDING'}
            onChange={handleAcademicStatus}
          >
            재학
          </Radio>
          <Radio
            id="take-off"
            className="academic-status"
            value="TAKE_OFF"
            name="academic-status"
            checked={academicStatus === 'TAKE_OFF'}
            onChange={handleAcademicStatus}
          >
            휴학
          </Radio>
        </StyledRadioWrapper>
      </StyledInputBox>

      <StyledInputBox>
        <InputLabel className="input-label" htmlFor="birthday" required>
          생년월일
        </InputLabel>
        <StyledBirthdayWrapper className="year">
          <StyledBirthdayInputWrapper>
            <RadiusSelect
              id="year"
              name="year"
              value={year}
              objectOptions={YEARS}
              optionType="OBJECT"
              onChange={handleYear}
            />
          </StyledBirthdayInputWrapper>
          <span>년</span>
        </StyledBirthdayWrapper>

        <StyledBirthdayWrapper className="month">
          <StyledBirthdayInputWrapper>
            <RadiusSelect
              id="month"
              name="month"
              value={month}
              objectOptions={MONTHS}
              optionType="OBJECT"
              onChange={handleMonth}
            />
          </StyledBirthdayInputWrapper>
          <span>월</span>
        </StyledBirthdayWrapper>

        <StyledBirthdayWrapper className="day">
          <StyledBirthdayInputWrapper>
            <RadiusSelect
              id="day"
              name="day"
              value={day}
              objectOptions={DAYS}
              optionType="OBJECT"
              onChange={handleDay}
            />
          </StyledBirthdayInputWrapper>
          <span>일</span>
        </StyledBirthdayWrapper>
      </StyledInputBox>

      <StyledInputBox>
        <InputLabel className="input-label" htmlFor="terms-conditions-agree" required>
          약관 동의
        </InputLabel>
        <Textarea readOnly value={TERMS_CONDITIONS_AGREE} />
        <StyledAgreeWrapper>
          <p className="check-name">이용 약관 동의</p>
          <CheckBox
            id="terms-conditions-agree"
            name="terms-conditions-agree"
            checked={termsConditionsAgree}
            onChange={handleTermsConditionsAgree}
          />
        </StyledAgreeWrapper>
      </StyledInputBox>

      <FullButton theme="prime">가입하기</FullButton>
    </form>
  );
};

export default JoinForm;
