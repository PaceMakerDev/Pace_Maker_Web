import IndexTemplate from 'templates/IndexTemplate/IndexTemplate';
import HeaderLayout from 'Layouts/HeaderLayout/HeaderLayout';
import LoginBox from 'components/organisms/LoginBox/LoginBox';
import AppDownloadBanner from 'components/organisms/AppDownloadBanner/AppDownloadBanner';

const descriptionJSX = <div>789</div>;

const Index: React.FC = () => {
  return (
    <HeaderLayout>
      <IndexTemplate app={<AppDownloadBanner />} login={<LoginBox />} description={descriptionJSX} />
    </HeaderLayout>
  );
};

export default Index;
