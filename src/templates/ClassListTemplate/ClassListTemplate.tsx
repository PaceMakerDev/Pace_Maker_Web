import { SmallEmptyButton } from 'components/atoms/Button/Button';
import { StyledClassListTemplate, StyledMystudyListSection, StyledTitle } from './ClassListTemplate.styled';

const ClassListTemplate: React.FC<ClassListTemplateProps> = ({ mystudyList }) => {
  return (
    <StyledClassListTemplate>
      <StyledTitle>내 스터디 목록</StyledTitle>
      <StyledMystudyListSection>
        {mystudyList.map(mystudy => (
          <div className="study-block">{mystudy}</div>
        ))}
        <div className="button-wrapper">
          <SmallEmptyButton primary>더보기</SmallEmptyButton>
        </div>
      </StyledMystudyListSection>
    </StyledClassListTemplate>
  );
};

export default ClassListTemplate;
