import { MainSection, AppSection, LoginSection, DescriptionSection } from './IndexTemplate.styled';

const IndexTemplate: React.FC<IndexTemplateProps> = ({ app, login, description }) => {
  return (
    <>
      <MainSection>
        <AppSection>{app}</AppSection>
        <LoginSection>{login}</LoginSection>
      </MainSection>
      <DescriptionSection>{description}</DescriptionSection>
    </>
  );
};

export default IndexTemplate;
