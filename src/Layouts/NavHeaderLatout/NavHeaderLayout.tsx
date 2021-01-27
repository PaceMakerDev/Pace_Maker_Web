import Header from 'components/organisms/Header/Header';
import Navigation from 'components/organisms/Navigation/Navigation';
import { StyledContent } from './NavHeaderLayout.styled';

const NavHeaderLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header bell />
      <Navigation />
      <StyledContent>{children}</StyledContent>
    </>
  );
};

export default NavHeaderLayout;
