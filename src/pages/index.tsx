import {
  LargeEmptyButton,
  LargeFillButton,
  MiddleEmptyButton,
  MiddleFillButton,
  SmallEmptyButton,
  SmallFillButton,
} from 'components/atoms/Button/Button';

const Index: React.FC = () => {
  return (
    <>
      <div>
        <SmallFillButton primary>전송</SmallFillButton>
        <SmallEmptyButton primary>전송</SmallEmptyButton>
      </div>
      <div style={{ backgroundColor: '#0ebeaf' }}>
        <SmallFillButton>더보기</SmallFillButton>
        <SmallEmptyButton>더보기</SmallEmptyButton>
      </div>
      <div>
        <MiddleFillButton primary>로그인</MiddleFillButton>
        <MiddleEmptyButton primary>로그인</MiddleEmptyButton>
      </div>
      <div>
        <LargeFillButton primary>스터디 추가</LargeFillButton>
        <LargeEmptyButton primary>스터디 추가</LargeEmptyButton>
      </div>
    </>
  );
};

export default Index;
