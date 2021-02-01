import {
  StyledMystudyTemplate,
  StyledStudyListSection,
  StyledTotalStudySection,
  StyledWeekStudySection,
} from './MystudyTemplate.styled';
import { Link } from 'react-router-dom';

const MystudyTemplate: React.FC<MystudyTemplateProps> = ({mystudyList}) => {
  return (
    <StyledMystudyTemplate>
      <h1 className="title">내 스터디</h1>
      <StyledStudyListSection>
        <Link className="more" to="/mystudy/classlist">
          더보기 &gt;
        </Link>
        <div className="study-block">
          {mystudyList[0]}
        </div>
        <div className="study-block">
          {mystudyList[1]}
        </div>
      </StyledStudyListSection>
      <StyledTotalStudySection>total study</StyledTotalStudySection>
      <StyledWeekStudySection>week study</StyledWeekStudySection>
    </StyledMystudyTemplate>
  );
};

export default MystudyTemplate;
