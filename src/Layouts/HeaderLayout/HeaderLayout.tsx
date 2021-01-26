import { StyledContent } from './HeaderLayout.styled';
import Header from 'components/organisms/Header/Header';
import Footer from 'components/organisms/Footer/Footer';

const HeaderLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <StyledContent>{children}</StyledContent>
      <Footer />
    </>
  );
};

export default HeaderLayout;
