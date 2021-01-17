import { MainSection, AppSection, LoginSection, DescriptionSection } from './IndexTemplate.styled';

const IndexTemplate: React.FC = () => {
  return (
    <>
      {/* navigation */}
      <MainSection>
        <AppSection>123</AppSection>
        <LoginSection>123</LoginSection>
      </MainSection>
      <DescriptionSection></DescriptionSection>
      {/* footer */}
    </>
  );
};

export default IndexTemplate;
