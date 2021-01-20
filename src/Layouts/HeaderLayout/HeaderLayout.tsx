import { StyledContent } from './HeaderLayout.styled';
import Header from 'components/organisms/Header/Header';

const HeaderLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <StyledContent>{children}</StyledContent>
      {/* footer */}
    </>
  );
};

export default HeaderLayout;
