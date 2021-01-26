import { StyledAppDescription } from './AppDescription.styled';

const AppDescription: React.FC = () => {
  return (
    <StyledAppDescription>
      <div className="image-wrapper">
        <img src="/images/iphone2.png" alt="phone" />
      </div>
      <div className="description">
        <p>
          여기 부분에는 <span>앱 설명</span>이 나옵니다 <br />
          옆에 핸드폰 모양에 <span>앱의 디자인</span>이 들어갑니다 <br />
          지금은 <span>아무말</span>이나 집어 넣습니다
        </p>
      </div>
    </StyledAppDescription>
  );
};

export default AppDescription;
