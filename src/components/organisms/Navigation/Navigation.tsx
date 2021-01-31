import { StyledNavigation } from './Navigation.styled';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from 'action/account';

const Navigation: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const logout = () => {
    localStorage.removeItem('accessKey');
    localStorage.removeItem('user');
    dispatch(logOut());
    history.push('/');
  };
  return (
    <StyledNavigation>
      <ul>
        <li>
          <Link to="/mystudy">홈</Link>
        </li>
        <li>
          <Link to="/mystudy">스터디 찾기</Link>
        </li>
        <li>
          <Link to="/mystudy">내 스터디</Link>
        </li>
        <li>
          <Link to="/mystudy">통계 보기</Link>
        </li>
        <li>
          <Link to="/mystudy">내 정보</Link>
        </li>
        <li>
          <Link to="#" className="logout" onClick={logout}>
            로그아웃
          </Link>
        </li>
      </ul>
    </StyledNavigation>
  );
};

export default Navigation;
