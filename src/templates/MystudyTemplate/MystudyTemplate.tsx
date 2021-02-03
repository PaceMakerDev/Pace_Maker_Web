import {
  StyledMystudyTemplate,
  StyledStudyListSection,
  StyledTotalStudySection,
  StyledWeekStudySection,
  StyledTitle,
} from './MystudyTemplate.styled';
import { Link } from 'react-router-dom';

const MystudyTemplate: React.FC<MystudyTemplateProps> = ({ mystudyList }) => {
  return (
    <StyledMystudyTemplate>
      <StyledTitle className="title">내 스터디</StyledTitle>
      <StyledStudyListSection>
        <Link className="more" to="/mystudy/classlist">
          더보기 &gt;
        </Link>
        <div className="study-block">{mystudyList[0]}</div>
        <div className="study-block">{mystudyList[1]}</div>
      </StyledStudyListSection>
      <StyledTotalStudySection>
        <StyledTitle>총 공부량</StyledTitle>
      </StyledTotalStudySection>
      <StyledWeekStudySection>
        <StyledTitle>일주일 공부량</StyledTitle>
      </StyledWeekStudySection>
    </StyledMystudyTemplate>
  );
};

export default MystudyTemplate;
