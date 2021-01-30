import { Link } from 'react-router-dom';
import { StyledHeader, StyledMenuWrapper, StyledMenu } from './Header.styled';
import { FaBell } from 'react-icons/fa';

interface Props {
  menu?: Array<Menu>;
  bell?: boolean;
}

const Header: React.FC<Props> = ({ menu, bell }) => {
  return (
    <StyledHeader>
      <Link to="/">
        <img className="logo" src="/images/ssutudy_long_logo.png" alt="header_logo" />
      </Link>
      <StyledMenuWrapper>
        {menu &&
          menu.map(item => (
            <StyledMenu key={item.name}>
              <Link to={item.link}>{item.name}</Link>
            </StyledMenu>
          ))}
        {bell && <FaBell />}
      </StyledMenuWrapper>
    </StyledHeader>
  );
};

export default Header;
