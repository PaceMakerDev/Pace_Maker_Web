import IndexTemplate from 'templates/IndexTemplate/IndexTemplate';
import HeaderLayout from 'Layouts/HeaderLayout/HeaderLayout';
import LoginBox from 'components/organisms/LoginBox/LoginBox';
import AppDownloadBanner from 'components/organisms/AppDownloadBanner/AppDownloadBanner';
import AppDescription from 'components/organisms/AppDescription/AppDescription';

const Index: React.FC = () => {
  return (
    <HeaderLayout>
      <IndexTemplate app={<AppDownloadBanner />} login={<LoginBox />} description={<AppDescription />} />
    </HeaderLayout>
  );
};

export default Index;
