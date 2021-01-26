import IndexTemplate from 'templates/IndexTemplate/IndexTemplate';
import HeaderLayout from 'Layouts/HeaderLayout/HeaderLayout';
import LoginBox from 'components/organisms/LoginBox/LoginBox';
import AppDownloadBanner from 'components/organisms/AppDownloadBanner/AppDownloadBanner';
import AppDescription from 'components/organisms/AppDescription/AppDescription';
import Head from 'next/head';

const Index: React.FC = () => {
  return (
    <>
      <Head>
        <title>슈터디 | SSUtudy</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HeaderLayout>
        <IndexTemplate app={<AppDownloadBanner />} login={<LoginBox />} description={<AppDescription />} />
      </HeaderLayout>
    </>
  );
};

export default Index;
