import NavHeaderLayout from 'layouts/NavHeaderLatout/NavHeaderLayout';
import MystudyTemplate from 'templates/MystudyTemplate/MystudyTemplate';
import StudyCard from 'components/molecules/StudyCard/StudyCard';

const Mystudy: React.FC = () => {
  const mystudyList = [
    <StudyCard title="테스트" participant={15} tags={['tag1', 'tag2', 'tag3']} beginTime="10:00" />,
    <StudyCard title="테스트" participant={15} tags={['tag1', 'tag2', 'tag3']} beginTime="10:00" />,
  ];
  return (
    <NavHeaderLayout>
      <MystudyTemplate mystudyList={mystudyList} />
    </NavHeaderLayout>
  );
};

export default Mystudy;
