import IndexTemplate from 'templates/IndexTemplate/IndexTemplate';
import HeaderLayout from 'Layouts/HeaderLayout/HeaderLayout';

const appJSX = <div>123</div>;
const loginJSX = <div>456</div>;
const descriptionJSX = <div>789</div>;

const Index: React.FC = () => {
  return (
    <HeaderLayout>
      <IndexTemplate app={appJSX} login={loginJSX} description={descriptionJSX} />
    </HeaderLayout>
  );
};

export default Index;
