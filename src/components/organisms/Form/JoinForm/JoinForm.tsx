import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import InputLabel from 'components/atoms/Label/InputLabel/InputLabel';
import RadiusInput from 'components/atoms/Input/RadiusInput/RadiusInput';
import RadiusSelect from 'components/molecules/Select/RadiusSelect/RadiusSelect';
import Radio from 'components/atoms/Radio/Radio';
import Textarea from 'components/atoms/Textarea/Textarea';
import ErrorMessage from 'components/atoms/Message/ErrorMessage/ErrorMessage';
import CheckBox from 'components/atoms/CheckBox/CheckBox';
import FullButton from 'components/atoms/Button/FullButton/FullButton';
import { SignupApi } from 'Api';
import { yearData, monthData, dayData } from 'common/birthdayConst';
import { majorData } from 'common/majorConst';
import { API_SERVER_ADDRESS } from 'common/constants';
import {
  StyledInputBox,
  StyledRadioWrapper,
  StyledBirthdayWrapper,
  StyledBirthdayInputWrapper,
  StyledAgreeWrapper,
} from './JoinForm.styled';

const termsConditionsAgreeText =
  'Pace Maker 개인정보수집방침\n\nOO(이하 “회사”)는 개인정보수집방침은 정보통신서비스제공자가 준수하여야 하는 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 개인정보보호법 등 관계 법령 및 개인정보보호 규정, 가이드라인을 준수하고 있습니다. 본 개인정보수집방침은 회사에서 운영하는 WEKIT APP(이하 “WEKIT”)에 적용됩니다.';

