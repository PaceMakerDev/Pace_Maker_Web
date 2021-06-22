import React, { useCallback, useState } from 'react';
import InputLabel from 'components/atoms/Label/InputLabel/InputLabel';
import RadiusInput from 'components/atoms/Input/RadiusInput/RadiusInput';
import RadiusSelect from 'components/molecules/Select/RadiusSelect/RadiusSelect';
import Radio from 'components/atoms/Radio/Radio';
import Textarea from 'components/atoms/Textarea/Textarea';
import CheckBox from 'components/atoms/CheckBox/CheckBox';
import FullButton from 'components/atoms/Button/FullButton/FullButton';
import { MajorCategory } from 'Service';
import {
  StyledInputBox,
  StyledRadioWrapper,
  StyledBirthdayWrapper,
  StyledBirthdayInputWrapper,
  StyledAgreeWrapper,
} from './JoinForm.styled';

const majors: Array<MajorCategory> = [
  { category: '인문', majors: ['기독교학과', '국어국문학과', '영어영문학과'] },
  { category: '경상', majors: ['경영학과', '벤처중소기업학과', '회계학과', '경제학과', '글로벌통상학과', '금융학부'] },
  { category: '자연', majors: ['수학과', '물리학과'] },
  { category: '법대', majors: ['법학과', '국제법무학과'] },
  { category: '사회', majors: ['사회복지학과'] },
  { category: '공대', majors: ['기계공학과'] },
  { category: 'IT', majors: ['컴퓨터학부'] },
];

const years: Array<string> = ['2021', '2020', '2019', '2018', '2017', '2016', '2015'];
const months: Array<string> = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

const termsConditionsAgreeText =
  'Pace Maker 개인정보수집방침\n\nOO(이하 “회사”)는 개인정보수집방침은 정보통신서비스제공자가 준수하여야 하는 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 개인정보보호법 등 관계 법령 및 개인정보보호 규정, 가이드라인을 준수하고 있습니다. 본 개인정보수집방침은 회사에서 운영하는 WEKIT APP(이하 “WEKIT”)에 적용됩니다.';

const JoinForm: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [major, setMajor] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState('');
  const [academicStatus, setAcademicStatus] = useState('attending');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [termsConditionsAgree, setTermsConditionsAgree] = useState(false);

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = useCallback(event => {
    const { value, name, checked } = event.target;

    if (name === 'name') {
      setUserName(value);
    }
    if (name === 'student-id') {
      setStudentId(value);
    }
    if (name === 'major') {
      setMajor(value);
    }
    if (name === 'user-id') {
      setUserId(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
    if (name === 'password-valid') {
      setPasswordValid(value);
    }
    if (name === 'academic-status') {
      setAcademicStatus(value);
    }
    if (name === 'year') {
      setYear(value);
    }
    if (name === 'month') {
      setMonth(value);
    }
    if (name === 'terms-conditions-agree') {
      setTermsConditionsAgree(checked);
    }
  }, []);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledInputBox>
        <InputLabel className="input-label" htmlFor="name" required>
          이름
        </InputLabel>
        <RadiusInput id="name" name="name" value={userName} required placeholder="ex) 홍길동" onChange={handleInput} />
      </StyledInputBox>

      <StyledInputBox>
        <InputLabel className="input-label" htmlFor="student-id" required>
          학번
        </InputLabel>
        <RadiusInput
          id="student-id"
          name="student-id"
          value={studentId}
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
          bottomOptions={majors}
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
          required
          placeholder="영문+숫자+특수문자 조합 8-16자리"
          onChange={handleInput}
        />
      </StyledInputBox>

      <StyledInputBox>
        <InputLabel className="input-label" htmlFor="password-valid" required>
          비밀번호 확인
        </InputLabel>
        <RadiusInput
          id="password-valid"
          name="password-valid"
          value={passwordValid}
          required
          type="password"
          onChange={handleInput}
        />
      </StyledInputBox>

      <StyledInputBox>
        <InputLabel className="input-label" htmlFor="academic-status" required>
          학적 정보
        </InputLabel>
        <StyledRadioWrapper>
          <Radio
            id="attending"
            className="academic-status"
            value="attending"
            name="academic-status"
            checked={academicStatus === 'attending'}
            onChange={handleInput}
          >
            재학
          </Radio>
          <Radio
            id="take-off"
            className="academic-status"
            value="take-off"
            name="academic-status"
            checked={academicStatus === 'take-off'}
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
              objectOptions={years}
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
              objectOptions={months}
              optionType="OBJECT"
              onChange={handleInput}
            />
          </StyledBirthdayInputWrapper>
          <span>월</span>
        </StyledBirthdayWrapper>

        <StyledBirthdayWrapper className="day">
          <StyledBirthdayInputWrapper>
            <RadiusSelect
              id="month"
              name="month"
              value={month}
              objectOptions={months}
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
