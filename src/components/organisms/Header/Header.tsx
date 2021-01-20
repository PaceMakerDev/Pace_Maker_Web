import { StyledHeader, StyledMenuWrapper, StyledMenu } from './Header.styled';
import Link from 'next/link';
import { FaBell } from 'react-icons/fa';

const Header: React.FC<HeaderProps> = ({ menu, bell }) => {
  return (
    <StyledHeader>
      <Link href="/">
        <a>
          <img className="logo" src="/images/ssutudy_long_logo.png" alt="header_logo" />
        </a>
      </Link>
      <StyledMenuWrapper>
        {menu &&
          menu.map(item => (
            <Link href={item.link} key={item.name} passHref>
              <StyledMenu>{item.name}</StyledMenu>
            </Link>
          ))}
        {bell && <FaBell />}
      </StyledMenuWrapper>
    </StyledHeader>
  );
};

export default Header;
