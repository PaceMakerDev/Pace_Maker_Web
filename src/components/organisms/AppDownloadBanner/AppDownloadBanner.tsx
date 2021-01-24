import { StyledAppDownloadBanner, StyledMentWrapper, StyledButtonWrapper } from './AppDownloadBanner.styled';
import { LargeEmptyButton } from 'components/atoms/Button/Button';
import { FaAppStore, FaGooglePlay } from 'react-icons/fa';

const AppDownloadBanner: React.FC = () => {
  return (
    <StyledAppDownloadBanner>
      <StyledMentWrapper>
        <h1>나랑 같은 공부메이트</h1>
        <h1>찾고 싶을땐?</h1>
        <h1>숭실대 학생을 위한 슈터디!</h1>
      </StyledMentWrapper>
      <StyledButtonWrapper>
        <LargeEmptyButton>
          <FaAppStore />
          AppStore
        </LargeEmptyButton>
        <LargeEmptyButton>
          <FaGooglePlay />
          GooglePlay
        </LargeEmptyButton>
      </StyledButtonWrapper>
    </StyledAppDownloadBanner>
  );
};

export default AppDownloadBanner;
