import { Link } from 'react-router-dom';
import { StyledHeader, StyledMenuWrapper, StyledMenu } from './Header.styled';
import { FaBell } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

interface Props {
  menu?: Array<Menu>;
  bell?: boolean;
}

const Header: React.FC<Props> = ({ menu, bell }) => {
  const account = useSelector((state: RootState) => state.account);
  const { isLogin, getUser } = account;
  const user = getUser();

  return (
    <StyledHeader>
      <Link to={isLogin ? '/mystudy' : '/'}>
        <img className="logo" src="/images/ssutudy_long_logo.png" alt="header_logo" />
      </Link>
      <StyledMenuWrapper>
        {menu &&
          menu.map(item => (
            <StyledMenu key={item.name}>
              <Link to={item.link}>{item.name}</Link>
            </StyledMenu>
          ))}
        {user && <p>{user.name}님, 환영합니다</p>}
        {bell && <FaBell />}
      </StyledMenuWrapper>
    </StyledHeader>
  );
};

export default Header;
