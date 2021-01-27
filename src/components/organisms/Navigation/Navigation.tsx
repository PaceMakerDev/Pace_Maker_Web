import { StyledNavigation } from './Navigation.styled';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navigation: React.FC = () => {
  const router = useRouter();
  const logout = () => {
    localStorage.removeItem('accessKey');
    router.push('/');
  };
  return (
    <StyledNavigation>
      <ul>
        <li>
          <Link href="/mystudy">
            <a>홈</a>
          </Link>
        </li>
        <li>
          <Link href="/mystudy">
            <a>스터디 찾기</a>
          </Link>
        </li>
        <li>
          <Link href="/mystudy">
            <a>내 스터디</a>
          </Link>
        </li>
        <li>
          <Link href="/mystudy">
            <a>통계 보기</a>
          </Link>
        </li>
        <li>
          <Link href="/mystudy">
            <a>내 정보</a>
          </Link>
        </li>
        <li>
          <a className="logout" onClick={logout}>
            로그아웃
          </a>
        </li>
      </ul>
    </StyledNavigation>
  );
};

export default Navigation;
