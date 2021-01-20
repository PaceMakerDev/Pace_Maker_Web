import { StyledContent } from './HeaderLayout.styled';

const HeaderLayout: React.FC = ({ children }) => {
  return (
    <>
      {/* header */}
      <StyledContent>{children}</StyledContent>
      {/* footer */}
    </>
  );
};

export default HeaderLayout;
