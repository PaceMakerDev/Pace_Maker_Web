import { StyledContent } from './NavHeaderLayout.styled';

const NavHeaderLayout: React.FC = ({ children }) => {
  return (
    <>
      {/* header */}
      {/* nav */}
      <StyledContent>{children}</StyledContent>
    </>
  );
};

export default NavHeaderLayout;
