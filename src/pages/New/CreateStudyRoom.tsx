import BackHeader from 'components/molecules/BackHeader/BackHeader';
import CreateStudyRoomForm from 'components/organisms/Form/CreateStudyRoomForm/CreateStudyRoomForm';
import FormTemplate from 'components/templates/FormTemplate/FormTemplate';
import React from 'react';

const CreateStudyRoom: React.FC = () => (
  <FormTemplate headerSection={<BackHeader>스터디룸 만들기</BackHeader>} formSection={<CreateStudyRoomForm />} />
);
export default CreateStudyRoom;
