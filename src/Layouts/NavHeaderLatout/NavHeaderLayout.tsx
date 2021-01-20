import Header from 'components/organisms/Header/Header';
import { StyledContent } from './NavHeaderLayout.styled';

const NavHeaderLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header></Header>
      {/* nav */}
      <StyledContent>{children}</StyledContent>
    </>
  );
};

export default NavHeaderLayout;
