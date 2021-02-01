import { StyledStudyCard, StyledTagTimeWrapper, StyledTitleWrapper } from './StudyCard.styled';
import { FaRegClock } from 'react-icons/fa';

interface Props {
  title: string;
  participant: number;
  tags: Array<string>;
  beginTime: string;
}

const StudyCard: React.FC<Props> = ({ title, participant, tags, beginTime }) => {
  return (
    <StyledStudyCard>
      <StyledTitleWrapper>
        <h1>{title}</h1>
        <span>{participant}명</span>
      </StyledTitleWrapper>
      <StyledTagTimeWrapper>
        <div className="tag-box">
          {tags.map(tag => (
            <span>{tag}</span>
          ))}
        </div>
        <div className="time-box">
          <FaRegClock color="#333" size="16px" />
          <span>{beginTime}</span>
        </div>
      </StyledTagTimeWrapper>
    </StyledStudyCard>
  );
};

export default StudyCard;
