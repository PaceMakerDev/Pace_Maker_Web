import NavHeaderLayout from 'layouts/NavHeaderLatout/NavHeaderLayout';
import ClassListTemplate from 'templates/ClassListTemplate/ClassListTemplate';
import StudyCard from 'components/molecules/StudyCard/StudyCard';

const ClassList: React.FC = () => {
  const mystudyList = [
    <StudyCard title="테스트" participant={15} tags={['tag1', 'tag2', 'tag3']} beginTime="10:00" />,
    <StudyCard title="테스트" participant={15} tags={['tag1', 'tag2', 'tag3']} beginTime="10:00" />,
  ];

  return (
    <NavHeaderLayout>
      <ClassListTemplate mystudyList={mystudyList} />
    </NavHeaderLayout>
  );
};

export default ClassList;
