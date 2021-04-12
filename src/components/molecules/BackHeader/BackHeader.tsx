import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from 'components/atoms/Header/Header';
import { FaAngleLeft } from 'react-icons/fa';
import { StyledBackHeader, StyledBackIcon } from './BackHeader.styled';

interface Props {
  children?: React.ReactNode;
  backLink?: string;
}

const BackHeader: React.FC<Props> = ({ children, backLink }: Props) => {
  const history = useHistory();

  return (
    <StyledBackHeader>
      <StyledBackIcon onClick={backLink ? () => history.push(backLink) : () => history.goBack()}>
        <FaAngleLeft />
      </StyledBackIcon>
      <Header textCenter fontSize="1.25rem">{children}</Header>
    </StyledBackHeader>
  );
};

export default React.memo(BackHeader);
