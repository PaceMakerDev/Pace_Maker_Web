import React from 'react';
import { useHistory } from 'react-router-dom';
import HighlightMessage from 'components/atoms/Message/HighlightMessage/HighlightMessage';
import BasicMessage from 'components/atoms/Message/BasicMessage/BasicMessage';
import FullButton from 'components/atoms/Button/FullButton/FullButton';
import { StyledFindAuthAlert } from './FindAuthAlert.styled';

interface Props {
  name: string;
  email: string;
  authType: 'email' | 'password';
}

const FindAuthAlert: React.FC<Props> = ({ name, email, authType }) => {
  const history = useHistory();

  return (
    <StyledFindAuthAlert>
      {authType === 'email' && (
        <HighlightMessage className="highlight-message" fontSize="1rem" center>
          {name}님의 이메일입니다
        </HighlightMessage>
      )}

      {authType === 'password' && (
        <HighlightMessage className="highlight-message" fontSize="1rem" center>
          {name}님의 아래 이메일로
          <br />
          비밀번호 안내 메일을 발송했습니다
        </HighlightMessage>
      )}

      <BasicMessage className="basic-message" fontSize="1rem" center>
        {email}
      </BasicMessage>

      <FullButton theme="prime" onClick={() => history.push('/auth/login')}>
        로그인
      </FullButton>
    </StyledFindAuthAlert>
  );
};

export default FindAuthAlert;
