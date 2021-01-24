import IndexTemplate from 'templates/IndexTemplate/IndexTemplate';
import HeaderLayout from 'Layouts/HeaderLayout/HeaderLayout';
import LoginBox from 'components/organisms/LoginBox/LoginBox';

const appJSX = <div>123</div>;
const descriptionJSX = <div>789</div>;

const Index: React.FC = () => {
  return (
    <HeaderLayout>
      <IndexTemplate app={appJSX} login={<LoginBox />} description={descriptionJSX} />
    </HeaderLayout>
  );
};

export default Index;
