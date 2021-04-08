import { StyledStudyCard, StyledTagTimeWrapper, StyledTitleWrapper } from './StudyCard.styled';
import { FaRegClock } from 'react-icons/fa';
import { BsPersonFill } from "react-icons/bs";

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
        <h1 className='card-title'>{title}</h1>
        <BsPersonFill />
        <span>{participant}명</span>
      </StyledTitleWrapper>

      <StyledTagTimeWrapper>
        <div className="tag-box">
          {tags.map((tag, idx) => (
            <span key={idx}>{tag}</span>
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