const JoinForm: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [major, setMajor] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState('');
  const [academicStatus, setAcademicStatus] = useState<'ATTENDING' | 'TAKE_OFF'>('ATTENDING');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [termsConditionsAgree, setTermsConditionsAgree] = useState(false);

  const [isEmailFormat, setIsEmailFormat] = useState(true);
  const [isPasswordFormat, setIsPasswordFormat] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const history = useHistory();

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = useCallback(event => {
    const { value, name, checked } = event.target;

    if (name === 'name') {
      setUserName(value);
    }

    if (name === 'student-id') {
      if (isNumber(value)) {
        setStudentId(value);
      } else {
        alert('숫자만 입력해주세요');
      }
    }

    if (name === 'major') {
      setMajor(value);
    }

    if (name === 'user-id') {
      setUserId(value);

      if (verifyEmailFormat(value)) {
        setIsEmailFormat(true);
      } else {
        setIsEmailFormat(false);
      }
    }

    if (name === 'academic-status') {
      if (value === 'ATTENDING') {
        setAcademicStatus(value);
      }

      if (value === 'TAKE_OFF') {
        setAcademicStatus(value);
      }
    }

    if (name === 'year') {
      setYear(value);
    }

    if (name === 'month') {
      setMonth(value);
    }

    if (name === 'day') {
      setDay(value);
    }

    if (name === 'terms-conditions-agree') {
      setTermsConditionsAgree(checked);
    }
  }, []);

  const handlePassword: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    event => {
      const { value, name } = event.target;
      if (name === 'password') {
        setPassword(value);

        if (passwordValid === value || passwordValid.length === 0) {
          setIsPasswordValid(true);
        } else {
          setIsPasswordValid(false);
        }

        if (verifyPasswordFormat(value)) {
          setIsPasswordFormat(true);
        } else {
          setIsPasswordFormat(false);
        }
      }
      if (name === 'password-valid') {
        setPasswordValid(value);

        if (password === value) {
          setIsPasswordValid(true);
        } else {
          setIsPasswordValid(false);
        }
      }
    },
    [password, passwordValid]
  );

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async event => {
    event.preventDefault();

    if (!isEmailFormat) {
      alert('아이디를 이메일 형식으로 변경해주세요');
      return;
    }

    if (!isPasswordFormat) {
      alert('비밀번호를 형식에 맞게 변경해주세요');
      return;
    }

    if (!isPasswordValid) {
      alert('비밀번호와 비밀번호확인이 다릅니다');
      return;
    }

    if (!major) {
      alert('학과를 선택해주세요');
      return;
    }

    if (!year || !month || !day) {
      alert('생년월일을 입력해주세요');
      return;
    }

    if (!termsConditionsAgree) {
      alert('이용 약관 동의에 동의해주세요');
      return;
    }

    try {
      const body: SignupApi = {
        email: userId,
        name: userName,
        major,
        studentId,
        password,
        birthday: makeBirthdayFormat(year, month, day),
        academicStatus,
      };

      await axios.post(`${API_SERVER_ADDRESS}/auth/signup`, body);
      alert('회원가입이 완료되었습니다');
      history.push('/');
    } catch (error) {
      const { status, statusText } = error.response;
      if (status === 409) {
        alert('중복 가입된 이메일이 있습니다');
      } else {
        alert(`Error: ${status}(${statusText})`);
      }
    }
  };

  const verifyEmailFormat = (email: string): boolean => {
    const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return regExp.test(email);
  };

  const verifyPasswordFormat = (_password: string): boolean => {
    const regExp = /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*()?.,<>:;'"_+=~`₩|/]).{8,16}$/;
    return regExp.test(_password);
  };

  const makeBirthdayFormat = (_year: string, _month: string, _day: string): string => {
    let result = year;

    if (parseInt(_month) < 10) {
      result += `-0${_month}`;
    } else {
      result += `-${_month}`;
    }

    if (parseInt(_day) < 10) {
      result += `-0${_day}`;
    } else {
      result += `-${_day}`;
    }

    return result;
  };

  const isNumber = (value: string): boolean => !Number.isNaN(Number(value));

  return (
    <form onSubmit={handleSubmit}>
      <StyledInputBox>
        <InputLabel className="input-label" htmlFor="name" required>
          이름
        </InputLabel>
        <RadiusInput
          id="name"
          name="name"
          value={userName}
          minLength={2}
          required
          placeholder="ex) 홍길동"
          onChange={handleInput}
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
          onChange={handleInput}
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
          bottomOptions={majorData}
          optionType="BOTTOM"
          placeholder="학과를 선택하세요"
          onChange={handleInput}
        />
      </StyledInputBox>

      <StyledInputBox>
        <InputLabel className="input-label" htmlFor="user-id" required>
          아이디
        </InputLabel>
        <RadiusInput
          id="user-id"
          name="user-id"
          value={userId}
          required
          placeholder="이메일 형식으로 적어주세요"
          onChange={handleInput}
        />
        <ErrorMessage className="error-message" visible={!isEmailFormat}>
          이메일 형식이 아닙니다
        </ErrorMessage>
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
        <ErrorMessage className="error-message" visible={!isPasswordFormat}>
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
          onChange={handlePassword}
        />
        <ErrorMessage className="error-message" visible={!isPasswordValid}>
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
            onChange={handleInput}
          >
            재학
          </Radio>
          <Radio
            id="take-off"
            className="academic-status"
            value="TAKE_OFF"
            name="academic-status"
            checked={academicStatus === 'TAKE_OFF'}
            onChange={handleInput}
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
              objectOptions={yearData}
              optionType="OBJECT"
              onChange={handleInput}
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
              objectOptions={monthData}
              optionType="OBJECT"
              onChange={handleInput}
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
              objectOptions={dayData}
              optionType="OBJECT"
              onChange={handleInput}
            />
          </StyledBirthdayInputWrapper>
          <span>일</span>
        </StyledBirthdayWrapper>
      </StyledInputBox>

      <StyledInputBox>
        <InputLabel className="input-label" htmlFor="terms-conditions-agree" required>
          약관 동의
        </InputLabel>
        <Textarea readOnly value={termsConditionsAgreeText} />
        <StyledAgreeWrapper>
          <p className="check-name">이용 약관 동의</p>
          <CheckBox
            id="terms-conditions-agree"
            name="terms-conditions-agree"
            checked={termsConditionsAgree}
            onChange={handleInput}
          />
        </StyledAgreeWrapper>
      </StyledInputBox>

      <FullButton theme="prime">가입하기</FullButton>
    </form>
  );
};

export default JoinForm;
