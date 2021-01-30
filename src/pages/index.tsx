import HeaderLayout from 'layouts/HeaderLayout/HeaderLayout';
import IndexTemplate from 'templates/IndexTemplate/IndexTemplate';
import AppDownloadBanner from 'components/organisms/AppDownloadBanner/AppDownloadBanner';
import LoginBox from 'components/organisms/LoginBox/LoginBox';
import AppDescription from 'components/organisms/AppDescription/AppDescription';

const Index: React.FC = () => {
  return (
    <HeaderLayout>
      <IndexTemplate app={<AppDownloadBanner />} login={<LoginBox />} description={<AppDescription />} />
    </HeaderLayout>
  );
};

export default Index;
